"use client";

import React, { useState, useEffect } from "react";
import { SERVICES, VERIFIED_CONTACT } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { X, Send, Phone, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

interface AssistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function AssistanceModal({
  isOpen,
  onClose,
  preselectedServiceId,
}: AssistanceModalProps) {
  const { lang, t } = useLanguage();

  const [selectedService, setSelectedService] = useState(
    preselectedServiceId || "edv-lottery"
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES.find((s) => s.id === selectedService);
    const serviceName = serviceObj
      ? lang === "ne"
        ? serviceObj.titleNe
        : serviceObj.titleEn
      : selectedService;

    const message = `*E-Form Nepal Assistance Request*
👤 Name: ${fullName || "Applicant"}
📱 Mobile: ${phone || "Not specified"}
📍 District/City: ${district || "Nepal"}
📋 Service Requested: ${serviceName}
💬 Notes: ${notes || "I need guidance with filling this online form."}
---
Sent via eFormNepal.com`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/9779865575108?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: "20px" }}>
              <span className="badge badge-assistance" style={{ marginBottom: "8px" }}>
                <ShieldCheck size={13} />
                {t("1-on-1 Form Assistance", "प्रत्यक्ष फाराम सहायता")}
              </span>
              <h2 id="modal-title" style={{ fontSize: "1.45rem", marginBottom: "6px" }}>
                {t("Request Online Form Assistance", "अनलाइन फाराम सहायता अनुरोध")}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#64748B" }}>
                {t(
                  "Fill out the quick details below to connect directly with our verified assistance desk via WhatsApp.",
                  "तलका सामान्य विवरणहरू भर्नुहोस् र हाम्रो ह्वाट्सएप सहायता कक्षसँग सिधै सम्पर्क गर्नुहोस्।"
                )}
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Service Select */}
              <div>
                <label className="form-label">
                  {t("Select Service / Form *", "फाराम वा सेवा छनोट गर्नुहोस् *")}
                </label>
                <select
                  className="form-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {lang === "ne" ? s.titleNe : s.titleEn}
                    </option>
                  ))}
                </select>
                {currentServiceObj && (
                  <div style={{ marginTop: "6px", fontSize: "0.82rem", color: "#1E73EB" }}>
                    {t("Official Portal: ", "आधिकारिक पोर्टल: ")}
                    <a
                      href={currentServiceObj.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      {currentServiceObj.officialUrl.replace("https://", "")}
                    </a>
                  </div>
                )}
              </div>

              {/* Name & Phone in 2 cols */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label className="form-label">{t("Full Name *", "पूरा नाम *")}</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ramesh Thapa"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">{t("Mobile / WhatsApp *", "मोबाइल / ह्वाट्सएप *")}</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* District */}
              <div>
                <label className="form-label">{t("District / Municipality", "जिल्ला वा नगरपालिका")}</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Kathmandu, Pokhara, Chitwan"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>

              {/* Additional message */}
              <div>
                <label className="form-label">{t("Describe what help you need", "थप जिज्ञासा वा समस्या")}</label>
                <textarea
                  className="form-textarea"
                  rows={2}
                  placeholder={t(
                    "e.g. Need photo checked for EDV, or appointment slot guidance...",
                    "उदा: डिभीको फोटो मिलाउन, वा अपोइन्टमेन्ट लिन सहयोग चाहियो..."
                  )}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {/* Transparent Disclaimer Box */}
              <div style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "12px", fontSize: "0.8rem", color: "#64748B", lineHeight: 1.5 }}>
                <strong>{t("Please Note:", "ध्यानाकर्षण:")}</strong> {t(
                  "E-Form Nepal charges a modest nominal fee for technical document prep and photo compliance. We do NOT guarantee government approval or visa lottery selection.",
                  "इ-फाराम नेपालले प्राविधिक फाराम तयारी र फोटो मिलाउनका लागि मात्र न्यूनतम सेवा शुल्क लिने गर्दछ। हामी सरकारी स्वीकृति वा चिट्ठा पर्ने कुनै नक्कली ग्यारेन्टी गर्दैनौं।"
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Phone size={20} />
                <span>{t("Continue to WhatsApp Support", "ह्वाट्सएपमा सम्पर्क गर्नुहोस्")}</span>
              </button>
            </form>
          </>
        ) : (
          /* Submission Confirmation */
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#ECFDF5",
                color: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto",
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: "1.4rem", marginBottom: "8px", color: "#102A56" }}>
              {t("Connecting to WhatsApp Support...", "ह्वाट्सएप सहायता कक्षमा जोड्दै...")}
            </h3>

            <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: "24px", lineHeight: 1.6 }}>
              {t(
                "WhatsApp should have opened in your browser or app. If it didn't open automatically, click the button below to message our verified desk directly at 9865575108.",
                "ह्वाट्सएप खुल्नु पर्नेछ। यदि स्वतः खुलेन भने तलको बटन थिचेर हाम्रो आधिकारिक नम्बर ९८६५५७५१०८ मा सन्देश पठाउनुहोस्।"
              )}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={VERIFIED_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ justifyContent: "center" }}
              >
                <Phone size={18} />
                <span>{t("Open WhatsApp Again", "पुनः ह्वाट्सएप खोल्नुहोस्")}</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                style={{ justifyContent: "center" }}
              >
                {t("Close", "बन्द गर्नुहोस्")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
