"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { VERIFIED_CONTACT } from "@/data/services";
import { Upload, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Phone, ShieldCheck, Eye } from "lucide-react";

export default function PhotoSpecTool() {
  const { t } = useLanguage();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSizeKB, setFileSizeKB] = useState<number>(0);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid JPEG or PNG image.");
      return;
    }

    setFileName(file.name);
    setFileSizeKB(Math.round(file.size / 1024));

    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setImageSrc(src);

      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const resetPhoto = () => {
    setImageSrc(null);
    setDimensions(null);
    setFileSizeKB(0);
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Evaluation criteria for EDV & Passport
  const isSquare = dimensions ? Math.abs(dimensions.width - dimensions.height) <= 2 : false;
  const isEdvDimensions = dimensions ? (dimensions.width >= 600 && dimensions.height >= 600 && isSquare) : false;
  const isSizeCompliant = fileSizeKB > 0 && fileSizeKB <= 240;

  return (
    <div className="card" style={{ padding: "32px", border: "1px solid #CBD5E1", backgroundColor: "#FFFFFF" }}>
      <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 28px auto" }}>
        <span className="badge badge-official" style={{ marginBottom: "10px" }}>
          <ShieldCheck size={14} />
          {t("Online Photo Specification Checker", "अनलाइन फोटो मापदण्ड परीक्षण टुल")}
        </span>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "8px", color: "#0B3D91" }}>
          {t("Check Your EDV & Passport Photo Compliance", "आफ्नो फोटो डिभी तथा पासपोर्टको मापदण्ड अनुसार छ कि छैन जाँच्नुहोस्")}
        </h2>
        <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
          {t(
            "Upload your photo to test pixel dimensions (600x600 px), file weight (max 240KB), and 1:1 aspect ratio before submitting official applications.",
            "फाराम पेश गर्नु अघि आफ्नो फोटोको साइज (६००x६०० पिक्सेल), फाइल तौल (२४० KB भन्दा कम) र वर्ग आकार तत्काल परीक्षण गर्नुहोस्।"
          )}
        </p>
      </div>

      {!imageSrc ? (
        /* Upload Dragzone */
        <div
          className="dropzone"
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          style={{
            backgroundColor: isDragOver ? "#EFF6FF" : "#F8FAFC",
            borderColor: isDragOver ? "#1E73EB" : "#93C5FD",
            padding: "48px 24px",
            borderRadius: "16px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            accept="image/jpeg,image/png"
            style={{ display: "none" }}
          />

          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgba(30, 115, 235, 0.1)",
              color: "#1E73EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px auto",
            }}
          >
            <Upload size={28} />
          </div>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "6px", color: "#102A56" }}>
            {t("Click to upload or drag photo here", "फोटो छनोट गर्न यहाँ थिच्नुहोस् वा फोटो तानेर राख्नुहोस्")}
          </h3>
          <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: "14px" }}>
            {t("Supports JPEG & PNG files (Selfie, scanned passport photo, or studio shot)", "JPEG तथा PNG फोटो समर्थित (मोबाइल वा क्यामेराबाट खिचिएको)")}
          </p>

          <span className="btn btn-secondary btn-sm" style={{ pointerEvents: "none" }}>
            {t("Browse Image from Device", "ग्यालरी वा कम्प्युटरबाट छान्नुहोस्")}
          </span>
        </div>
      ) : (
        /* Photo Result & Inspection View */
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Image Preview with Biometric Oval Guideline Overlay */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "280px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #0B3D91",
                boxShadow: "0 8px 24px rgba(16,42,86,0.12)",
                backgroundColor: "#F1F5F9",
              }}
            >
              <img
                src={imageSrc}
                alt="Uploaded Applicant Photo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />

              {/* Head height guideline overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: "15% 20% 20% 20%",
                  border: "2px dashed rgba(30, 115, 235, 0.75)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(11, 61, 145, 0.75)",
                    color: "#FFF",
                    fontSize: "0.65rem",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  Head Zone (50-69%)
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button onClick={resetPhoto} className="btn btn-secondary btn-sm" style={{ gap: "6px" }}>
                <RefreshCw size={14} />
                <span>{t("Upload Another Photo", "अर्को फोटो जाँच्नुहोस्")}</span>
              </button>
            </div>
          </div>

          {/* Test Metrics List */}
          <div style={{ backgroundColor: "#F8FAFC", borderRadius: "12px", padding: "20px", border: "1px solid #E2E8F0" }}>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "14px", color: "#102A56" }}>
              {t("Automated Specification Results:", "मापदण्ड परीक्षण नतिजा:")}
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
              {/* Metric 1: Aspect Ratio */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", backgroundColor: "#FFF", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                <div>
                  <strong style={{ display: "block", fontSize: "0.9rem", color: "#102A56" }}>
                    {t("1:1 Square Ratio (EDV Standard)", "१:१ वर्ग अनुपात (डिभी मापदण्ड)")}
                  </strong>
                  <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                    {dimensions ? `${dimensions.width} x ${dimensions.height} px` : "Measuring..."}
                  </span>
                </div>
                {isSquare ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                    <CheckCircle2 size={18} /> {t("Passed", "पास")}
                  </span>
                ) : (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#E11D2E", fontWeight: 700, fontSize: "0.85rem" }}>
                    <XCircle size={18} /> {t("Not Square", "मिलेन")}
                  </span>
                )}
              </div>

              {/* Metric 2: Resolution (600x600+) */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", backgroundColor: "#FFF", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                <div>
                  <strong style={{ display: "block", fontSize: "0.9rem", color: "#102A56" }}>
                    {t("Minimum Resolution (600 x 600 px)", "न्यूनतम साइज (६०० x ६०० पिक्सेल)")}
                  </strong>
                  <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                    {dimensions && dimensions.width >= 600 ? "Valid for US DV & State Dept" : "Too small or blurry"}
                  </span>
                </div>
                {isEdvDimensions ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                    <CheckCircle2 size={18} /> {t("Optimal (600px+)", "उत्कृष्ट")}
                  </span>
                ) : (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#F59E0B", fontWeight: 700, fontSize: "0.85rem" }}>
                    <AlertTriangle size={18} /> {t("Needs Resizing", "साइज मिलाउनुपर्ने")}
                  </span>
                )}
              </div>

              {/* Metric 3: File Size */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", backgroundColor: "#FFF", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                <div>
                  <strong style={{ display: "block", fontSize: "0.9rem", color: "#102A56" }}>
                    {t("File Size Limit (Under 240 KB)", "फाइल साइज सीमा (२४० KB भन्दा कम)")}
                  </strong>
                  <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                    {fileName} ({fileSizeKB} KB)
                  </span>
                </div>
                {isSizeCompliant ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                    <CheckCircle2 size={18} /> {t("Compliant", "स्वीकृत")}
                  </span>
                ) : (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#E11D2E", fontWeight: 700, fontSize: "0.85rem" }}>
                    <XCircle size={18} /> {t("Over Limit (>240KB)", "साइज बढी भयो")}
                  </span>
                )}
              </div>
            </div>

            {/* Assistance CTA if photo needs work */}
            <div style={{ backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "10px", padding: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <strong style={{ color: "#0B3D91", fontSize: "0.95rem", display: "block" }}>
                  {t("Need Professional Background Removal or 600x600 Crop?", "के सेतो पृष्ठभूमि मिलाउन वा ६००x६०० साइज क्रप गर्न सहयोग चाहियो?")}
                </strong>
                <p style={{ color: "#475569", fontSize: "0.82rem", margin: 0 }}>
                  {t("Send your picture directly to our WhatsApp desk for fast, compliant editing.", "हाम्रो ह्वाट्सएपमा पठाउनुहोस्, हामी केही मिनेटमै मिलाइदिनेछौं।")}
                </p>
              </div>

              <a
                href={`https://wa.me/9779865575108?text=${encodeURIComponent("Hello E-Form Nepal, I tested my photo and I need assistance resizing/editing it for EDV/Passport.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <Phone size={15} />
                <span>{t("Send to WhatsApp Editor", "ह्वाट्सएपमा पठाउनुहोस्")}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Official Guidelines Reference Footer */}
      <div style={{ marginTop: "28px", borderTop: "1px solid #E2E8F0", paddingTop: "20px" }}>
        <h4 style={{ fontSize: "0.95rem", color: "#102A56", marginBottom: "10px" }}>
          {t("Essential Biometric Rules to Remember:", "अनिवार्य बायोमेट्रिक नियमहरू:")}
        </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", fontSize: "0.85rem", color: "#64748B" }}>
          <div>❌ <strong>{t("No Eyeglasses:", "चश्मा लगाउन निषेध:")}</strong> {t("Eyeglasses or tinted lenses are strictly not accepted.", "कुनै पनि प्रकारको चश्मा लगाउन पाइँदैन।")}</div>
          <div>⚪ <strong>{t("White Background:", "सेतो पृष्ठभूमि:")}</strong> {t("Must be plain white or off-white without patterns.", "पृष्ठभूमि सफा सेतो हुनुपर्दछ।")}</div>
          <div>😐 <strong>{t("Neutral Expression:", "स्वाभाविक अनुहार:")}</strong> {t("Look directly into the camera with both eyes open.", "दुवै आँखा स्पष्ट खुलेको हुनुपर्छ।")}</div>
          <div>📅 <strong>{t("Taken Recently:", "हालसालैको फोटो:")}</strong> {t("Must have been taken within the last 6 months.", "पछिल्लो ६ महिना भित्रको हुनुपर्दछ।")}</div>
        </div>
      </div>
    </div>
  );
}
