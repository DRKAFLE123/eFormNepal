import fs from "fs";
import path from "path";
import { BlogArticle, INITIAL_ARTICLES, extractYouTubeId } from "./blog";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "blogArticles.json");

export function getArticles(): BlogArticle[] {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not read dynamic blog file, using initial seed data:", error);
  }
  return INITIAL_ARTICLES;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  const articles = getArticles();
  return articles.find((a) => a.slug === slug || a.id === slug);
}

export function saveArticle(articleData: Partial<BlogArticle> & { titleEn: string }): BlogArticle {
  const articles = getArticles();
  const slug =
    articleData.slug ||
    articleData.titleEn
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const id = articleData.id || slug;
  const youtubeId = extractYouTubeId(articleData.youtubeUrl);

  const existingIndex = articles.findIndex((a) => a.id === id || a.slug === slug);
  const now = new Date().toISOString();

  const articleToSave: BlogArticle = {
    id,
    slug,
    titleEn: articleData.titleEn,
    titleNe: articleData.titleNe || articleData.titleEn,
    summaryEn: articleData.summaryEn || "",
    summaryNe: articleData.summaryNe || articleData.summaryEn || "",
    contentEn: articleData.contentEn || "",
    contentNe: articleData.contentNe || articleData.contentEn || "",
    category: articleData.category || "guides",
    tags: Array.isArray(articleData.tags) ? articleData.tags : [],
    thumbnailUrl:
      articleData.thumbnailUrl ||
      (youtubeId
        ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
        : ""),
    youtubeUrl: articleData.youtubeUrl || "",
    youtubeVideoId: youtubeId,
    videoDuration: articleData.videoDuration || "Video Guide",
    author: articleData.author || {
      name: "E-Form Nepal Editorial Desk",
      role: "Digital Services & Form Verification Team",
    },
    publishedAt: existingIndex >= 0 ? articles[existingIndex].publishedAt : now,
    updatedAt: now,
    readingTimeMinutes:
      articleData.readingTimeMinutes ||
      Math.max(3, Math.round(((articleData.contentEn || "").length) / 800)),
    officialSources: articleData.officialSources || [],
    stepByStepInstructions: articleData.stepByStepInstructions || [],
    requiredDocuments: articleData.requiredDocuments || [],
    commonMistakes: articleData.commonMistakes || [],
    faqs: articleData.faqs || [],
    ctaServiceId: articleData.ctaServiceId,
    ctaTitleEn: articleData.ctaTitleEn,
    ctaTitleNe: articleData.ctaTitleNe,
    ctaDescriptionEn: articleData.ctaDescriptionEn,
    ctaDescriptionNe: articleData.ctaDescriptionNe,
    featured: Boolean(articleData.featured),
  };

  if (existingIndex >= 0) {
    articles[existingIndex] = articleToSave;
  } else {
    articles.unshift(articleToSave);
  }

  try {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(articles, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing articles to file:", err);
  }

  return articleToSave;
}

export function deleteArticle(idOrSlug: string): boolean {
  const articles = getArticles();
  const filtered = articles.filter((a) => a.id !== idOrSlug && a.slug !== idOrSlug);
  if (filtered.length !== articles.length) {
    try {
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(filtered, null, 2), "utf-8");
      return true;
    } catch (err) {
      console.error("Error deleting article:", err);
    }
  }
  return false;
}
