"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faqs";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("how-does-it-work");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px auto" }}>
          <span className="badge badge-neutral" style={{ marginBottom: "12px" }}>
            <HelpCircle size={14} />
            {t("Frequently Asked Questions", "प्रश्नोत्तर")}
          </span>
          <h2 style={{ fontSize: "2.1rem", marginBottom: "12px", color: "#0B3D91" }}>
            {t("Clear Answers to Common Questions", "बारम्बार सोधिने प्रश्नहरू")}
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem" }}>
            {t(
              "Transparent policies regarding our independent services, official portal fees, and application procedures.",
              "हाम्रा सेवाहरू, सरकारी दस्तुर र अनलाइन फाराम भर्ने प्रक्रिया सम्बन्धी स्पष्ट जानकारी।"
            )}
          </p>
        </div>

        <div className="faq-accordion">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const q = lang === "ne" ? faq.questionNe : faq.questionEn;
            const a = lang === "ne" ? faq.answerNe : faq.answerEn;

            return (
              <div
                key={faq.id}
                className="faq-item"
                style={{
                  borderColor: isOpen ? "#1E73EB" : "#E2E8F0",
                  boxShadow: isOpen ? "0 4px 14px rgba(30,115,235,0.08)" : "none",
                }}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span style={{ color: isOpen ? "#1E73EB" : "#102A56" }}>
                    {q}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease-in-out",
                      color: isOpen ? "#1E73EB" : "#64748B",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="faq-content">
                    <p style={{ margin: 0, color: "#475569", lineHeight: 1.65 }}>
                      {a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
