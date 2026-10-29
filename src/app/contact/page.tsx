"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { VERIFIED_CONTACT, SERVICES } from "@/data/services";
import { ArrowLeft, Phone, Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function ContactPage() {
  const { lang, t } = useLanguage();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("edv-lottery");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = SERVICES.find((s) => s.id === service)?.titleEn || service;
    const text = `*Inquiry from eFormNepal.com*
👤 Name: ${name}
📱 Mobile: ${mobile}
📋 Service: ${serviceName}
💬 Message: ${message || "I have a question regarding online form filing."}`;

    window.open(`https://wa.me/9779865575108?text=${encodeURIComponent(text)}`, "_blank");
    setIsSuccess(true);
  };

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

        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px auto" }}>
          <span className="badge badge-official" style={{ marginBottom: "12px" }}>
            <Phone size={14} />
            {t("Verified Assistance Desk", "सम्पर्क तथा सहयोग")}
          </span>
          <h1 style={{ fontSize: "2.4rem", color: "#0B3D91", marginBottom: "10px" }}>
            {t("Get in Touch with E-Form Nepal", "हामीलाई सम्पर्क गर्नुहोस्")}
          </h1>
          <p style={{ color: "#64748B", fontSize: "1.05rem" }}>
            {t(
              "Have questions about photo specs, form deadlines, or need direct assistance? Our verified desk is here to help.",
              "फोटो साइज, फारामको म्याद वा अनलाइन सहायता सम्बन्धी कुनै पनि जिज्ञासा भएमा हामीलाई सम्पर्क गर्नुहोस्।"
            )}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {/* Contact Details Card */}
            <div className="card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#0B3D91", marginBottom: "20px" }}>
                  {t("Official Contact Channels", "सम्पर्क विवरणहरू")}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#ECFDF5", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "#64748B", display: "block" }}>
                        {t("WhatsApp & Direct Call:", "ह्वाट्सएप तथा फोन:")}
                      </span>
                      <strong style={{ fontSize: "1.1rem", color: "#102A56" }}>
                        {VERIFIED_CONTACT.displayPhone}
                      </strong>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#EFF6FF", color: "#1E73EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "#64748B", display: "block" }}>
                        {t("Email Support:", "इमेल सहायता:")}
                      </span>
                      <strong style={{ fontSize: "1.05rem", color: "#102A56" }}>
                        {VERIFIED_CONTACT.email}
                      </strong>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#FFFBEB", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "#64748B", display: "block" }}>
                        {t("Working Hours:", "खुला रहने समय:")}
                      </span>
                      <strong style={{ fontSize: "0.95rem", color: "#102A56" }}>
                        {t(VERIFIED_CONTACT.officeHoursEn, VERIFIED_CONTACT.officeHoursNe)}
                      </strong>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#FEF2F2", color: "#E11D2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "#64748B", display: "block" }}>
                        {t("Service Coverage:", "कार्यक्षेत्र:")}
                      </span>
                      <strong style={{ fontSize: "0.95rem", color: "#102A56" }}>
                        {t(VERIFIED_CONTACT.addressEn, VERIFIED_CONTACT.addressNe)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #E2E8F0" }}>
                <a
                  href={VERIFIED_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%", justifyContent: "center", marginBottom: "16px" }}
                >
                  <Phone size={18} />
                  <span>{t("Chat Instantly on WhatsApp", "सिधै ह्वाट्सएपमा कुरा गर्नुहोस्")}</span>
                </a>

                {/* Official Social Media Channels */}
                <div style={{ marginTop: "12px" }}>
                  <span style={{ fontSize: "0.82rem", color: "#64748B", display: "block", marginBottom: "8px", fontWeight: 600 }}>
                    {t("Follow our official channels:", "हाम्रा आधिकारिक च्यानलहरू:")}
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                    <a
                      href={VERIFIED_CONTACT.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      style={{
                        backgroundColor: "#1877F2",
                        color: "#FFFFFF",
                        padding: "8px 6px",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        textDecoration: "none",
                      }}
                    >
                      <FacebookIcon size={15} />
                      <span>Facebook</span>
                    </a>

                    <a
                      href={VERIFIED_CONTACT.socialLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      style={{
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                        padding: "8px 6px",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        textDecoration: "none",
                      }}
                    >
                      <TikTokIcon size={15} />
                      <span>TikTok</span>
                    </a>

                    <a
                      href={VERIFIED_CONTACT.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      style={{
                        backgroundColor: "#FF0000",
                        color: "#FFFFFF",
                        padding: "8px 6px",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        textDecoration: "none",
                      }}
                    >
                      <YouTubeIcon size={15} />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="card" style={{ padding: "32px", backgroundColor: "#FFFFFF" }}>
              <h3 style={{ fontSize: "1.3rem", color: "#0B3D91", marginBottom: "16px" }}>
                {t("Send a Message", "सन्देश पठाउनुहोस्")}
              </h3>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label className="form-label">{t("Your Name *", "तपाईंको नाम *")}</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Bipin Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">{t("Mobile / WhatsApp Number *", "मोबाइल / ह्वाट्सएप नम्बर *")}</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="98XXXXXXXX"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">{t("Service Needed *", "आवश्यक सेवा *")}</label>
                    <select
                      className="form-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {lang === "ne" ? s.titleNe : s.titleEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">{t("Your Message or Query", "तपाईंको सन्देश वा प्रश्न")}</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      placeholder={t("How can we assist you?", "हामी तपाईंलाई कसरी सहयोग गर्न सक्छौं?")}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    <Send size={16} />
                    <span>{t("Send via WhatsApp Support", "ह्वाट्सएप मार्फत पठाउनुहोस्")}</span>
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <CheckCircle2 size={48} style={{ color: "#10B981", margin: "0 auto 16px auto" }} />
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "#102A56" }}>
                    {t("Opening WhatsApp...", "ह्वाट्सएप खुल्दैछ...")}
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "20px" }}>
                    {t("Your message has been formatted. If WhatsApp did not open, click below.", "तपाईंको सन्देश तयार भयो। सिधै खोल्न तल थिच्नुहोस्।")}
                  </p>
                  <a
                    href={VERIFIED_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <span>{t("Open WhatsApp Desk", "ह्वाट्सएप खोल्नुहोस्")}</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Independent Disclaimer */}
          <div className="card" style={{ padding: "20px", borderLeft: "4px solid #1E73EB", backgroundColor: "#F8FAFC" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <ShieldCheck size={20} style={{ color: "#1E73EB", flexShrink: 0, marginTop: "2px" }} />
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748B", lineHeight: 1.5 }}>
                {t(VERIFIED_CONTACT.disclaimerEn, VERIFIED_CONTACT.disclaimerNe)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
