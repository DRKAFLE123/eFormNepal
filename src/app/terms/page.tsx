import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | E-Form Nepal",
  description: "Terms and conditions governing the use of E-Form Nepal digital guidance and form assistance services.",
};

export default function TermsPage() {
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
            <FileText size={13} />
            Terms & Conditions
          </span>
          <h1 style={{ fontSize: "2.2rem", color: "#0B3D91", marginBottom: "16px" }}>
            Terms of Service
          </h1>
          <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: "28px" }}>
            Please read these terms carefully before utilizing eFormNepal.com or booking technical assistance.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "#334155", fontSize: "0.95rem", lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                1. Independent Assistance Nature
              </h2>
              <p>
                E-Form Nepal operates as an independent technical facilitation and digital guidance resource. We are not an embassy, government department, or statutory licensing board. Our services consist of aiding clients with digital document resizing, form translation, scheduling assistance, and error checking.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                2. No Guarantee of Selection or Approval
              </h2>
              <p>
                We do not and cannot guarantee outcomes for any application — including but not limited to Diversity Visa (EDV) lottery selections, Lok Sewa Aayog examination rankings, visa approvals, or driving license test passes. Final authority rests solely with the corresponding government commissions.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                3. User Accuracy Responsibility
              </h2>
              <p>
                Applicants are responsible for the factual authenticity of all documentation, citizenship records, and academic credentials provided. Providing counterfeit or falsified records violates Nepal law and will result in refusal of assistance.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.3rem", color: "#102A56", marginBottom: "8px" }}>
                4. Transparent Service Fees
              </h2>
              <p>
                Official statutory revenue charges are non-negotiable government fees. Any service fee charged by E-Form Nepal represents labor compensation for technical assistance, photo cropping, and advisory support rendered to the applicant.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
