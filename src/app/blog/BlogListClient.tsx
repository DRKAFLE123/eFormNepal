"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogArticle, BLOG_CATEGORIES } from "@/data/blog";
import { useLanguage } from "@/context/LanguageContext";
import { VERIFIED_CONTACT } from "@/data/services";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import { Search, Play, Clock, Calendar, ArrowRight, Video, FileText, CheckCircle2 } from "lucide-react";

export default function BlogListClient({ initialArticles }: { initialArticles: BlogArticle[] }) {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [videoOnly, setVideoOnly] = useState<boolean>(false);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Category filter
      if (selectedCategory !== "all" && article.category !== selectedCategory) {
        return false;
      }

      // Video only filter
      if (videoOnly && !article.youtubeUrl) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle =
          article.titleEn.toLowerCase().includes(q) || article.titleNe.toLowerCase().includes(q);
        const matchesSummary =
          article.summaryEn.toLowerCase().includes(q) || article.summaryNe.toLowerCase().includes(q);
        const matchesTags = article.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSummary && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [initialArticles, selectedCategory, videoOnly, searchQuery]);

  const featuredArticle = initialArticles.find((a) => a.featured) || initialArticles[0];

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Hero Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #072864 0%, #0B3D91 60%, #1E73EB 100%)",
          color: "#FFFFFF",
          padding: "60px 0 50px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "rgba(255, 255, 255, 0.14)",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#93C5FD",
                marginBottom: "16px",
              }}
            >
              <Video size={15} color="#F87171" />
              <span>{t("Verified Video & Written Guides", "प्रमाणित भिडियो तथा लिखित निर्देशिकाहरू")}</span>
            </span>

            <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 900, marginBottom: "16px", lineHeight: 1.25, color: "#FFFFFF" }}>
              {t("Step-by-Step Guides & Official Video Tutorials", "सरकारी अनलाइन फाराम भर्ने भिडियो तथा विस्तृत गाइड")}
            </h1>

            <p style={{ fontSize: "1.08rem", color: "#E2E8F0", lineHeight: 1.6, marginBottom: "32px", maxWidth: "680px", margin: "0 auto 32px" }}>
              {t(
                "Learn how to prepare required documents, resize compliant photos, avoid server errors, and submit error-free government applications in Nepal.",
                "कागजात मिलाउने, फोटोको साइज मिलाउने र सरकारी पोर्टलमा बिना त्रुटि अनलाइन फाराम सबमिट गर्ने तरिकाहरू सिक्नुहोस्।"
              )}
            </p>

            {/* Search Input Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                padding: "6px 16px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <Search size={20} color="#64748B" style={{ flexShrink: 0, marginRight: "10px" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("Search guides, topics (e.g. e-Passport, EDV, Photo, OTP)...", "गाइड वा विषय खोज्नुहोस् (जस्तै राहदानी, डिभी, फोटो)...")}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontSize: "0.95rem",
                  color: "#0F172A",
                  backgroundColor: "transparent",
                  padding: "8px 0",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#94A3B8",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Official YouTube Channel Pill */}
            <div style={{ marginTop: "18px" }}>
              <a
                href={VERIFIED_CONTACT.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#FFFFFF",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <YouTubeIcon size={18} style={{ color: "#FF0000" }} />
                <span>{t("Official YouTube Channel: @eFormNepal", "आधिकारिक युट्युब च्यानल: @eFormNepal")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "16px 0", position: "sticky", top: "72px", zIndex: 30 }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {/* Category Pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                overflowX: "auto",
                paddingBottom: "4px",
                maxWidth: "100%",
              }}
            >
              <button
                onClick={() => setSelectedCategory("all")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: selectedCategory === "all" ? "1px solid #1E73EB" : "1px solid #E2E8F0",
                  backgroundColor: selectedCategory === "all" ? "#EFF6FF" : "#FFFFFF",
                  color: selectedCategory === "all" ? "#1E73EB" : "#475569",
                  whiteSpace: "nowrap",
                }}
              >
                {t("All Articles", "सबै लेखहरू")}
              </button>

              {Object.entries(BLOG_CATEGORIES).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: selectedCategory === key ? `1px solid ${cat.color}` : "1px solid #E2E8F0",
                    backgroundColor: selectedCategory === key ? "#F0FDF4" : "#FFFFFF",
                    color: selectedCategory === key ? cat.color : "#475569",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t(cat.labelEn, cat.labelNe)}
                </button>
              ))}
            </div>

            {/* Video-Only Toggle */}
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.86rem",
                fontWeight: 600,
                color: "#1E293B",
                cursor: "pointer",
                userSelect: "none",
                marginLeft: "auto",
              }}
            >
              <input
                type="checkbox"
                checked={videoOnly}
                onChange={(e) => setVideoOnly(e.target.checked)}
                style={{ accentColor: "#DC2626", width: "16px", height: "16px" }}
              />
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Play size={13} fill="#DC2626" color="#DC2626" />
                <span>{t("Video Tutorials Only", "भिडियो भएका मात्र")}</span>
              </span>
            </label>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ marginTop: "40px" }}>
        {/* Featured Video Guide Banner (if on 'all' without active search) */}
        {selectedCategory === "all" && !searchQuery && !videoOnly && featuredArticle && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
              border: "1px solid #E2E8F0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              marginBottom: "48px",
            }}
          >
            {/* Left Thumbnail with Play Button */}
            <div style={{ position: "relative", minHeight: "280px" }}>
              <img
                src={featuredArticle.thumbnailUrl}
                alt={featuredArticle.titleEn}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    backgroundColor: "#DC2626",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(220, 38, 38, 0.7)",
                    textDecoration: "none",
                  }}
                >
                  <Play size={30} fill="#FFFFFF" style={{ marginLeft: "4px" }} />
                </Link>
              </div>

              {featuredArticle.videoDuration && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#FFFFFF",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                  }}
                >
                  {featuredArticle.videoDuration}
                </span>
              )}

              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  letterSpacing: "0.5px",
                }}
              >
                ★ {t("Featured Guide", "प्रमुख गाइड")}
              </span>
            </div>

            {/* Right Details */}
            <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span
                    style={{
                      color: "#1E73EB",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    {t(
                      BLOG_CATEGORIES[featuredArticle.category]?.labelEn || "Guides",
                      BLOG_CATEGORIES[featuredArticle.category]?.labelNe || "गाइड"
                    )}
                  </span>
                  <span style={{ color: "#CBD5E1" }}>•</span>
                  <span style={{ color: "#64748B", fontSize: "0.82rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={13} />
                    <span>{featuredArticle.readingTimeMinutes} {t("min read", "मिनेट")}</span>
                  </span>
                </div>

                <h2 style={{ fontSize: "1.55rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.35, marginBottom: "12px" }}>
                  <Link href={`/blog/${featuredArticle.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {t(featuredArticle.titleEn, featuredArticle.titleNe)}
                  </Link>
                </h2>

                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  {t(featuredArticle.summaryEn, featuredArticle.summaryNe)}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", borderTop: "1px solid #F1F5F9", paddingTop: "16px" }}>
                <span style={{ fontSize: "0.82rem", color: "#64748B", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Verified by {featuredArticle.author.name}</span>
                </span>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="btn btn-primary btn-sm"
                  style={{ gap: "6px" }}
                >
                  <span>{t("Read Full Guide", "पूरा विवरण पढ्नुहोस्")}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Results Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A" }}>
            {t("All Published Guides & Tutorials", "सबै प्रकाशित गाइड तथा भिडियोहरू")}{" "}
            <span style={{ fontSize: "0.95rem", color: "#64748B", fontWeight: 500 }}>
              ({filteredArticles.length})
            </span>
          </h2>
        </div>

        {/* Article Cards Grid */}
        {filteredArticles.length === 0 ? (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "48px 24px",
              textAlign: "center",
              border: "1px solid #E2E8F0",
            }}
          >
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#334155", marginBottom: "8px" }}>
              {t("No articles found matching your filters.", "तपाईंले खोज्नुभएको विषयमा कुनै लेख भेटिएन।")}
            </p>
            <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "16px" }}>
              {t("Try clearing your search query or selecting a different category.", "खोज शब्द हटाउनुहोस् वा अर्को क्याटेगोरी छान्नुहोस्।")}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setVideoOnly(false);
              }}
              className="btn btn-secondary btn-sm"
            >
              {t("Reset All Filters", "सबै फिल्टरहरू हटाउनुहोस्")}
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {filteredArticles.map((article) => {
              const categoryMeta = BLOG_CATEGORIES[article.category] || BLOG_CATEGORIES.general;

              return (
                <article
                  key={article.id}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  className="blog-card"
                >
                  {/* Thumbnail */}
                  <Link
                    href={`/blog/${article.slug}`}
                    style={{ position: "relative", width: "100%", paddingTop: "56.25%", display: "block", overflow: "hidden", backgroundColor: "#072864" }}
                  >
                    {article.thumbnailUrl ? (
                      <img
                        src={article.thumbnailUrl}
                        alt={article.titleEn}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        className="blog-thumb-img"
                      />
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(135deg, #072864 0%, #0B3D91 60%, #1E73EB 100%)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "20px",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src="/mountains.svg"
                          alt="E-Form Nepal"
                          style={{ height: "42px", width: "auto", marginBottom: "8px", opacity: 0.9 }}
                        />
                        <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.3, maxWidth: "90%" }}>
                          {t(article.titleEn, article.titleNe).slice(0, 60)}...
                        </div>
                      </div>
                    )}

                    {/* Category pill */}
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        color: "#FFFFFF",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: "6px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {t(categoryMeta.labelEn, categoryMeta.labelNe)}
                    </span>

                    {/* YouTube badge if video is present */}
                    {article.youtubeUrl && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          backgroundColor: "#DC2626",
                          color: "#FFFFFF",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        }}
                      >
                        <Play size={10} fill="#FFF" />
                        <span>VIDEO</span>
                      </span>
                    )}
                  </Link>

                  {/* Card Content */}
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                    <div>
                      {/* Meta header */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#64748B", marginBottom: "8px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <Calendar size={13} />
                          <span>{new Date(article.publishedAt).toLocaleDateString(lang === "ne" ? "ne-NP" : "en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </span>
                        <span>•</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <Clock size={13} />
                          <span>{article.readingTimeMinutes} {t("min read", "मिनेट")}</span>
                        </span>
                      </div>

                      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.4, marginBottom: "8px" }}>
                        <Link href={`/blog/${article.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {t(article.titleEn, article.titleNe)}
                        </Link>
                      </h3>

                      <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.55, marginBottom: "16px" }}>
                        {t(article.summaryEn, article.summaryNe)}
                      </p>
                    </div>

                    <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.78rem", color: "#64748B" }}>
                        {article.tags.slice(0, 2).map((tag) => `#${tag}`).join(" ")}
                      </span>

                      <Link
                        href={`/blog/${article.slug}`}
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#1E73EB",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          textDecoration: "none",
                        }}
                      >
                        <span>{t("Read Guide", "पढ्नुहोस्")}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
