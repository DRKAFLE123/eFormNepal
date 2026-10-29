import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticles, getArticleBySlug } from "@/data/blogServer";
import ArticleDetailClient from "./ArticleDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | E-Form Nepal",
    };
  }

  const url = `https://eformnepal.com/blog/${article.slug}`;
  const ogImage = article.thumbnailUrl || "https://eformnepal.com/logo.svg";

  return {
    title: `${article.titleEn} | E-Form Nepal Guide`,
    description: article.summaryEn,
    keywords: [...article.tags, "E-Form Nepal", "online forms Nepal", article.category],
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.titleEn,
      description: article.summaryEn,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.titleEn,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.titleEn,
      description: article.summaryEn,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getArticles();
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  // Structured Data (Schema.org JSON-LD)
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titleEn,
    description: article.summaryEn,
    image: [article.thumbnailUrl || "https://eformnepal.com/logo.svg"],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: "https://eformnepal.com",
    },
    publisher: {
      "@type": "Organization",
      name: "E-Form Nepal",
      logo: {
        "@type": "ImageObject",
        url: "https://eformnepal.com/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eformnepal.com/blog/${article.slug}`,
    },
  };

  const jsonLdVideo = article.youtubeVideoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: article.titleEn,
        description: article.summaryEn,
        thumbnailUrl: [article.thumbnailUrl],
        uploadDate: article.publishedAt,
        embedUrl: `https://www.youtube.com/embed/${article.youtubeVideoId}`,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {jsonLdVideo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
        />
      )}
      <ArticleDetailClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
