"use client";

import React from "react";
import Link from "next/link";
import { VERIFIED_CONTACT, CATEGORIES } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, Clock, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Brand Banner Accent with Mountain Silhouette & Tagline */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            borderRadius: "16px",
            padding: "24px 32px",
            marginBottom: "48px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px"
          }}
        >
          <div>
            <div style={{ display: "inline-block", color: "#FBBF24", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "6px" }}>
              {VERIFIED_CONTACT.brandPromise}
            </div>
            <h3 style={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 800, marginBottom: "4px" }}>
              {t("Your Trusted Digital Form Partner in Nepal", "तपाईंको डिजिटल काममा हाम्रो साथ")}
            </h3>
            <p style={{ color: "#CBD5E1", fontSize: "0.95rem" }}>
              {t("Accurate guidance, photo compliance, and seamless online assistance.", "सटीक मार्गदर्शन, फोटो मापदण्ड प्रमाणीकरण र छिटो अनलाइन सेवा।")}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/mountains.svg"
              alt="Himalayas Nepal Silhouette"
              style={{ height: "64px", width: "auto" }}
            />
            <a
              href={VERIFIED_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontWeight: 700 }}
            >
              <WhatsAppIcon size={19} />
              <span>WhatsApp: 9865575108</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col">
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  padding: "8px 14px",
                  display: "inline-flex",
                  alignItems: "center",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                }}
              >
                <img
                  src="/logo.svg"
                  alt="E-Form Nepal - Your Online Form Partner"
                  style={{ height: "46px", width: "auto", display: "block" }}
                />
              </div>
            </div>
            <p style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "20px" }}>
              {t(
                "E-Form Nepal simplifies complex online application portals for Nepali citizens worldwide. From Diversity Visa (EDV) to Lok Sewa, e-Passport, and DOTM licenses, we offer verified guidance and expert form assistance.",
                "इ-फाराम नेपालले नेपाल तथा विदेशमा रहेका सम्पूर्ण नेपालीहरूका लागि जटिल अनलाइन फाराम भर्न सहज बनाउँछ। डिभी लटरी, लोक सेवा, ई-पासपोर्ट तथा सवारी चालक अनुमति पत्र सम्बन्धी भरपर्दो मार्गदर्शन प्रदान गर्दछ।"
              )}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                {t("Follow our official channels:", "हाम्रा आधिकारिक च्यानलहरू:")}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={VERIFIED_CONTACT.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow E-Form Nepal on Facebook"
                  style={{
                    backgroundColor: "#1877F2",
                    color: "#FFFFFF",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(24, 119, 242, 0.3)",
                  }}
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                </a>

                <a
                  href={VERIFIED_CONTACT.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow E-Form Nepal on TikTok"
                  style={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <TikTokIcon size={16} />
                  <span>TikTok</span>
                </a>

                <a
                  href={VERIFIED_CONTACT.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to E-Form Nepal on YouTube"
                  style={{
                    backgroundColor: "#FF0000",
                    color: "#FFFFFF",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(255, 0, 0, 0.35)",
                  }}
                >
                  <YouTubeIcon size={16} />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>{t("Quick Links", "प्रमुख लिङ्कहरू")}</h4>
            <ul className="footer-links">
              <li><Link href="/">{t("Home", "गृहपृष्ठ")}</Link></li>
              <li><Link href="/services">{t("All Online Forms", "सबै अनलाइन फारामहरू")}</Link></li>
              <li><Link href="/blog">{t("Guides & Video Tutorials", "गाइड तथा भिडियो ट्युटोरियलहरू")}</Link></li>
              <li><Link href="/photo-tool">{t("EDV & Passport Photo Tool", "डिभी तथा पासपोर्ट फोटो टुल")}</Link></li>
              <li><Link href="/how-it-works">{t("How It Works", "प्रक्रिया तथा नियमहरू")}</Link></li>
              <li><Link href="/#faqs">{t("Frequently Asked Questions", "बारम्बार सोधिने प्रश्नहरू")}</Link></li>
              <li><Link href="/contact">{t("Contact & Support", "सम्पर्क तथा सहयोग")}</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular Forms */}
          <div className="footer-col">
            <h4>{t("Featured Portals", "लोकप्रिय फारामहरू")}</h4>
            <ul className="footer-links">
              <li><Link href="/services/edv-lottery">{t("Diversity Visa (EDV)", "डिभी (EDV) लटरी")}</Link></li>
              <li><Link href="/services/e-passport-pre-enrollment">{t("e-Passport Pre-Enrollment", "विद्युतीय राहदानी (e-Passport)")}</Link></li>
              <li><Link href="/services/lok-sewa-aayog">{t("Lok Sewa Aayog PSC", "लोक सेवा आयोग दरखास्त")}</Link></li>
              <li><Link href="/services/dotm-driving-license">{t("DOTM Driving License", "सवारी चालक अनुमति पत्र")}</Link></li>
              <li><Link href="/services/national-id-nid">{t("National ID (NID)", "राष्ट्रिय परिचयपत्र (NID)")}</Link></li>
              <li><Link href="/services/dofe-shram-swikriti">{t("DOFE Labor Permit (Shram)", "वैदेशिक रोजगार श्रम स्वीकृति")}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="footer-col">
            <h4>{t("Verified Contact", "सम्पर्क विवरण")}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Phone size={18} style={{ color: "#25D366", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#94A3B8", fontSize: "0.8rem" }}>{t("Direct WhatsApp & Call", "ह्वाट्सएप तथा फोन")}</div>
                  <strong style={{ color: "#FFFFFF" }}>{VERIFIED_CONTACT.displayPhone}</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Mail size={18} style={{ color: "#60A5FA", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#94A3B8", fontSize: "0.8rem" }}>{t("Inquiry Email", "इमेल")}</div>
                  <strong style={{ color: "#FFFFFF" }}>{VERIFIED_CONTACT.email}</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Clock size={18} style={{ color: "#FBBF24", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#94A3B8", fontSize: "0.8rem" }}>{t("Working Hours", "खुला रहने समय")}</div>
                  <span style={{ color: "#E2E8F0" }}>{t(VERIFIED_CONTACT.officeHoursEn, VERIFIED_CONTACT.officeHoursNe)}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} style={{ color: "#F87171", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#94A3B8", fontSize: "0.8rem" }}>{t("Service Reach", "कार्यक्षेत्र")}</div>
                  <span style={{ color: "#E2E8F0" }}>{t(VERIFIED_CONTACT.addressEn, VERIFIED_CONTACT.addressNe)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Mandatory Independent Disclaimer */}
        <div className="footer-disclaimer-card" style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <ShieldCheck size={20} style={{ color: "#38BDF8", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong style={{ color: "#FFFFFF", display: "block", marginBottom: "4px" }}>
                {t("Legal Disclaimer & Public Transparency", "सार्वजनिक पारदर्शिता तथा कानुनी सूचना")}
              </strong>
              {t(VERIFIED_CONTACT.disclaimerEn, VERIFIED_CONTACT.disclaimerNe)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 E-Form Nepal. {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
            <Link href="/privacy" style={{ color: "#94A3B8" }}>{t("Privacy Policy", "गोपनीयता नीति")}</Link>
            <Link href="/terms" style={{ color: "#94A3B8" }}>{t("Terms of Service", "सेवाका सर्तहरू")}</Link>
            <Link href="/disclaimer" style={{ color: "#94A3B8" }}>{t("Disclaimer", "अस्वीकरण")}</Link>
            <Link href="/admin" style={{ color: "#64748B", fontSize: "0.82rem" }}>{t("Admin Desk", "एडमिन लगइन")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
