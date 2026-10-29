"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem, VERIFIED_CONTACT } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import AssistanceModal from "@/components/AssistanceModal";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  Phone,
  FileText,
  Calendar,
  Share2,
} from "lucide-react";

export default function ServiceDetailClient({ service }: { service: ServiceItem }) {
  const { lang, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const title = lang === "ne" ? service.titleNe : service.titleEn;
  const desc = lang === "ne" ? service.detailedGuideNe : service.detailedGuideEn;
  const fee = lang === "ne" ? service.officialFeeNe : service.officialFee;
  const time = lang === "ne" ? service.estimatedTimeNe : service.estimatedTime;
  const deadline = lang === "ne" ? service.deadlineNe : service.deadlineEn;
  const requirements = lang === "ne" ? service.requirementsNe : service.requirementsEn;
  const steps = lang === "ne" ? service.stepsNe : service.stepsEn;

  return (
    <div style={{ backgroundColor: "#F5F7FB", minHeight: "85vh", padding: "36px 0 72px 0" }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/services"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#64748B", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>{t("Back to All Services", "सबै सेवाहरूमा फर्कनुहोस्")}</span>
          </Link>
        </div>

        {/* Top Header Card */}
        <div
          className="card"
          style={{
            padding: "32px",
            marginBottom: "32px",
            borderLeft: "6px solid #1E73EB",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
            <span className="badge badge-neutral">
              {lang === "ne" ? service.categoryNe : service.category}
            </span>
            <span className="badge badge-official">
              <ShieldCheck size={12} />
              {t("Official Application Guide", "आधिकारिक फाराम निर्देशिका")}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", color: "#0B3D91", marginBottom: "12px" }}>
            {title}
          </h1>

          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "860px", marginBottom: "24px" }}>
            {lang === "ne" ? service.shortDescNe : service.shortDescEn}
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              padding: "16px",
              backgroundColor: "#F8FAFC",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
            }}
          >
            <div>
              <span style={{ fontSize: "0.78rem", color: "#64748B", display: "block" }}>
                {t("Official Government Fee:", "सरकारी राजस्व दस्तुर:")}
              </span>
              <strong style={{ color: "#102A56", fontSize: "0.95rem" }}>{fee}</strong>
            </div>

            <div>
              <span style={{ fontSize: "0.78rem", color: "#64748B", display: "block" }}>
                {t("Estimated Duration:", "फाराम भर्न लाग्ने समय:")}
              </span>
              <strong style={{ color: "#102A56", fontSize: "0.95rem" }}>{time}</strong>
            </div>

            {deadline && (
              <div>
                <span style={{ fontSize: "0.78rem", color: "#64748B", display: "block" }}>
                  {t("Application Window / Deadline:", "आवेदन समयसीमा:")}
                </span>
                <strong style={{ color: "#102A56", fontSize: "0.95rem" }}>{deadline}</strong>
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
          {/* Main Column */}
          <div>
            {/* Alert note if any */}
            {service.alertNoteEn && (
              <div
                style={{
                  backgroundColor: "#FFFBEB",
                  border: "1px solid #FDE68A",
                  borderRadius: "10px",
                  padding: "16px",
                  marginBottom: "28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <AlertCircle size={20} style={{ color: "#D97706", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#92400E", lineHeight: 1.5 }}>
                  {lang === "ne" ? service.alertNoteNe : service.alertNoteEn}
                </p>
              </div>
            )}

            {/* Detailed Guide */}
            <div className="card" style={{ padding: "28px", marginBottom: "28px" }}>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "14px", color: "#0B3D91" }}>
                {t("Service Overview & Background", "सेवाको परिचय तथा विवरण")}
              </h2>
              <p style={{ color: "#334155", fontSize: "0.98rem", lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>

            {/* Document Requirements Checklist */}
            <div className="card" style={{ padding: "28px", marginBottom: "28px" }}>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "16px", color: "#0B3D91" }}>
                {t("Required Documents & Eligibility Checklist", "आवश्यक कागजात तथा योग्यता सूची")}
              </h2>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {requirements.map((req, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "12px 14px",
                      backgroundColor: "#F8FAFC",
                      borderRadius: "8px",
                      border: "1px solid #E2E8F0",
                      fontSize: "0.92rem",
                      color: "#1E293B",
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step by Step Breakdown */}
            <div className="card" style={{ padding: "28px", marginBottom: "28px" }}>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "16px", color: "#0B3D91" }}>
                {t("Application Process Breakdown", "आवेदन प्रक्रिया")}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {steps.map((st, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      paddingBottom: "16px",
                      borderBottom: idx !== steps.length - 1 ? "1px dashed #E2E8F0" : "none",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#1E73EB",
                        color: "#FFF",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <strong style={{ display: "block", fontSize: "1rem", color: "#102A56", marginBottom: "4px" }}>
                        {st.title}
                      </strong>
                      <p style={{ margin: 0, color: "#64748B", fontSize: "0.9rem", lineHeight: 1.5 }}>
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Direct Actions Card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "2px solid #BFDBFE",
                padding: "28px",
                boxShadow: "0 6px 20px rgba(30,115,235,0.08)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", color: "#0B3D91", marginBottom: "8px" }}>
                {t("Ready to Take the Next Step?", "आवेदनका लागि तयार हुनुहुन्छ?")}
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.92rem", marginBottom: "20px" }}>
                {t(
                  "You can apply directly on the government portal, or connect with our team on WhatsApp for guided assistance.",
                  "तपाईं आफै सिधै सरकारी वेबसाइटमा भर्न सक्नुहुन्छ, वा हाम्रो ह्वाट्सएपमा सम्पर्क गरी सहयोग लिन सक्नुहुन्छ।"
                )}
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                {/* Official Link */}
                <a
                  href={service.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ gap: "8px" }}
                >
                  <span>{t("Open Official Government Portal", "आधिकारिक सरकारी पोर्टल खोल्नुहोस्")}</span>
                  <ExternalLink size={16} />
                </a>

                {/* WhatsApp Guided Filing */}
                <a
                  href={`https://wa.me/9779865575108?text=${encodeURIComponent(`Hello E-Form Nepal, I would like assistance with ${service.titleEn}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ gap: "8px" }}
                >
                  <Phone size={18} />
                  <span>{t("Request Assistance on WhatsApp", "ह्वाट्सएप मार्फत सहायता लिनुहोस्")}</span>
                </a>

                {/* Open Modal */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn btn-primary"
                >
                  <FileText size={18} />
                  <span>{t("Book Guided Assistance", "फाराम सहायता बुकिङ")}</span>
                </button>
              </div>

              {/* Legal Transparency Note */}
              <div style={{ marginTop: "20px", fontSize: "0.8rem", color: "#64748B", borderTop: "1px solid #E2E8F0", paddingTop: "12px" }}>
                {t(
                  "Transparency Notice: E-Form Nepal is an independent service. Official portal fees are determined strictly by the Government of Nepal or issuing authority.",
                  "पारदर्शिता सूचना: इ-फाराम नेपाल एक स्वतन्त्र डिजिटल परामर्श सेवा हो। सरकारी राजस्व सम्बन्धित निकायले तोके अनुसार नै हुन्छ।"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AssistanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedServiceId={service.id}
      />
    </div>
  );
}
