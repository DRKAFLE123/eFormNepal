"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { VERIFIED_CONTACT } from "@/data/services";
import { Menu, X, Globe, Phone, FileText, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface HeaderProps {
  onOpenAssistance?: (serviceId?: string) => void;
}

export default function Header({ onOpenAssistance }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", labelEn: "Home", labelNe: "गृहपृष्ठ" },
    { href: "/services", labelEn: "Explore Services", labelNe: "सबै सेवाहरू" },
    { href: "/blog", labelEn: "Guides & Videos", labelNe: "गाइड तथा भिडियो" },
    { href: "/photo-tool", labelEn: "Photo Tool", labelNe: "फोटो टुल" },
    { href: "/how-it-works", labelEn: "How It Works", labelNe: "कसरी काम गर्छ?" },
    { href: "/#faqs", labelEn: "FAQs", labelNe: "प्रश्नोत्तर" },
    { href: "/contact", labelEn: "Contact", labelNe: "सम्पर्क" },
  ];

  return (
    <>
      {/* Top verified bar - Desktop & Tablet */}
      <div className="top-bar-verified">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "6px 12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem" }}>
            <ShieldCheck size={14} style={{ color: "#38BDF8", flexShrink: 0 }} />
            <span style={{ color: "#BAE6FD", fontWeight: 500 }}>
              {t("Fast & Reliable Online Form Help in Nepal", "नेपालका लागि छिटो र भरपर्दो अनलाइन फाराम सहायता")}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto" }}>
            <a
              href={VERIFIED_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "#86EFAC",
                fontWeight: 600,
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              <WhatsAppIcon size={14} style={{ color: "#25D366" }} />
              <span>9865575108</span>
            </a>

            <button
              onClick={toggleLang}
              className="lang-toggle-btn"
              style={{
                background: "rgba(255,255,255,0.14)",
                color: "#FFFFFF",
                borderColor: "rgba(255,255,255,0.25)",
                padding: "2px 8px",
                fontSize: "0.75rem",
                borderRadius: "4px",
              }}
              aria-label="Switch Language"
            >
              <Globe size={12} />
              <span>{lang === "en" ? "नेपाली (NE)" : "English (EN)"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <Link href="/" className="logo-wrapper" aria-label="E-Form Nepal Homepage">
              <img
                src="/logo.svg"
                alt="E-Form Nepal - Your Online Form Partner"
                width={200}
                height={50}
                style={{ height: "46px", width: "auto", display: "block" }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main Navigation">
              <ul className="nav-links">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.href} className={`nav-item ${isActive ? "active" : ""}`}>
                      <Link href={link.href}>
                        {t(link.labelEn, link.labelNe)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Header Right Actions */}
            <div className="header-actions">
              {/* Mobile 1-Tap Language Switcher Pill */}
              <button
                type="button"
                onClick={toggleLang}
                className="mobile-lang-pill"
                aria-label={lang === "en" ? "नेपाली भाषामा हेर्नुहोस्" : "Switch to English"}
              >
                <Globe size={13} style={{ color: "#1E73EB" }} />
                <span>{lang === "en" ? "नेपाली" : "English"}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenAssistance?.()}
                className="btn btn-primary btn-sm header-cta-btn"
                style={{ gap: "6px" }}
              >
                <FileText size={16} />
                <span className="header-cta-text">{t("Get Form Assistance", "फाराम सहायता लिनुहोस्")}</span>
              </button>

              {/* Hamburger Button for mobile */}
              <button
                type="button"
                className="hamburger-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <img
                  src="/logo.svg"
                  alt="E-Form Nepal"
                  style={{ height: "40px", width: "auto" }}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: "none", border: "none", color: "#64748B", cursor: "pointer", padding: "4px" }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <button
                  onClick={toggleLang}
                  className="lang-toggle-btn"
                  style={{ width: "100%", justifyContent: "center", padding: "8px 16px" }}
                >
                  <Globe size={16} />
                  <span>{lang === "en" ? "नेपाली भाषामा हेर्नुहोस् (Switch to Nepali)" : "View in English (Switch to EN)"}</span>
                </button>
              </div>

              <nav>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: pathname === link.href ? "#1E73EB" : "#102A56",
                          backgroundColor: pathname === link.href ? "#EFF6FF" : "transparent"
                        }}
                      >
                        {t(link.labelEn, link.labelNe)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={VERIFIED_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <WhatsAppIcon size={19} />
                <span>WhatsApp: {VERIFIED_CONTACT.whatsappNumber}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistance?.();
                }}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <FileText size={18} />
                <span>{t("Request Assistance", "सहायता अनुरोध गर्नुहोस्")}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
