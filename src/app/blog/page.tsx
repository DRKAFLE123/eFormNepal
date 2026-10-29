import { Metadata } from "next";
import { getArticles } from "@/data/blogServer";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Guides & Video Tutorials | E-Form Nepal",
  description:
    "Step-by-step guides, official video tutorials, and verified instructions for Nepali government forms: EDV lottery, e-Passport pre-enrollment, DOTM license, Lok Sewa, and NID.",
  keywords: [
    "Online form guides Nepal",
    "e-Passport video tutorial Nepal",
    "EDV lottery step-by-step guide",
    "DOTM license form guide",
    "Nepal online application tutorials",
    "सरकारी अनलाइन फाराम भर्ने तरिका",
  ],
  openGraph: {
    title: "E-Form Nepal | Step-by-Step Guides & Video Tutorials",
    description:
      "Original walkthroughs, YouTube tutorials, and document checklists for online government forms in Nepal.",
    url: "https://eformnepal.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const articles = getArticles();

  return <BlogListClient initialArticles={articles} />;
}
