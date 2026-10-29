"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { VERIFIED_CONTACT } from "@/data/services";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Phone, AlertCircle } from "lucide-react";

export default function HowItWorksPage() {
  const { lang, t } = useLanguage();

  return (
    <div style={{ backgroundColor: "#F5F7FB", minHeight: "85vh", padding: "40px 0 72px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#64748B", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>{t("Back to Home", "गृहपृष्ठमा फर्कनुहोस्")}</span>
          </Link>
        </div>

        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px auto" }}>
          <span className="badge badge-neutral" style={{ marginBottom: "12px" }}>
            <Clock size={14} />
            {t("Application Process Guide", "आवेदन प्रक्रिया निर्देशिका")}
          </span>
          <h1 style={{ fontSize: "2.5rem", color: "#0B3D91", marginBottom: "12px" }}>
            {t("How E-Form Nepal Works", "इ-फाराम नेपालले कसरी काम गर्दछ?")}
          </h1>
          <p style={{ color: "#64748B", fontSize: "1.1rem", lineHeight: 1.6 }}>
            {t(
              "Whether you want to file your application yourself or need experienced assistance, we provide the clarity and tools you need.",
              "आफै अनलाइन फाराम भर्न चाहनुहोस् वा हाम्रो प्राविधिक सहयोग लिनुहोस्, हामी तपाईंलाई सम्पूर्ण सहयोग गर्दछौं।"
            )}
          </p>
        </div>

        {/* Comparison: Option A vs Option B */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginBottom: "48px" }}>
          {/* Option A: Self Application */}
          <div className="card" style={{ padding: "32px", borderTop: "4px solid #1E73EB" }}>
            <span className="badge badge-neutral" style={{ marginBottom: "12px" }}>
              {t("Option 1 • 100% Free", "विकल्प १ • पूर्णतया निःशुल्क")}
            </span>
            <h3 style={{ fontSize: "1.4rem", color: "#102A56", marginBottom: "10px" }}>
              {t("Self Application with Our Guides", "आफै फाराम भर्नुहोस्")}
            </h3>
            <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
              {t(
                "Use our free verified information, checklists, and direct official portal links to complete your application independently.",
                "हाम्रा निःशुल्क निर्देशिकाहरू, आवश्यक कागजातको सूची र आधिकारिक सरकारी वेबसाइटका लिङ्कहरू प्रयोग गरी आफै फाराम भर्नुहोस्।"
              )}
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem" }}>
                <CheckCircle2 size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                <span>{t("Verified official portal URLs (no phishing)", "आधिकारिक सरकारी पोर्टलको सिधा लिङ्क")}</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem" }}>
                <CheckCircle2 size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                <span>{t("Free photo size & compliance validator", "निःशुल्क ६००x६०० फोटो मापदण्ड जाँच")}</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem" }}>
                <CheckCircle2 size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                <span>{t("Clear eligibility and document requirements", "स्पष्ट योग्यता तथा आवश्यक कागजात विवरण")}</span>
              </li>
            </ul>

            <Link href="/services" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
              <span>{t("Explore Free Service Guides", "निःशुल्क मार्गदर्शिका हेर्नुहोस्")}</span>
            </Link>
          </div>

          {/* Option B: Guided Assistance */}
          <div className="card" style={{ padding: "32px", borderTop: "4px solid #10B981", backgroundColor: "#FFFFFF" }}>
            <span className="badge badge-assistance" style={{ marginBottom: "12px" }}>
              {t("Option 2 • WhatsApp Assisted", "विकल्प २ • ह्वाट्सएप प्रत्यक्ष सहयोग")}
            </span>
            <h3 style={{ fontSize: "1.4rem", color: "#102A56", marginBottom: "10px" }}>
              {t("Personal Form Assistance", "व्यक्तिगत फाराम सहायता")}
            </h3>
            <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
              {t(
                "Connect with our verified desk via WhatsApp. We resize your documents, review your form fields, and help you submit without errors.",
                "हाम्रो ह्वाट्सएपमा कागजात पठाउनुहोस्। हामी फोटो साइज मिलाउने, विवरण प्रविष्टि गर्ने र भौचर रुजु गर्न सघाउँछौं।"
              )}
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem" }}>
                <CheckCircle2 size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                <span>{t("Human review of every biographical field", "व्यक्तिगत विवरणको त्रुटिरहित रुजु")}</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem" }}>
                <CheckCircle2 size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                <span>{t("Professional 600x600 photo cropping & white bg", "६००x६०० फोटो तथा सेतो ब्याकग्राउन्ड सम्पादन")}</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem" }}>
                <CheckCircle2 size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                <span>{t("Appointment date & barcode slip assistance", "अपोइन्टमेन्ट मिति तथा बारकोड स्लिप व्यवस्थापन")}</span>
              </li>
            </ul>

            <a
              href={VERIFIED_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Phone size={18} />
              <span>{t("Connect on WhatsApp: 9865575108", "ह्वाट्सएप: ९८६५५७५१०८")}</span>
            </a>
          </div>
        </div>

        {/* Ethical Standards Card */}
        <div className="card" style={{ padding: "28px", borderLeft: "6px solid #F59E0B" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <AlertCircle size={24} style={{ color: "#D97706", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h4 style={{ fontSize: "1.1rem", color: "#102A56", marginBottom: "6px" }}>
                {t("Our Ethical Transparency Commitment", "हाम्रो नैतिक प्रतिबद्धता")}
              </h4>
              <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                {t(
                  "We believe in 100% honesty. Official application fees (e.g. NPR 5,000 for e-Passport or NPR 2,000 for NOC) belong directly to the Government of Nepal. Diversity Visa (EDV) official entry is free. E-Form Nepal only charges a modest, transparent fee for independent technical assistance when you request our time and photo preparation service. We never guarantee visas, jobs, or license pass rates.",
                  "हामी पूर्ण पारदर्शितामा विश्वास गर्दछौं। राहदानी वा एनओसी जस्ता सरकारी राजस्व सिधै सम्बन्धित सरकारी खातामा जान्छ। डिभी लटरीको आधिकारिक आवेदन निःशुल्क हुन्छ। हामी तपाईंले फाराम भर्न र फोटो मिलाउन सहयोग मागेको अवस्थामा मात्र न्यूनतम प्राविधिक सेवा शुल्क लिन्छौं। हामी कुनै पनि भिसा वा जागिरको नक्कली ग्यारेन्टी गर्दैनौं।"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
