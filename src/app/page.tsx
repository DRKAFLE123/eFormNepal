"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SERVICES, CATEGORIES, VERIFIED_CONTACT } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "@/components/ServiceCard";
import PhotoSpecTool from "@/components/PhotoSpecTool";
import FaqSection from "@/components/FaqSection";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Sparkles,
  Phone,
  HelpCircle,
  GraduationCap,
  Briefcase,
  Landmark,
  FileCheck,
  UserCheck,
  ExternalLink,
  ChevronRight,
  Camera,
  Layers,
} from "lucide-react";

interface HomePageProps {
  onOpenAssistance?: (serviceId?: string) => void;
}

export default function HomePage({ onOpenAssistance }: HomePageProps) {
  const { lang, t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtered services
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      // Category filter
      if (activeCategory !== "all") {
        const catMap: Record<string, string> = {
          education: "Education & Admissions",
          jobs: "Jobs & Recruitment",
          government: "Government Services",
          examinations: "Examinations & Applications",
          registration: "Online Registration",
        };
        if (service.category !== catMap[activeCategory]) {
          return false;
        }
      }

      // Query filter with tokenized matching
      if (!searchQuery.trim()) return true;
      const cleanQ = searchQuery.toLowerCase().replace(/[\/\-_]/g, " ");
      const queryTokens = cleanQ.split(/\s+/).filter(Boolean);

      const targetEn = `${service.titleEn} ${service.shortDescEn} ${service.category} ${service.id} edv dv lottery passport license loksewa shram noc`.toLowerCase();
      const targetNe = `${service.titleNe} ${service.shortDescNe} ${service.categoryNe}`;

      return queryTokens.some(
        (token) => targetEn.includes(token) || targetNe.includes(token)
      );
    });
  }, [searchQuery, activeCategory]);

  const quickCategories = [
    {
      id: "registration",
      titleEn: "Online Registration & EDV",
      titleNe: "अनलाइन दर्ता तथा डिभी",
      descEn: "US Diversity Visa lottery entry and National ID (NID) pre-registration.",
      descNe: "अमेरिकी डिभी लटरी र राष्ट्रिय परिचयपत्र (NID) अनलाइन दर्ता।",
      icon: <Sparkles size={24} />,
    },
    {
      id: "jobs",
      titleEn: "Jobs & Recruitment",
      titleNe: "रोजगार तथा भर्ना",
      descEn: "Lok Sewa Aayog Master Profile, FEIMS Shram Swikriti labor approvals.",
      descNe: "लोक सेवा आयोग मास्टर आइडी र वैदेशिक रोजगार श्रम स्वीकृति।",
      icon: <Briefcase size={24} />,
    },
    {
      id: "government",
      titleEn: "Government Services",
      titleNe: "सरकारी सेवाहरू",
      descEn: "e-Passport appointments, DOTM driving license, IRD PAN cards.",
      descNe: "विद्युतीय राहदानी, यातायात लाइसेन्स र आन्तरिक राजस्व प्यान।",
      icon: <Landmark size={24} />,
    },
    {
      id: "education",
      titleEn: "Education & Admissions",
      titleNe: "शिक्षा तथा भर्ना",
      descEn: "MOEST No Objection Certificate (NOC) and TU exam registrations.",
      descNe: "शिक्षा मन्त्रालयको एनओसी (NOC) र त्रि.वि. परीक्षा फाराम।",
      icon: <GraduationCap size={24} />,
    },
    {
      id: "examinations",
      titleEn: "Examinations & Applications",
      titleNe: "परीक्षा र आवेदन",
      descEn: "Teacher Service Commission (TSC) and public board applications.",
      descNe: "शिक्षक सेवा आयोग तथा विभिन्न बोर्डका अनलाइन आवेदन।",
      icon: <FileCheck size={24} />,
    },
    {
      id: "photo",
      titleEn: "Photo & Document Check",
      titleNe: "फोटो तथा कागजात प्रमाणीकरण",
      descEn: "600x600 px square photo validation and document resizing.",
      descNe: "६००x६०० पिक्सेल फोटो मापदण्ड परीक्षण र रिसाइज सहयोग।",
      icon: <Camera size={24} />,
    },
  ];

  return (
    <>
      {/* =================================================================
          HERO SECTION (Split Layout with Nepal Details)
         ================================================================= */}
      <section className="hero-wrapper section-padding" style={{ paddingTop: "48px", paddingBottom: "72px" }}>
        <div className="hero-banner-accent" />
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Headlines & Compact Search */}
            <div>
              <div className="hero-eyebrow">
                <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                <span>{t("Your Online Form Partner • Nepal", "तपाईंको अनलाइन फाराम सहयोगी • नेपाल")}</span>
              </div>

              <h1 className="hero-headline">
                {lang === "ne" ? (
                  <>
                    अनलाइन फाराम भर्न <span className="highlight-blue">अब सजिलो।</span>
                  </>
                ) : (
                  <>
                    Your Forms. Your Goals. <span className="highlight-blue">Our Assistance.</span>
                  </>
                )}
              </h1>

              <p className="hero-subtitle">
                {t(
                  "Find verified requirements, official portal links, and get reliable step-by-step guidance through the application process — all in one place.",
                  "आवश्यक अनलाइन फाराम खोज्नुहोस्, आधिकारिक नियम र कागजात बुझ्नुहोस् र आवेदन प्रक्रियामा सहज सहयोग प्राप्त गर्नुहोस्।"
                )}
              </p>

              {/* Compact Search Interface with Live Preview */}
              <div style={{ position: "relative", marginBottom: "16px" }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("services-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hero-search-box"
                >
                  <Search size={18} style={{ color: "#64748B", marginLeft: "10px", flexShrink: 0 }} />
                  <input
                    type="text"
                    className="hero-search-input"
                    placeholder={t(
                      "Search forms (EDV, Passport, License)...",
                      "फाराम खोज्नुहोस् (डिभी, राहदानी, लाइसेन्स)..."
                    )}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search forms or services"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      style={{ background: "none", border: "none", color: "#94A3B8", cursor: "pointer", padding: "6px 8px", fontSize: "0.82rem" }}
                    >
                      Clear
                    </button>
                  ) : null}
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm hero-search-submit-btn"
                    style={{ padding: "8px 14px", borderRadius: "8px", fontWeight: 700, flexShrink: 0 }}
                  >
                    <span>{t("Search", "खोज्नुहोस्")}</span>
                  </button>
                </form>

                {/* Instant Live Results Dropdown */}
                {searchQuery.trim().length > 0 && (
                  <div className="hero-search-dropdown">
                    <div style={{ padding: "8px 14px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0", fontSize: "0.8rem", color: "#64748B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>
                        {t(`Found ${filteredServices.length} matching form(s)`, `${filteredServices.length} वटा फाराम भेटियो`)}
                      </span>
                      <a
                        href="#services-section"
                        style={{ color: "#1E73EB", textDecoration: "none", fontWeight: 600, fontSize: "0.78rem" }}
                      >
                        {t("View in Catalog ↓", "सबै हेर्नुहोस् ↓")}
                      </a>
                    </div>
                    <div style={{ maxHeight: "240px", overflowY: "auto" }}>
                      {filteredServices.length > 0 ? (
                        filteredServices.slice(0, 4).map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services/${srv.id}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "10px 14px",
                              textDecoration: "none",
                              borderBottom: "1px solid #F1F5F9",
                              color: "#0F172A",
                            }}
                          >
                            <div>
                              <strong style={{ fontSize: "0.88rem", color: "#0F172A", display: "block" }}>
                                {lang === "ne" ? srv.titleNe : srv.titleEn}
                              </strong>
                              <span style={{ fontSize: "0.78rem", color: "#64748B" }}>
                                {lang === "ne" ? srv.categoryNe : srv.category} • {lang === "ne" ? srv.officialFeeNe : srv.officialFee}
                              </span>
                            </div>
                            <ArrowRight size={14} color="#1E73EB" />
                          </Link>
                        ))
                      ) : (
                        <div style={{ padding: "14px", textAlign: "center", color: "#64748B", fontSize: "0.85rem" }}>
                          {t("No matching forms found. Need custom help?", "कुनै फाराम भेटिएन। थप सहयोग चाहिन्छ?")}{" "}
                          <a
                            href={VERIFIED_CONTACT.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#25D366", fontWeight: 700 }}
                          >
                            WhatsApp
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Search Tags */}
              <div className="hero-quick-chips">
                <span>{t("Popular Searches:", "प्रचलित खोजहरू:")}</span>
                {[
                  { label: "EDV 2027", query: "edv" },
                  { label: "e-Passport", query: "passport" },
                  { label: "Lok Sewa", query: "lok sewa" },
                  { label: "Driving License", query: "license" },
                  { label: "Shram Swikriti", query: "shram" },
                  { label: "NOC", query: "noc" },
                ].map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    className="chip-btn"
                    onClick={() => {
                      setSearchQuery(chip.query);
                      const el = document.getElementById("services-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Primary & Secondary Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <a href="#services-section" className="btn btn-primary btn-lg">
                  <span>{t("Explore Services", "उपलब्ध सेवाहरू हेर्नुहोस्")}</span>
                  <ArrowRight size={18} />
                </a>

                <a href="#how-it-works" className="btn btn-secondary btn-lg">
                  <span>{t("How It Works", "यो कसरी काम गर्छ?")}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Custom Brand Visual Card */}
            <div>
              <div className="hero-visual-card">
                {/* Brand Header Inside Card */}
                <div className="hero-visual-banner">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "8px", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "2px", boxShadow: "0 2px 6px rgba(0,0,0,0.12)" }}>
                      <img src="/icon.svg" alt="E-Form Nepal" style={{ width: "30px", height: "30px", display: "block" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>E-Form Nepal</div>
                      <div style={{ fontSize: "0.75rem", opacity: 0.9 }}>{VERIFIED_CONTACT.brandPromise}</div>
                    </div>
                  </div>
                  <span className="badge badge-official" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#FFFFFF", borderColor: "transparent", fontSize: "0.78rem" }}>
                    {t("Verified Assistance", "प्रमाणित सहजीकरण")}
                  </span>
                </div>

                {/* Checklist Preview Box */}
                <div style={{ padding: "8px 4px 16px 4px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#102A56", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
                    <span>{t("3 Pillars of Error-Free Filing", "सफल फारामका तीन मुख्य आधारहरू:")}</span>
                    <span style={{ color: "#10B981", fontSize: "0.78rem", fontWeight: 700 }}>100% Transparent</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", backgroundColor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                      <CheckCircle2 size={18} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <strong style={{ fontSize: "0.88rem", color: "#102A56", display: "block" }}>
                          {t("Official Portal Verification", "आधिकारिक पोर्टल लिङ्क")}
                        </strong>
                        <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                          {t("Always submit to verified government portals (gov.np / state.gov).", "सधैं आधिकारिक सरकारी डोमेनमा मात्र फाराम बुझाउनुहोस्।")}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", backgroundColor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                      <Camera size={18} style={{ color: "#1E73EB", flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <strong style={{ fontSize: "0.88rem", color: "#102A56", display: "block" }}>
                          {t("600x600 px Biometric Photo Compliance", "६००x६०० फोटो मापदण्ड")}
                        </strong>
                        <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                          {t("Avoid automatic disqualification from invalid background or specs.", "गलत ब्याकग्राउन्ड वा साइजका कारण रद्द हुनबाट जोगाउनुहोस्।")}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", backgroundColor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                      <Phone size={18} style={{ color: "#25D366", flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <strong style={{ fontSize: "0.88rem", color: "#102A56", display: "block" }}>
                          {t("Dedicated WhatsApp Assistance Desk", "प्रत्यक्ष ह्वाट्सएप सहायता")}
                        </strong>
                        <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                          {t("Direct one-on-one review via WhatsApp: 9865575108.", "व्यक्तिगत रूपमा फाराम रुजु तथा सहायता सेवा।")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Nepal Mountain Silhouette accent on card bottom */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", paddingTop: "12px", borderTop: "1px solid #E2E8F0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <img src="/efn-mountain.svg" alt="Nepal Mountains" style={{ height: "26px", width: "auto" }} />
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0B3D91" }}>
                      {VERIFIED_CONTACT.taglineNe}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenAssistance?.()}
                    className="btn btn-navy btn-sm"
                  >
                    {t("Start Assistance", "सुरु गर्नुहोस्")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          C. QUICK ACCESS SERVICES ("What Can We Help You With?")
         ================================================================= */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
            <span className="badge badge-neutral" style={{ marginBottom: "12px" }}>
              <Layers size={14} />
              {t("Service Categories", "सेवा क्षेत्रहरू")}
            </span>
            <h2 style={{ fontSize: "2.1rem", marginBottom: "12px", color: "#0B3D91" }}>
              {t("What Can We Help You With?", "हामी तपाईंलाई केमा सहयोग गर्न सक्छौं?")}
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem" }}>
              {t(
                "Select a category to explore verified application guidelines, requirements, official links, and personalized assistance.",
                "आफूलाई आवश्यक सेवा छनोट गरी नियम, आवश्यक कागजात र आधिकारिक लिङ्कहरू हेर्नुहोस्।"
              )}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "24px",
            }}
          >
            {quickCategories.map((cat) => (
              <div
                key={cat.id}
                className="card card-interactive"
                onClick={() => {
                  if (cat.id === "photo") {
                    const el = document.getElementById("photo-spec-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setActiveCategory(cat.id);
                    const el = document.getElementById("services-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "24px",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(30, 115, 235, 0.08)",
                      color: "#1E73EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {cat.icon}
                  </div>

                  <h3 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "#102A56" }}>
                    {lang === "ne" ? cat.titleNe : cat.titleEn}
                  </h3>

                  <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.5, marginBottom: "16px" }}>
                    {lang === "ne" ? cat.descNe : cat.descEn}
                  </p>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#1E73EB",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  <span>{t("Explore Forms", "फारामहरू हेर्नुहोस्")}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          D. FEATURED FORMS & SERVICES (Filter + Grid)
         ================================================================= */}
      <section id="services-section" className="section-padding" style={{ backgroundColor: "#F5F7FB" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginBottom: "32px" }}>
            <div>
              <span className="badge badge-official" style={{ marginBottom: "10px" }}>
                <ShieldCheck size={14} />
                {t("Verified Portals & Form Assistance", "प्रमाणीकृत अनलाइन फारामहरू")}
              </span>
              <h2 style={{ fontSize: "2.1rem", color: "#0B3D91" }}>
                {t("Popular Forms & Services", "लोकप्रिय फाराम तथा सेवाहरू")}
              </h2>
            </div>

            <Link href="/services" className="btn btn-secondary">
              <span>{t("View All 10+ Services", "सबै १०+ सेवाहरू हेर्नुहोस्")}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category Tabs */}
          <div className="services-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {lang === "ne" ? cat.labelNe : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Result Counter */}
          <div style={{ marginBottom: "20px", fontSize: "0.88rem", color: "#64748B" }}>
            {t(
              `Showing ${filteredServices.length} verified online form(s)`,
              `कुल ${filteredServices.length} वटा प्रमाणित फारामहरू उपलब्ध`
            )}
            {searchQuery && (
              <span>
                {" "}
                {t(`matching "${searchQuery}"`, `(खोजिएको: "${searchQuery}")`)}
              </span>
            )}
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="services-grid">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpenAssistance={onOpenAssistance}
                />
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: "center", padding: "48px 24px" }}>
              <HelpCircle size={40} style={{ color: "#94A3B8", margin: "0 auto 12px auto" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "6px" }}>
                {t("No matching services found", "कुनै फाराम फेला परेन")}
              </h3>
              <p style={{ color: "#64748B", marginBottom: "16px" }}>
                {t(
                  "Try a different search keyword or contact our WhatsApp support for custom guidance.",
                  "कृपया अर्को शब्द खोज्नुहोस् वा ह्वाट्सएप मार्फत हाम्रो सहयोग लिनुहोस्।"
                )}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="btn btn-secondary btn-sm"
              >
                {t("Reset Filters", "फिल्टर रिसेट गर्नुहोस्")}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =================================================================
          E. INTERACTIVE PHOTO SPEC TOOL EMBED
         ================================================================= */}
      <section id="photo-spec-section" className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <PhotoSpecTool />
        </div>
      </section>

      {/* =================================================================
          F. HOW IT WORKS (3-Step Visual Process)
         ================================================================= */}
      <section id="how-it-works" className="section-padding" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
            <span className="badge badge-neutral" style={{ marginBottom: "12px" }}>
              <Clock size={14} />
              {t("Simple & Transparent Process", "सहज तीन चरणको प्रक्रिया")}
            </span>
            <h2 style={{ fontSize: "2.1rem", marginBottom: "12px", color: "#0B3D91" }}>
              {t("How E-Form Nepal Works", "हाम्रो सेवा कसरी प्राप्त गर्ने?")}
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem" }}>
              {t(
                "A streamlined three-step pathway designed to help you prepare, verify, and submit your forms with confidence.",
                "तपाईंको समय र झन्झट बचाउन तयार पारिएको भरपर्दो अनलाइन प्रक्रिया।"
              )}
            </p>
          </div>

          <div className="timeline-grid">
            {/* Step 1 */}
            <div className="timeline-step-card">
              <span className="timeline-step-number">01</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Find Your Service", "आफ्नो सेवा छनोट गर्नुहोस्")}
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                {t(
                  "Search our verified catalog for the exact application you need — whether it's EDV, Lok Sewa, e-Passport, or a driving license.",
                  "हाम्रो सूचीबाट आफूलाई आवश्यक फाराम छान्नुहोस् र सम्बन्धित आधिकारिक जानकारी पत्ता लगाउनुहोस्।"
                )}
              </p>
              <div style={{ marginTop: "auto", fontSize: "0.82rem", color: "#1E73EB", fontWeight: 600 }}>
                {t("✓ Direct official portal links included", "✓ आधिकारिक पोर्टलको सिधा लिङ्क उपलब्ध")}
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-step-card">
              <span className="timeline-step-number">02</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Check the Requirements", "कागजात र मापदण्ड बुझ्नुहोस्")}
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                {t(
                  "Review required citizenship documents, educational certificates, fees, deadlines, and run your photo through our spec validator.",
                  "आवश्यक नागरिकता, शैक्षिक प्रमाणपत्र, दस्तुर तथा फोटोको मापदण्ड पूर्व-परीक्षण गर्नुहोस्।"
                )}
              </p>
              <div style={{ marginTop: "auto", fontSize: "0.82rem", color: "#1E73EB", fontWeight: 600 }}>
                {t("✓ Automatic 600x600 px photo inspection", "✓ ६००x६०० फोटो परीक्षण सुविधा")}
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-step-card">
              <span className="timeline-step-number">03</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Apply with Confidence", "आत्मविश्वासका साथ फाराम भर्नुहोस्")}
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                {t(
                  "Submit directly on the government portal yourself, or request one-on-one assistance via WhatsApp for error-free document preparation.",
                  "आफै आधिकारिक पोर्टलमा भर्नुहोस् वा हाम्रा प्राविधिक सहयोगी मार्फत ह्वाट्सएपबाट सुरक्षित फाराम भर्नुहोस्।"
                )}
              </p>
              <div style={{ marginTop: "auto", fontSize: "0.82rem", color: "#10B981", fontWeight: 600 }}>
                {t("✓ 1-on-1 human guidance via WhatsApp 9865575108", "✓ ह्वाट्सएप मार्फत प्रत्यक्ष सहयोग")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          G. WHY CHOOSE E-FORM NEPAL (Value Propositions)
         ================================================================= */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
            <span className="badge badge-popular" style={{ marginBottom: "12px" }}>
              <Sparkles size={14} />
              {t("Genuine Value", "हाम्रो विशेषता")}
            </span>
            <h2 style={{ fontSize: "2.1rem", marginBottom: "12px", color: "#0B3D91" }}>
              {t("Why Choose E-Form Nepal?", "इ-फाराम नेपाल किन रोज्ने?")}
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem" }}>
              {t(
                "We provide clear, honest digital guidance without deceptive promises or hidden catches.",
                "कुनै नक्कली ग्यारेन्टी बिना, पारदर्शी र भरपर्दो प्राविधिक मार्गदर्शन।"
              )}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "24px" }}>
            <div className="card" style={{ padding: "28px 24px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "#EFF6FF", color: "#1E73EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <FileText size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Easy-to-Understand Guidance", "बुझ्न सजिलो मार्गदर्शन")}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.5 }}>
                {t(
                  "Step-by-step instructions in simple Nepali and English, breaking down convoluted bureaucratic jargon.",
                  "जटिल सरकारी भाषालाई सरल नेपाली र अंग्रेजीमा व्याख्या गरी बुझ्न सहज बनाइएको।"
                )}
              </p>
            </div>

            <div className="card" style={{ padding: "28px 24px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "#EFF6FF", color: "#1E73EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <ExternalLink size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Verified Official Links", "प्रमाणीकृत आधिकारिक लिङ्कहरू")}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.5 }}>
                {t(
                  "Every service explicitly identifies the real government portal, shielding you from phishing clones and scam sites.",
                  "प्रत्येक फारामको वास्तविक सरकारी वेबसाइट सिधै उपलब्ध गराइ नक्कली साइटबाट सुरक्षित राख्दछ।"
                )}
              </p>
            </div>

            <div className="card" style={{ padding: "28px 24px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "#EFF6FF", color: "#1E73EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Clear Document Requirements", "स्पष्ट कागजात सूची")}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.5 }}>
                {t(
                  "Know exact document sizes, valid file formats, quota openings, and revenue vouchers before starting.",
                  "फाराम भर्नु अघि नै आवश्यक साइज, शुल्क र कागजातहरूको पूर्ण पूर्व-जानकारी।"
                )}
              </p>
            </div>

            <div className="card" style={{ padding: "28px 24px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "#EFF6FF", color: "#1E73EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Phone size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "#102A56" }}>
                {t("Responsive WhatsApp Support", "द्रुत ह्वाट्सएप सहायता")}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.5 }}>
                {t(
                  "Direct assistance through verified WhatsApp (+977 9865575108) with transparent nominal service fees.",
                  "हाम्रो प्रमाणित ह्वाट्सएप नम्बर मार्फत छिटो र पारदर्शी व्यक्तिगत प्राविधिक सहयोग।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          H. ASSISTANCE & CONTACT SECTION ("Need Help with an Online Form?")
         ================================================================= */}
      <section className="section-padding" style={{ backgroundColor: "#F5F7FB" }}>
        <div className="container">
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 12px 32px rgba(16,42,86,0.06)",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
              <div style={{ padding: "40px 32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
                  <div>
                    <span className="badge badge-assistance" style={{ marginBottom: "12px" }}>
                      <Phone size={14} />
                      {t("Direct Assistance Desk", "प्रत्यक्ष सहयोग कक्ष")}
                    </span>
                    <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#0B3D91" }}>
                      {t("Need Help with an Online Form?", "के अनलाइन फाराम भर्न सहयोग चाहियो?")}
                    </h2>
                    <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6, marginBottom: "24px" }}>
                      {t(
                        "Tell us which service you need help with, and we’ll guide you toward the right next step. Connect instantly via WhatsApp or book online.",
                        "तपाईंलाई कुन फाराम भर्न समस्या भएको छ भन्नुहोस्। हाम्रो टोलीले तपाईंलाई सही बाटो देखाउनेछ।"
                      )}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#ECFDF5", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <strong style={{ fontSize: "0.95rem", color: "#102A56" }}>
                            {t("Verified WhatsApp Contact:", "आधिकारिक ह्वाट्सएप सम्पर्क:")}
                          </strong>
                          <div style={{ color: "#0B3D91", fontWeight: 700 }}>
                            {VERIFIED_CONTACT.displayPhone}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#EFF6FF", color: "#1E73EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Clock size={18} />
                        </div>
                        <div>
                          <strong style={{ fontSize: "0.95rem", color: "#102A56" }}>
                            {t("Service Hours:", "सहयोग उपलब्ध समय:")}
                          </strong>
                          <div style={{ color: "#64748B" }}>
                            {t(VERIFIED_CONTACT.officeHoursEn, VERIFIED_CONTACT.officeHoursNe)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                      <a
                        href={VERIFIED_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-lg"
                      >
                        <Phone size={20} />
                        <span>{t("Chat on WhatsApp", "ह्वाट्सएपमा कुरा गर्नुहोस्")}</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenAssistance?.()}
                        className="btn btn-primary btn-lg"
                      >
                        <FileText size={20} />
                        <span>{t("Submit Form Inquiry", "फाराम अनुरोध पेश गर्नुहोस्")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          I. FREQUENTLY ASKED QUESTIONS
         ================================================================= */}
      <FaqSection />

      {/* =================================================================
          J. FINAL HIGH-CONVERSION CTA
         ================================================================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B3D91 0%, #072864 100%)",
          color: "#FFFFFF",
          padding: "72px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <img
            src="/mountains.svg"
            alt="Nepal Peak Silhouette"
            style={{ height: "64px", width: "auto", margin: "0 auto 16px auto", display: "block" }}
          />

          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", color: "#FFFFFF", fontWeight: 800, marginBottom: "14px" }}>
            {t("Start with the Right Form.", "सही फारामबाट आफ्नो प्रक्रिया सुरु गर्नुहोस्।")}
          </h2>

          <p style={{ color: "#CBD5E1", fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 32px auto", lineHeight: 1.6 }}>
            {t(
              "Find your service, understand the requirements, and take your next step with confidence.",
              "आवश्यक सेवा खोज्नुहोस्, नियम बुझ्नुहोस् र ढुक्क भएर आफ्नो आवेदन प्रक्रिया अघि बढाउनुहोस्।"
            )}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/services" className="btn btn-primary btn-lg" style={{ backgroundColor: "#1E73EB", color: "#FFF" }}>
              <span>{t("Explore Available Services", "सबै उपलब्ध सेवाहरू हेर्नुहोस्")}</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={VERIFIED_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <Phone size={18} />
              <span>{t("Message on WhatsApp", "ह्वाट्सएपमा सन्देश पठाउनुहोस्")}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
