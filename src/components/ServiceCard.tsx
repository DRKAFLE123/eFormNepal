"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, ArrowRight, CheckCircle2, Clock, Shield, Sparkles } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  onOpenAssistance?: (serviceId: string) => void;
}

export default function ServiceCard({ service, onOpenAssistance }: ServiceCardProps) {
  const { lang, t } = useLanguage();

  const title = lang === "ne" ? service.titleNe : service.titleEn;
  const desc = lang === "ne" ? service.shortDescNe : service.shortDescEn;
  const category = lang === "ne" ? service.categoryNe : service.category;
  const fee = lang === "ne" ? service.officialFeeNe : service.officialFee;
  const time = lang === "ne" ? service.estimatedTimeNe : service.estimatedTime;
  const deadline = lang === "ne" ? service.deadlineNe : service.deadlineEn;

  return (
    <article className="card card-interactive service-card" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {/* Top Badges */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span className="badge badge-neutral" style={{ fontSize: "0.75rem" }}>
            {category}
          </span>
          {service.isPopular && (
            <span className="badge badge-popular" style={{ fontSize: "0.75rem" }}>
              <Sparkles size={11} />
              {t("Popular", "लोकप्रिय")}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="service-card-title" style={{ fontSize: "1.18rem", lineHeight: 1.35, marginBottom: "10px" }}>
          <Link href={`/services/${service.id}`} style={{ color: "inherit", textDecoration: "none" }}>
            {title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="service-card-desc" style={{ marginBottom: "16px" }}>
          {desc}
        </p>

        {/* Key Verified Specs */}
        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "8px", padding: "10px 12px", marginBottom: "16px", border: "1px solid #E2E8F0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "6px" }}>
            <span style={{ color: "#64748B", display: "flex", alignItems: "center", gap: "4px" }}>
              <Shield size={13} style={{ color: "#1E73EB" }} />
              {t("Official Portal Fee:", "सरकारी दस्तुर:")}
            </span>
            <span style={{ fontWeight: 700, color: "#102A56" }}>{fee}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.82rem" }}>
            <span style={{ color: "#64748B", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={13} style={{ color: "#F59E0B" }} />
              {t("Processing / Est. Time:", "अनुमानित समय:")}
            </span>
            <span style={{ fontWeight: 600, color: "#102A56" }}>{time}</span>
          </div>
        </div>

        {/* Key Requirements snippet */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
            {t("Key Requirements:", "मुख्य कागजात आवश्यकता:")}
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem", color: "#334155" }}>
            {(lang === "ne" ? service.requirementsNe : service.requirementsEn).slice(0, 2).map((req, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                <CheckCircle2 size={14} style={{ color: "#10B981", flexShrink: 0, marginTop: "3px" }} />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Actions Bottom */}
      <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #E2E8F0" }}>
        {/* Official Portal Direct Link (Clearly distinguished) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.82rem" }}>
          <span style={{ color: "#64748B" }}>{t("Official Portal:", "आधिकारिक पोर्टल:")}</span>
          <a
            href={service.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontWeight: 600, color: "#1E73EB" }}
            title={service.officialSourceLabel}
          >
            <span>{t("Direct Link", "सिधै जानुहोस्")}</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <Link
            href={`/services/${service.id}`}
            className="btn btn-secondary btn-sm"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>{t("View Guide", "मार्गदर्शन हेर्नुहोस्")}</span>
          </Link>

          <button
            type="button"
            onClick={() => onOpenAssistance?.(service.id)}
            className="btn btn-primary btn-sm"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>{t("Get Help", "सहयोग लिनुहोस्")}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
