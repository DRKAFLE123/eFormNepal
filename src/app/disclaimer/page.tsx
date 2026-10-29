import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer & Transparency | E-Form Nepal",
  description: "Official disclaimer clarifying independent status, statutory links, and limitation of liability.",
};

export default function DisclaimerPage() {
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
          <span className="badge badge-popular" style={{ marginBottom: "12px" }}>
            <ShieldAlert size={13} />
            Public Transparency Notice
          </span>
          <h1 style={{ fontSize: "2.2rem", color: "#0B3D91", marginBottom: "16px" }}>
            Disclaimer
          </h1>
          <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: "28px" }}>
            Important disclosure regarding our independent operations and trademark ownership.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "#334155", fontSize: "0.95rem", lineHeight: 1.7 }}>
            <div style={{ backgroundColor: "#EFF6FF", borderLeft: "4px solid #1E73EB", padding: "16px", borderRadius: "8px" }}>
              <strong>Independent Platform Notice:</strong> E-Form Nepal (eFormNepal.com) is an independent private venture providing digital application guidance and form preparation assistance in Nepal. We are NOT associated with, authorized by, endorsed by, or affiliated with the Government of Nepal, any ministry, foreign embassy, or municipal office.
            </div>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                1. Official Government Links & Portals
              </h2>
              <p>
                All official application forms, government fees, and regulations mentioned on our platform originate from public statutory domains (such as dvprogram.state.gov, applydl.dotm.gov.np, psconline1.psc.gov.np, and nepalpassport.gov.np). We explicitly encourage all users who have the requisite technical knowledge to submit their applications directly through these official websites.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                2. Free Official Entry Clarification
              </h2>
              <p>
                Certain programs — particularly the U.S. Diversity Visa (EDV) lottery — are 100% free of charge on the official U.S. Department of State website. Any charge levied by E-Form Nepal is exclusively for voluntary private consultation, document editing, photo resizing, and technical assistance requested by the applicant.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                3. Trademarks
              </h2>
              <p>
                All product names, logos, official seals, and brands cited on this website are the property of their respective trademark holders. Their mention does not imply endorsement or official affiliation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
