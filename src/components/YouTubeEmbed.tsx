"use client";

import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { extractYouTubeId } from "@/data/blog";

interface YouTubeEmbedProps {
  urlOrId?: string;
  title?: string;
  thumbnailUrl?: string;
}

export default function YouTubeEmbed({ urlOrId, title = "E-Form Nepal Video Tutorial", thumbnailUrl }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractYouTubeId(urlOrId);

  if (!videoId) {
    return (
      <div
        style={{
          borderRadius: "16px",
          padding: "32px",
          backgroundColor: "#F1F5F9",
          border: "2px dashed #CBD5E1",
          textAlign: "center",
          color: "#64748B",
          margin: "24px 0",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "6px", color: "#334155" }}>
          Video Tutorial Upcoming
        </div>
        <p style={{ fontSize: "0.9rem" }}>
          A step-by-step video tutorial for this topic will be embedded here shortly from our official YouTube channel.
        </p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const poster = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      style={{
        margin: "32px 0",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#0B192C",
        boxShadow: "0 10px 30px rgba(11, 25, 44, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Video Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          backgroundColor: "#071224",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#E2E8F0",
          fontSize: "0.85rem",
          fontWeight: 600,
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              backgroundColor: "#DC2626",
              color: "#FFF",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
          >
            YOUTUBE
          </span>
          <span style={{ color: "#F8FAFC" }}>{title}</span>
        </div>

        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            color: "#93C5FD",
            textDecoration: "none",
            fontSize: "0.8rem",
          }}
        >
          <span>Watch on YouTube</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Video Screen / Player Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 ratio
          backgroundColor: "#000",
        }}
      >
        {!isPlaying ? (
          <div
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            aria-label={`Play video: ${title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsPlaying(true);
            }}
            style={{
              position: "absolute",
              inset: 0,
              cursor: "pointer",
              backgroundImage: `url(${poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Dark gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                transition: "background-color 0.2s ease",
              }}
            />

            {/* Red Play Button */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "#DC2626",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(220, 38, 38, 0.6)",
                transform: "scale(1)",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
              className="youtube-play-btn"
            >
              <Play size={34} fill="#FFFFFF" style={{ marginLeft: "4px" }} />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "20px",
                right: "20px",
                color: "#FFFFFF",
                zIndex: 2,
                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              Click to Play Step-by-Step Video Guide
            </div>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
