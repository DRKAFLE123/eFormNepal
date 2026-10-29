"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BlogArticle, BLOG_CATEGORIES } from "@/data/blog";
import { useLanguage } from "@/context/LanguageContext";
import { VERIFIED_CONTACT } from "@/data/services";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MarkdownContent from "@/components/MarkdownContent";
import {
  Calendar,
  Clock,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ChevronRight,
  ShieldCheck,
  Share2,
  HelpCircle,
  Sparkles,
  ArrowLeft,
  Camera,
  Image as ImageIcon,
  XCircle,
} from "lucide-react";

interface ArticleDetailClientProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
  onOpenAssistance?: (serviceId?: string) => void;
}

export default function ArticleDetailClient({
  article,
  relatedArticles,
  onOpenAssistance,
}: ArticleDetailClientProps) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const categoryMeta = BLOG_CATEGORIES[article.category] || BLOG_CATEGORIES.general;

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", paddingBottom: "100px" }}>
      {/* Top Breadcrumb Navigation */}
      <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "12px 0" }}>
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.84rem",
              color: "#64748B",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>
              {t("Home", "गृहपृष्ठ")}
            </Link>
            <ChevronRight size={13} />
            <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>
              {t("Guides & Videos", "गाइड तथा भिडियोहरू")}
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: "#0F172A", fontWeight: 600 }}>
              {t(article.titleEn, article.titleNe).slice(0, 48)}...
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header Container */}
      <header
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)",
          padding: "48px 0 36px",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div className="container" style={{ maxWidth: "880px" }}>
          {/* Category & Verified Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
            <span
              style={{
                backgroundColor: "#EFF6FF",
                color: "#1E73EB",
                border: "1px solid #BFDBFE",
                padding: "4px 12px",
                borderRadius: "9999px",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.6px",
              }}
            >
              {t(categoryMeta.labelEn, categoryMeta.labelNe)}
            </span>

            <span
              style={{
                backgroundColor: "#ECFDF5",
                color: "#059669",
                border: "1px solid #A7F3D0",
                padding: "4px 12px",
                borderRadius: "9999px",
                fontSize: "0.8rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <ShieldCheck size={14} />
              <span>{t("Verified Information", "प्रमाणित जानकारी")}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
              fontWeight: 900,
              color: "#0F172A",
              lineHeight: 1.3,
              marginBottom: "18px",
            }}
          >
            {t(article.titleEn, article.titleNe)}
          </h1>

          {/* Summary Lead */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "#475569",
              lineHeight: 1.65,
              marginBottom: "24px",
            }}
          >
            {t(article.summaryEn, article.summaryNe)}
          </p>

          {/* Author, Date & Reading Time */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              borderTop: "1px solid #E2E8F0",
              paddingTop: "18px",
              fontSize: "0.86rem",
              color: "#64748B",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#0B3D91",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1rem",
                }}
              >
                E
              </div>
              <div>
                <strong style={{ color: "#0F172A", display: "block" }}>{article.author.name}</strong>
                <span>{article.author.role}</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <Calendar size={14} />
                <span>
                  {t("Updated", "अद्यावधिक")}:{" "}
                  {new Date(article.updatedAt).toLocaleDateString(lang === "ne" ? "ne-NP" : "en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </span>

              <span>•</span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <Clock size={14} />
                <span>{article.readingTimeMinutes} {t("min read", "मिनेट")}</span>
              </span>

              <button
                onClick={handleShare}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "transparent",
                  border: "1px solid #CBD5E1",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  cursor: "pointer",
                  color: "#475569",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
                title="Copy Guide Link"
              >
                <Share2 size={13} />
                <span>{copied ? t("Copied!", "कपि भयो!") : t("Share", "सेयर")}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Body */}
      <main className="container" style={{ maxWidth: "880px", marginTop: "36px" }}>
        {/* YouTube Video Section */}
        {article.youtubeUrl && (
          <section id="video-tutorial" style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0F172A", display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                <span style={{ color: "#DC2626" }}>▶</span>
                <span>{t("Watch the Full Video Tutorial", "भिडियो ट्युटोरियल हेर्नुहोस्")}</span>
              </h2>
              <a
                href={VERIFIED_CONTACT.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  color: "#DC2626",
                  fontWeight: 700,
                  textDecoration: "none",
                  backgroundColor: "#FEF2F2",
                  border: "1px solid #FECACA",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                <span>{t("Subscribe @eFormNepal", "च्यानल सस्क्राइव @eFormNepal")}</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <p style={{ color: "#64748B", fontSize: "0.92rem", marginBottom: "16px" }}>
              {t(
                "Follow along step-by-step with our official E-Form Nepal tutorial, or read the complete written instructions below.",
                "हाम्रो आधिकारिक भिडियो हेरेर सिक्नुहोस्, वा तल दिइएको विस्तृत चरणबद्ध गाइड पढ्नुहोस्।"
              )}
            </p>

            <YouTubeEmbed
              urlOrId={article.youtubeUrl}
              title={article.titleEn}
              thumbnailUrl={article.thumbnailUrl}
            />
          </section>
        )}

        {/* Written Overview / Introduction */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #E2E8F0",
            marginBottom: "32px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
            {t("Overview & Essential Instructions", "सामान्य परिचय तथा ध्यान दिनुपर्ने कुराहरू")}
          </h2>
          <div style={{ fontSize: "1.02rem", color: "#334155", lineHeight: 1.7 }}>
            <MarkdownContent content={t(article.contentEn, article.contentNe)} />
          </div>
        </section>

        {/* Digital Photo Requirements & Visual Guide */}
        {article.photoGuide && (
          <section
            id="photo-requirements"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "32px",
              border: "2px solid #059669",
              marginBottom: "36px",
              boxShadow: "0 4px 20px rgba(5, 150, 105, 0.08)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#ECFDF5",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Camera size={24} />
                </div>
                <div>
                  <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#065F46", margin: 0 }}>
                    {t(article.photoGuide.titleEn, article.photoGuide.titleNe)}
                  </h2>
                  <p style={{ color: "#047857", fontSize: "0.88rem", margin: "2px 0 0 0" }}>
                    {t(
                      "Automated facial validation will reject non-compliant photos before the lottery draw.",
                      "मापदण्ड नपुगेका फोटोहरू लटरी प्रणालीले फाराम छानिनु अगावै स्वतः रद्द गर्दछ।"
                    )}
                  </p>
                </div>
              </div>

              <span
                style={{
                  backgroundColor: "#FEF2F2",
                  color: "#DC2626",
                  border: "1px solid #FECACA",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {t("Strict AI Check", "कडा स्वचालित जाँच")}
              </span>
            </div>

            <p style={{ color: "#334155", fontSize: "0.98rem", lineHeight: 1.6, marginBottom: "24px" }}>
              {t(article.photoGuide.descriptionEn, article.photoGuide.descriptionNe)}
            </p>

            {/* Visual Samples Grid (Template & Acceptance comparison) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                gap: "20px",
                marginBottom: "28px",
              }}
            >
              {/* Template Card */}
              {article.photoGuide.templateImageUrl && (
                <div
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderRadius: "14px",
                    border: "1px solid #CBD5E1",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 16px",
                      backgroundColor: "#0F172A",
                      color: "#FFFFFF",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ImageIcon size={16} color="#38BDF8" />
                    <span>{t("Official Proportion Template (50-69% Head Ratio)", "आधिकारिक फोटो अनुपात टेम्प्लेट")}</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      padding: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "260px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.photoGuide.templateImageUrl}
                      alt="EDV Photo Template Specifications"
                      style={{ maxWidth: "100%", maxHeight: "280px", objectFit: "contain", borderRadius: "8px" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "12px 16px",
                      fontSize: "0.82rem",
                      color: "#475569",
                      backgroundColor: "#F8FAFC",
                      borderTop: "1px solid #E2E8F0",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(
                      "Eye level must be 56% - 69% from bottom; head height must span 50% - 69% of the frame.",
                      "आँखाको उचाइ तल्लो भागबाट ५६%-६९% र टाउकोको भाग कुल उचाइको ५०%-६९% हुनुपर्दछ।"
                    )}
                  </div>
                </div>
              )}

              {/* Samples Comparison Card */}
              {article.photoGuide.samplesImageUrl && (
                <div
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderRadius: "14px",
                    border: "1px solid #CBD5E1",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 16px",
                      backgroundColor: "#0F172A",
                      color: "#FFFFFF",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CheckCircle2 size={16} color="#4ADE80" />
                    <span>{t("Acceptable vs Unacceptable Samples", "स्वीकृत र अस्वीकृत नमुनाहरू")}</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      padding: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "260px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.photoGuide.samplesImageUrl}
                      alt="EDV Photo Acceptable vs Shadows"
                      style={{ maxWidth: "100%", maxHeight: "280px", objectFit: "contain", borderRadius: "8px" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "12px 16px",
                      fontSize: "0.82rem",
                      color: "#475569",
                      backgroundColor: "#F8FAFC",
                      borderTop: "1px solid #E2E8F0",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(
                      "Even lighting without background shadows or face glares. No glasses, natural skin tone.",
                      "छायाँ नभएको, सादा सेतो पृष्ठभूमि, चस्मा नभएको र अनुहार प्रष्ट देखिने फोटो मात्र मान्य।"
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Technical Specifications Table */}
            {article.photoGuide.specs && article.photoGuide.specs.length > 0 && (
              <div style={{ marginBottom: "28px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A", marginBottom: "12px" }}>
                  {t("Exact Technical Specifications", "आवश्यक प्राविधिक मापदण्डहरू")}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {article.photoGuide.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        backgroundColor: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "10px",
                        padding: "10px 14px",
                      }}
                    >
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>
                        {t(spec.labelEn, spec.labelNe)}
                      </div>
                      <div style={{ fontSize: "0.94rem", fontWeight: 700, color: "#0F172A", marginTop: "2px" }}>
                        {t(spec.valueEn, spec.valueNe)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dos and Don'ts */}
            {(article.photoGuide.dos || article.photoGuide.donts) && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* Do's */}
                {article.photoGuide.dos && (
                  <div
                    style={{
                      backgroundColor: "#F0FDF4",
                      border: "1px solid #BBF7D0",
                      borderRadius: "12px",
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#15803D",
                        fontSize: "0.95rem",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <CheckCircle2 size={18} color="#16A34A" />
                      <span>{t("DO'S (गर्नेपर्ने कुराहरू)", "गर्नुपर्ने कुराहरू (DO'S)")}</span>
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "18px",
                        color: "#166534",
                        fontSize: "0.88rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {article.photoGuide.dos.map((item, dIdx) => (
                        <li key={dIdx}>{t(item.textEn, item.textNe)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Don'ts */}
                {article.photoGuide.donts && (
                  <div
                    style={{
                      backgroundColor: "#FEF2F2",
                      border: "1px solid #FECACA",
                      borderRadius: "12px",
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#991B1B",
                        fontSize: "0.95rem",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <XCircle size={18} color="#DC2626" />
                      <span>{t("DON'TS (गर्न नहुने कुराहरू)", "गर्न नहुने कुराहरू (DON'TS)")}</span>
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "18px",
                        color: "#7F1D1D",
                        fontSize: "0.88rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {article.photoGuide.donts.map((item, dIdx) => (
                        <li key={dIdx}>{t(item.textEn, item.textNe)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Official US State Department Photo Tool Action */}
            <div
              style={{
                backgroundColor: "#F1F5F9",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <div>
                <strong style={{ color: "#0F172A", fontSize: "0.92rem", display: "block" }}>
                  {t("Official US State Department Photo Cropping Tool", "अमेरिकी सरकारको आधिकारिक फोटो क्रपिङ टुल")}
                </strong>
                <span style={{ fontSize: "0.82rem", color: "#64748B" }}>
                  {t(
                    "You can test and crop your image using the free tool provided by the US Department of State.",
                    "अमेरिकी विदेश मन्त्रालयको निःशुल्क टुलमार्फत आफ्नो फोटो क्रप तथा जाँच गर्न सक्नुहुन्छ।"
                  )}
                </span>
              </div>

              <a
                href="https://tsg.phototool.state.gov/photo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#059669",
                  color: "#FFFFFF",
                  padding: "9px 18px",
                  borderRadius: "8px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <span>{t("Open Official Photo Tool", "आधिकारिक फोटो टुल खोल्नुहोस्")}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </section>
        )}

        {/* Step-by-Step Instructions */}
        {article.stepByStepInstructions && article.stepByStepInstructions.length > 0 && (
          <section id="step-by-step" style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
              {t("Step-by-Step Application Walkthrough", "चरणबद्ध फाराम भर्ने तरिका")}
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.92rem", marginBottom: "24px" }}>
              {t(
                "Follow these steps sequentially to prevent timeout errors and submission rejections.",
                "फाराम भर्दा कुनै समस्या नआओस् भन्नका लागि यी चरणहरू क्रमैसँग पछ्याउनुहोस्।"
              )}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {article.stepByStepInstructions.map((step) => (
                <div
                  key={step.stepNumber}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "24px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
                    display: "flex",
                    gap: "18px",
                  }}
                >
                  {/* Step Number Circle */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#EFF6FF",
                      color: "#1E73EB",
                      border: "2px solid #3B82F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Step Content */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
                      {t(step.titleEn, step.titleNe)}
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "12px" }}>
                      {t(step.descriptionEn, step.descriptionNe)}
                    </p>

                    {/* Pro Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div
                        style={{
                          backgroundColor: "#F0FDF4",
                          border: "1px solid #BBF7D0",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          marginTop: "10px",
                        }}
                      >
                        <strong style={{ color: "#15803D", fontSize: "0.82rem", display: "block", marginBottom: "4px" }}>
                          PRO TIP:
                        </strong>
                        <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.88rem", color: "#166534" }}>
                          {step.tips.map((tip, idx) => (
                            <li key={idx} style={{ marginBottom: "2px" }}>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Warning Box */}
                    {step.warning && (
                      <div
                        style={{
                          backgroundColor: "#FEF2F2",
                          border: "1px solid #FECACA",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          marginTop: "10px",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          color: "#991B1B",
                          fontSize: "0.88rem",
                        }}
                      >
                        <AlertTriangle size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{step.warning}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Required Documents Checklist */}
        {article.requiredDocuments && article.requiredDocuments.length > 0 && (
          <section
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "28px 32px",
              border: "1px solid #E2E8F0",
              marginBottom: "36px",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <FileText size={20} color="#1E73EB" />
              <span>{t("Mandatory Documents Checklist", "आवश्यक कागजातहरूको चेकलिस्ट")}</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "12px" }}>
              {article.requiredDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#1E293B" }}>
                      {t(doc.nameEn, doc.nameNe)}
                    </div>
                    {doc.note && <div style={{ fontSize: "0.82rem", color: "#64748B", marginTop: "2px" }}>{doc.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Common Mistakes & Pitfalls */}
        {article.commonMistakes && article.commonMistakes.length > 0 && (
          <section
            style={{
              backgroundColor: "#FFFBEB",
              borderRadius: "16px",
              padding: "28px 32px",
              border: "1px solid #FDE68A",
              marginBottom: "36px",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#92400E", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <AlertTriangle size={20} color="#D97706" />
              <span>{t("Common Mistakes to Avoid", "फाराम भर्दा हुने सामान्य गल्तीहरू र समाधान")}</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {article.commonMistakes.map((item, idx) => (
                <div key={idx} style={{ borderBottom: idx < article.commonMistakes!.length - 1 ? "1px solid #FCD34D" : "none", paddingBottom: "12px" }}>
                  <div style={{ fontWeight: 700, color: "#B45309", fontSize: "0.95rem", marginBottom: "4px" }}>
                    ✕ {t(item.mistakeEn, item.mistakeNe)}
                  </div>
                  <div style={{ color: "#78350F", fontSize: "0.9rem", lineHeight: 1.5, paddingLeft: "16px" }}>
                    ✓ <strong>{t("Solution", "समाधान")}:</strong> {t(item.solutionEn, item.solutionNe)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Official Source Links */}
        {article.officialSources && article.officialSources.length > 0 && (
          <section
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px 28px",
              border: "1px solid #E2E8F0",
              marginBottom: "36px",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
              {t("Official Government Sources & Verification Links", "आधिकारिक सरकारी स्रोत तथा लिङ्कहरू")}
            </h3>
            <p style={{ color: "#64748B", fontSize: "0.86rem", marginBottom: "16px" }}>
              {t(
                "Always verify that you are on the legitimate government portal (.gov.np) before entering personal information.",
                "आफ्नो विवरण हाल्नु अगाडि सधैं आधिकारिक सरकारी (.gov.np) वेबसाइट हो कि होइन यकिन गर्नुहोस्।"
              )}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {article.officialSources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px",
                    color: "#0F172A",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                  className="official-source-link"
                >
                  <div>
                    <span style={{ fontWeight: 700, color: "#1E73EB", display: "block" }}>{source.title}</span>
                    <span style={{ fontSize: "0.8rem", color: "#64748B" }}>{source.authority}</span>
                  </div>
                  <ExternalLink size={15} color="#64748B" />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Assistance CTA Card */}
        <section
          style={{
            backgroundColor: "#072864",
            color: "#FFFFFF",
            borderRadius: "20px",
            padding: "36px 32px",
            marginBottom: "48px",
            boxShadow: "0 10px 30px rgba(7, 40, 100, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#FBBF24",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              {t("Need 1-on-1 Assistance?", "व्यक्तिगत सहयोग चाहिन्छ?")}
            </span>

            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "8px", color: "#FFFFFF" }}>
              {t(
                article.ctaTitleEn || "Get Personalized Online Form Guidance",
                article.ctaTitleNe || "फाराम भर्न व्यक्तिगत सहायता लिनुहोस्"
              )}
            </h3>

            <p style={{ color: "#CBD5E1", fontSize: "0.92rem", lineHeight: 1.55 }}>
              {t(
                article.ctaDescriptionEn ||
                  "Connect with our verified WhatsApp desk. We inspect your documents, format photos, and provide technical guidance.",
                article.ctaDescriptionNe ||
                  "हाम्रो आधिकारिक ह्वाट्सएपमा सम्पर्क गर्नुहोस्। हामी तपाईंको फोटो मिलाउन तथा फाराम भर्न प्राविधिक सहायता दिन्छौं।"
              )}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href={VERIFIED_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "12px 20px", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp: 9865575108</span>
            </a>

            {article.ctaServiceId && (
              <Link
                href={`/services/${article.ctaServiceId}`}
                style={{
                  color: "#93C5FD",
                  fontSize: "0.82rem",
                  textAlign: "center",
                  textDecoration: "underline",
                  fontWeight: 600,
                }}
              >
                {t("View Service Requirements & Fees →", "सेवा सम्बन्धी शुल्क तथा विवरण हेर्नुहोस् →")}
              </Link>
            )}
          </div>
        </section>

        {/* FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <HelpCircle size={20} color="#1E73EB" />
              <span>{t("Frequently Asked Questions", "बारम्बार सोधिने प्रश्नहरू")}</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {article.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
                    Q: {t(faq.questionEn, faq.questionNe)}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                    {t(faq.answerEn, faq.answerNe)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles Carousel / Grid */}
        {relatedArticles.length > 0 && (
          <section style={{ borderTop: "1px solid #E2E8F0", paddingTop: "40px" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A", marginBottom: "20px" }}>
              {t("Related Guides & Video Tutorials", "सम्बन्धित अन्य गाइडहरू")}
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="related-guide-card"
                >
                  <div style={{ position: "relative", width: "100%", paddingTop: "52%" }}>
                    <img
                      src={rel.thumbnailUrl}
                      alt={rel.titleEn}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.4, marginBottom: "8px" }}>
                      {t(rel.titleEn, rel.titleNe)}
                    </h4>
                    <span style={{ fontSize: "0.8rem", color: "#1E73EB", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <span>{t("Read Tutorial", "हेर्नुहोस्")}</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Guides link */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#1E73EB",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} />
            <span>{t("Browse All Guides & Tutorials", "सबै गाइड तथा भिडियोहरू हेर्नुहोस्")}</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
