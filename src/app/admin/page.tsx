"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogArticle, BLOG_CATEGORIES, extractYouTubeId } from "@/data/blog";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import {
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Video,
  FileText,
  Save,
  X,
  Lock,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Eye,
  AlertCircle,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingArticle, setEditingArticle] = useState<Partial<BlogArticle> | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<string>("");

  // Default admin passcode
  const ADMIN_PASSCODE = "eform2026";

  useEffect(() => {
    // Check if previously authenticated in this session
    const savedAuth = sessionStorage.getItem("eform_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchArticles();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("eform_admin_auth", "true");
      setAuthError("");
      fetchArticles();
    } else {
      setAuthError("Invalid passcode. Please enter the correct admin passcode.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("eform_admin_auth");
  };

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/articles");
      const data = await res.json();
      if (data.success && data.articles) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.error("Failed to load articles:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingArticle({
      id: "",
      slug: "",
      titleEn: "",
      titleNe: "",
      summaryEn: "",
      summaryNe: "",
      contentEn: "",
      contentNe: "",
      category: "guides",
      tags: ["Nepal Online Form"],
      thumbnailUrl: "",
      youtubeUrl: "",
      videoDuration: "10:00",
      officialSources: [
        { title: "Official Portal", url: "https://nepal.gov.np", authority: "Nepal Government" },
      ],
      stepByStepInstructions: [
        {
          stepNumber: 1,
          titleEn: "Prepare Required Documents",
          titleNe: "आवश्यक कागजात तयार गर्नुहोस्",
          descriptionEn: "Gather your citizenship and scans under 300 KB.",
          descriptionNe: "३०० केबी भन्दा कम साइजमा कागजात स्क्यान गर्नुहोस्।",
        },
      ],
      ctaServiceId: "e-passport-pre-enrollment",
      ctaTitleEn: "Need Assistance With Your Application?",
      ctaTitleNe: "अनलाइन फाराम भर्न हाम्रो सहायता चाहिन्छ?",
      featured: false,
    });
    setModalOpen(true);
    setSaveSuccess("");
  };

  const handleOpenEdit = (article: BlogArticle) => {
    setEditingArticle({ ...article });
    setModalOpen(true);
    setSaveSuccess("");
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/articles?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setArticles((prev) => prev.filter((a) => a.id !== id));
      } else {
        alert(data.error || "Failed to delete article");
      }
    } catch (err) {
      alert("Error deleting article");
    }
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle || !editingArticle.titleEn) {
      alert("Please provide at least an English title.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingArticle),
      });

      const data = await res.json();
      if (data.success && data.article) {
        setSaveSuccess("Article & video tutorial saved successfully!");
        fetchArticles();
        setTimeout(() => {
          setModalOpen(false);
          setSaveSuccess("");
        }, 1200);
      } else {
        alert(data.error || "Failed to save article");
      }
    } catch (err) {
      alert("Network error saving article");
    } finally {
      setSaving(false);
    }
  };

  // If not authenticated, show passcode login screen
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F8FAFC",
          padding: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            padding: "40px 32px",
            maxWidth: "420px",
            width: "100%",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            border: "1px solid #E2E8F0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#EFF6FF",
              color: "#1E73EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
            }}
          >
            <Lock size={26} />
          </div>

          <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
            E-Form Nepal Admin
          </h1>
          <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "24px" }}>
            Enter your admin passcode to manage blog articles and YouTube video tutorials.
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin passcode (e.g. eform2026)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid #CBD5E1",
                fontSize: "1rem",
                outline: "none",
                marginBottom: "14px",
              }}
              autoFocus
            />

            {authError && (
              <div
                style={{
                  color: "#DC2626",
                  fontSize: "0.85rem",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <AlertCircle size={15} />
                <span>{authError}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Unlock Dashboard
            </button>
          </form>

          <div style={{ marginTop: "20px", fontSize: "0.82rem", color: "#94A3B8" }}>
            Default Passcode: <code>eform2026</code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", padding: "40px 0 100px" }}>
      <div className="container">
        {/* Admin Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
            borderBottom: "1px solid #E2E8F0",
            paddingBottom: "24px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  backgroundColor: "#DC2626",
                  color: "#FFFFFF",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "6px",
                  letterSpacing: "0.5px",
                }}
              >
                ADMIN DESK
              </span>
              <span style={{ color: "#64748B", fontSize: "0.85rem" }}>Content & YouTube Video Management</span>
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 900, color: "#0F172A" }}>
              Guides & Video Articles Dashboard
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/blog" target="_blank" className="btn btn-secondary btn-sm" style={{ gap: "6px" }}>
              <Eye size={15} />
              <span>View Public Blog</span>
            </Link>

            <button onClick={handleOpenCreate} className="btn btn-primary btn-sm" style={{ gap: "6px" }}>
              <Plus size={16} />
              <span>Add New Article & Video</span>
            </button>

            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "1px solid #CBD5E1",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "0.82rem",
                color: "#64748B",
                cursor: "pointer",
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div style={{ backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>Total Articles</span>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#0B3D91", marginTop: "4px" }}>
              {articles.length}
            </div>
          </div>

          <div style={{ backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>YouTube Video Tutorials</span>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#DC2626", marginTop: "4px" }}>
              {articles.filter((a) => a.youtubeUrl).length}
            </div>
          </div>

          <div style={{ backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>Active Categories</span>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#059669", marginTop: "4px" }}>
              {Object.keys(BLOG_CATEGORIES).length}
            </div>
          </div>
        </div>

        {/* Articles Table */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            style={{
              padding: "18px 24px",
              borderBottom: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
              All Articles ({articles.length})
            </h2>
            <button
              onClick={fetchArticles}
              disabled={loading}
              style={{
                background: "transparent",
                border: "none",
                color: "#1E73EB",
                fontSize: "0.85rem",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <RefreshCw size={14} className={loading ? "spin-animate" : ""} />
              <span>Refresh</span>
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0", color: "#64748B", fontSize: "0.8rem", textTransform: "uppercase" }}>
                  <th style={{ padding: "14px 20px" }}>Article</th>
                  <th style={{ padding: "14px 16px" }}>Category</th>
                  <th style={{ padding: "14px 16px" }}>YouTube Video</th>
                  <th style={{ padding: "14px 16px" }}>Updated</th>
                  <th style={{ padding: "14px 20px", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => {
                  const cat = BLOG_CATEGORIES[article.category] || BLOG_CATEGORIES.general;
                  const ytId = extractYouTubeId(article.youtubeUrl);

                  return (
                    <tr key={article.id} style={{ borderBottom: "1px solid #F1F5F9" }}>
                      <td style={{ padding: "16px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <img
                            src={article.thumbnailUrl}
                            alt=""
                            style={{
                              width: "60px",
                              height: "36px",
                              borderRadius: "6px",
                              objectFit: "cover",
                              backgroundColor: "#E2E8F0",
                            }}
                          />
                          <div>
                            <div style={{ fontWeight: 700, color: "#0F172A" }}>{article.titleEn}</div>
                            <div style={{ fontSize: "0.8rem", color: "#64748B" }}>/{article.slug}</div>
                          </div>
                        </div>
                      </td>

                      <td style={{ padding: "16px 16px" }}>
                        <span
                          style={{
                            padding: "3px 10px",
                            borderRadius: "9999px",
                            fontSize: "0.76rem",
                            fontWeight: 700,
                            backgroundColor: "#EFF6FF",
                            color: cat.color,
                            border: `1px solid ${cat.color}33`,
                          }}
                        >
                          {cat.labelEn}
                        </span>
                      </td>

                      <td style={{ padding: "16px 16px" }}>
                        {ytId ? (
                          <a
                            href={`https://www.youtube.com/watch?v=${ytId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              color: "#DC2626",
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              textDecoration: "none",
                            }}
                          >
                            <Video size={14} />
                            <span>Embedded ({article.videoDuration || "Video"})</span>
                          </a>
                        ) : (
                          <span style={{ color: "#94A3B8", fontSize: "0.82rem" }}>Written Only</span>
                        )}
                      </td>

                      <td style={{ padding: "16px 16px", color: "#64748B", fontSize: "0.82rem" }}>
                        {new Date(article.updatedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>

                      <td style={{ padding: "16px 20px", textAlign: "right" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          <Link
                            href={`/blog/${article.slug}`}
                            target="_blank"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              border: "1px solid #E2E8F0",
                              color: "#334155",
                              textDecoration: "none",
                              fontSize: "0.8rem",
                            }}
                            title="View Live"
                          >
                            <ExternalLink size={14} />
                          </Link>

                          <button
                            onClick={() => handleOpenEdit(article)}
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              backgroundColor: "#EFF6FF",
                              border: "1px solid #BFDBFE",
                              color: "#1E73EB",
                              cursor: "pointer",
                              fontSize: "0.8rem",
                              fontWeight: 600,
                            }}
                            title="Edit Article"
                          >
                            <Edit size={14} />
                          </button>

                          <button
                            onClick={() => handleDelete(article.id, article.titleEn)}
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              backgroundColor: "#FEF2F2",
                              border: "1px solid #FECACA",
                              color: "#DC2626",
                              cursor: "pointer",
                              fontSize: "0.8rem",
                            }}
                            title="Delete Article"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Create / Edit Article */}
        {modalOpen && editingArticle && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                maxWidth: "840px",
                width: "100%",
                maxHeight: "92vh",
                overflowY: "auto",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                padding: "32px",
                position: "relative",
              }}
            >
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748B",
                }}
              >
                <X size={24} />
              </button>

              <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0F172A", marginBottom: "6px" }}>
                {editingArticle.id ? "Edit Guide & Video Article" : "Create New Guide & Video Article"}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "24px" }}>
                Publish original helpful instructions, attach official YouTube video tutorials, and link to verification desks.
              </p>

              {saveSuccess && (
                <div
                  style={{
                    backgroundColor: "#DCFCE7",
                    border: "1px solid #86EFAC",
                    color: "#166534",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <CheckCircle2 size={18} />
                  <span>{saveSuccess}</span>
                </div>
              )}

              <form onSubmit={handleSaveArticle} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Title in English */}
                <div>
                  <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                    Article Title (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingArticle.titleEn || ""}
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)+/g, "");
                      setEditingArticle({
                        ...editingArticle,
                        titleEn: title,
                        slug: editingArticle.slug || slug,
                      });
                    }}
                    placeholder="e.g. How to Fill Out an Online Application Form in Nepal: Step-by-Step Guide"
                    className="form-control"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                  />
                </div>

                {/* Title in Nepali */}
                <div>
                  <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                    Article Title (Nepali)
                  </label>
                  <input
                    type="text"
                    value={editingArticle.titleNe || ""}
                    onChange={(e) => setEditingArticle({ ...editingArticle, titleNe: e.target.value })}
                    placeholder="e.g. नेपालमा सरकारी अनलाइन फाराम भर्ने सम्पूर्ण तरिका"
                    className="form-control"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                  />
                </div>

                {/* URL Slug & Category */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={editingArticle.slug || ""}
                      onChange={(e) => setEditingArticle({ ...editingArticle, slug: e.target.value })}
                      placeholder="how-to-fill-out-an-online-form-in-nepal"
                      className="form-control"
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                      Category *
                    </label>
                    <select
                      value={editingArticle.category || "guides"}
                      onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value as any })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", backgroundColor: "#FFF" }}
                    >
                      {Object.entries(BLOG_CATEGORIES).map(([key, cat]) => (
                        <option key={key} value={key}>
                          {cat.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* YouTube Video URL and Duration */}
                <div
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "1px solid #FECACA",
                    borderRadius: "12px",
                    padding: "18px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#B91C1C", fontWeight: 700, fontSize: "0.95rem" }}>
                    <Video size={18} />
                    <span>YouTube Video Tutorial (Optional)</span>
                  </div>
                  <p style={{ color: "#991B1B", fontSize: "0.82rem", marginBottom: "14px" }}>
                    Have a video tutorial? Paste the YouTube link here. <strong>If not, leave blank</strong> — your article will publish cleanly as a written guide with no empty video box.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
                    <input
                      type="text"
                      value={editingArticle.youtubeUrl || ""}
                      onChange={(e) => {
                        const url = e.target.value;
                        const videoId = extractYouTubeId(url);
                        setEditingArticle({
                          ...editingArticle,
                          youtubeUrl: url,
                          youtubeVideoId: videoId,
                          thumbnailUrl:
                            editingArticle.thumbnailUrl ||
                            (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ""),
                        });
                      }}
                      placeholder="https://www.youtube.com/watch?v=..."
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                    />

                    <input
                      type="text"
                      value={editingArticle.videoDuration || ""}
                      onChange={(e) => setEditingArticle({ ...editingArticle, videoDuration: e.target.value })}
                      placeholder="Duration (e.g. 10:45)"
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                    />
                  </div>

                  {editingArticle.youtubeUrl && extractYouTubeId(editingArticle.youtubeUrl) && (
                    <div style={{ marginTop: "14px" }}>
                      <YouTubeEmbed urlOrId={editingArticle.youtubeUrl} title="Live Preview" />
                    </div>
                  )}
                </div>

                {/* Thumbnail URL */}
                <div>
                  <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                    Cover Image / Notice Image URL (Optional)
                  </label>
                  <span style={{ fontSize: "0.8rem", color: "#64748B", display: "block", marginBottom: "6px" }}>
                    Paste an image URL (e.g. JLPT exam notice, EPS Korea poster, portal screenshot). If left blank, a branded cover will be generated automatically.
                  </span>
                  <input
                    type="text"
                    value={editingArticle.thumbnailUrl || ""}
                    onChange={(e) => setEditingArticle({ ...editingArticle, thumbnailUrl: e.target.value })}
                    placeholder="https://... (or leave blank)"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                  />
                </div>

                {/* English Summary */}
                <div>
                  <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                    Summary / Lead Paragraph (English)
                  </label>
                  <textarea
                    rows={2}
                    value={editingArticle.summaryEn || ""}
                    onChange={(e) => setEditingArticle({ ...editingArticle, summaryEn: e.target.value })}
                    placeholder="Short informative summary for search engines and card preview..."
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "0.9rem" }}
                  />
                </div>

                {/* Full Written Instructions & Content */}
                <div>
                  <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                    Written Content & In-Depth Guide (English)
                  </label>
                  <textarea
                    rows={6}
                    value={editingArticle.contentEn || ""}
                    onChange={(e) => setEditingArticle({ ...editingArticle, contentEn: e.target.value })}
                    placeholder="Detailed written explanations, requirements, eligibility rules, and instructions..."
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "0.9rem", fontFamily: "inherit" }}
                  />
                </div>

                {/* Tags (comma separated) */}
                <div>
                  <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={(editingArticle.tags || []).join(", ")}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      })
                    }
                    placeholder="Online Form Guide, e-Passport, EDV, Photo Specs"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                  />
                </div>

                {/* Assistance CTA Link */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label className="form-label" style={{ fontWeight: 700, fontSize: "0.88rem", display: "block", marginBottom: "6px" }}>
                      Link Assistance CTA to Service ID
                    </label>
                    <input
                      type="text"
                      value={editingArticle.ctaServiceId || ""}
                      onChange={(e) => setEditingArticle({ ...editingArticle, ctaServiceId: e.target.value })}
                      placeholder="e.g. e-passport-pre-enrollment"
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1" }}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", paddingTop: "26px" }}>
                    <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", fontWeight: 700, fontSize: "0.9rem" }}>
                      <input
                        type="checkbox"
                        checked={Boolean(editingArticle.featured)}
                        onChange={(e) => setEditingArticle({ ...editingArticle, featured: e.target.checked })}
                        style={{ width: "18px", height: "18px", accentColor: "#1E73EB" }}
                      />
                      <span>Mark as Featured Article</span>
                    </label>
                  </div>
                </div>

                {/* Save Buttons */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", borderTop: "1px solid #E2E8F0", paddingTop: "20px" }}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="btn btn-primary"
                    style={{ gap: "6px" }}
                  >
                    <Save size={16} />
                    <span>{saving ? "Saving Guide..." : "Publish / Save Article"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
