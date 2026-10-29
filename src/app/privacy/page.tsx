import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | E-Form Nepal",
  description: "Learn how E-Form Nepal respects user privacy, protects applicant information, and maintains transparent data practices.",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#F5F7FB", minHeight: "85vh", padding: "40px 0 72px 0" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#64748B", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="card" style={{ padding: "36px" }}>
          <span className="badge badge-neutral" style={{ marginBottom: "12px" }}>
            <Shield size={13} />
            Data Protection & Privacy
          </span>
          <h1 style={{ fontSize: "2.2rem", color: "#0B3D91", marginBottom: "16px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: "28px" }}>
            Last updated: October 2026. E-Form Nepal values your trust and is dedicated to handling your personal data responsibly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "#334155", fontSize: "0.95rem", lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                1. Information We Collect
              </h2>
              <p>
                When you browse eFormNepal.com, we do not require account registration or store sensitive government identification numbers in web cookies. If you request personalized form assistance via our WhatsApp desk or contact form, you voluntarily provide your name, phone number, and applicant documents necessary to prepare your specific filing.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                2. How Your Information is Handled
              </h2>
              <p>
                Any documents, photographs, or biographical details shared with our assistance specialists are used solely for formatting, resizing, and entering data on the official designated application portal. We never sell, lease, or monetize user data to third parties or marketing networks.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                3. Third-Party Official Links
              </h2>
              <p>
                Our portal provides direct links to verified statutory government websites (such as state.gov, dotm.gov.np, nepalpassport.gov.np, psc.gov.np). Once you navigate to an external official website, their respective privacy terms and security protocols govern your session.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                4. Contact for Privacy Inquiries
              </h2>
              <p>
                If you have questions regarding your data handling or wish to request prompt deletion of any temporary files, please email us directly at <strong>support@eformnepal.com</strong> or contact our WhatsApp desk at <strong>+977 9865575108</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
