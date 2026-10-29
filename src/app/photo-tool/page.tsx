import React from "react";
import type { Metadata } from "next";
import PhotoSpecTool from "@/components/PhotoSpecTool";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "EDV & Passport Photo Specification Checker | E-Form Nepal",
  description:
    "Free online photo spec validator for Diversity Visa (EDV) and Nepal e-Passport. Test 600x600 px dimensions, square aspect ratio, file size under 240KB, and white background rules.",
};

export default function PhotoToolPage() {
  return (
    <div style={{ backgroundColor: "#F5F7FB", minHeight: "85vh", padding: "40px 0 72px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#64748B", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div style={{ marginBottom: "32px", textAlign: "center", maxWidth: "720px", margin: "0 auto 32px auto" }}>
          <span className="badge badge-official" style={{ marginBottom: "12px" }}>
            <ShieldCheck size={14} />
            Free Digital Tool
          </span>
          <h1 style={{ fontSize: "2.4rem", color: "#0B3D91", marginBottom: "10px" }}>
            Online Biometric Photo Validator
          </h1>
          <p style={{ color: "#64748B", fontSize: "1.05rem" }}>
            Ensure your photo complies with US Department of State EDV and Nepal e-Passport standards to prevent form disqualification.
          </p>
        </div>

        <PhotoSpecTool />
      </div>
    </div>
  );
}
