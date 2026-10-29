"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SERVICES, CATEGORIES } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "@/components/ServiceCard";
import { Search, ShieldCheck, Filter, ArrowLeft } from "lucide-react";

interface ServicesPageProps {
  onOpenAssistance?: (serviceId?: string) => void;
}

export default function ServicesPage({ onOpenAssistance }: ServicesPageProps) {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const filtered = useMemo(() => {
    return SERVICES.filter((s) => {
      if (selectedCat !== "all") {
        const catMap: Record<string, string> = {
          education: "Education & Admissions",
          jobs: "Jobs & Recruitment",
          government: "Government Services",
          examinations: "Examinations & Applications",
          registration: "Online Registration",
        };
        if (s.category !== catMap[selectedCat]) return false;
      }
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        s.titleEn.toLowerCase().includes(q) ||
        s.shortDescEn.toLowerCase().includes(q) ||
        s.titleNe.includes(q) ||
        s.shortDescNe.includes(q)
      );
    });
  }, [search, selectedCat]);

  return (
    <div style={{ backgroundColor: "#F5F7FB", minHeight: "80vh", padding: "40px 0 72px 0" }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#64748B", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>{t("Back to Home", "गृहपृष्ठमा फर्कनुहोस्")}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: "32px" }}>
          <span className="badge badge-official" style={{ marginBottom: "10px" }}>
            <ShieldCheck size={14} />
            {t("Complete Online Directory", "सम्पूर्ण अनलाइन फाराम सूची")}
          </span>
          <h1 style={{ fontSize: "2.4rem", color: "#0B3D91", marginBottom: "8px" }}>
            {t("Explore Online Forms & Services", "सबै अनलाइन फाराम तथा सेवाहरू")}
          </h1>
          <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: "700px" }}>
            {t(
              "Browse all verified digital services in Nepal. Check official government requirements or request guided assistance.",
              "नेपालमा उपलब्ध सम्पूर्ण अनलाइन सरकारी तथा परीक्षा फारामहरूको आधिकारिक विवरण र सहयोग प्राप्त गर्नुहोस्।"
            )}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "14px",
            border: "1px solid #E2E8F0",
            marginBottom: "32px",
            boxShadow: "0 2px 8px rgba(16,42,86,0.04)",
          }}
        >
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 300px", position: "relative" }}>
              <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: "42px" }}
                placeholder={t(
                  "Search by service name, exam, or portal keyword...",
                  "सेवाको नाम वा कुञ्जी शब्दबाट खोज्नुहोस्..."
                )}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-tab-btn ${selectedCat === cat.id ? "active" : ""}`}
                  onClick={() => setSelectedCat(cat.id)}
                >
                  {lang === "ne" ? cat.labelNe : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {filtered.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenAssistance={onOpenAssistance}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="card" style={{ textAlign: "center", padding: "48px 24px" }}>
            <p style={{ color: "#64748B" }}>
              {t("No services match your filters.", "कुनै फाराम भेटिएन।")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
