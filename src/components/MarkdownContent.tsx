import React from "react";

interface MarkdownContentProps {
  content: string;
}

function parseInline(text: string): React.ReactNode[] {
  // Matches:
  // 1 & 2 & 3: [label](url)
  // 4: **bold**
  // 5: `code`
  // 6: *italic*
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      // Link [label](url)
      elements.push(
        <a
          key={`link-${match.index}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#1E73EB",
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            wordBreak: "break-word",
          }}
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      // Bold **text**
      elements.push(
        <strong key={`bold-${match.index}`} style={{ fontWeight: 700, color: "#0F172A" }}>
          {match[4]}
        </strong>
      );
    } else if (match[5]) {
      // Code `code`
      elements.push(
        <code
          key={`code-${match.index}`}
          style={{
            backgroundColor: "#F1F5F9",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "0.9em",
            fontFamily: "monospace",
            color: "#0F172A",
          }}
        >
          {match[5]}
        </code>
      );
    } else if (match[6]) {
      // Italic *text*
      elements.push(
        <em key={`em-${match.index}`} style={{ fontStyle: "italic" }}>
          {match[6]}
        </em>
      );
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  if (!content) return null;

  const lines = content.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = (keyPrefix: number) => {
    if (currentList.length > 0 && listType) {
      if (listType === "ul") {
        blocks.push(
          <ul
            key={`list-${keyPrefix}`}
            style={{
              margin: "14px 0 22px 0",
              paddingLeft: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              color: "#334155",
              fontSize: "1rem",
              lineHeight: 1.65,
            }}
          >
            {currentList.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#1E73EB",
                    marginTop: "9px",
                    flexShrink: 0,
                  }}
                />
                <span style={{ flex: 1 }}>{parseInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        blocks.push(
          <ol
            key={`list-${keyPrefix}`}
            style={{
              margin: "14px 0 22px 0",
              paddingLeft: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              color: "#334155",
              fontSize: "1rem",
              lineHeight: 1.65,
            }}
          >
            {currentList.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "22px",
                    height: "22px",
                    borderRadius: "6px",
                    backgroundColor: "#EFF6FF",
                    color: "#1E73EB",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </span>
                <span style={{ flex: 1 }}>{parseInline(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Empty line flushes active list
    if (!line) {
      flushList(i);
      continue;
    }

    // Horizontal rule
    if (line === "---" || line === "***" || line === "___") {
      flushList(i);
      blocks.push(
        <hr
          key={`hr-${i}`}
          style={{
            border: "none",
            borderTop: "1px solid #E2E8F0",
            margin: "28px 0",
          }}
        />
      );
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      flushList(i);
      blocks.push(
        <h3
          key={`h3-${i}`}
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "#0F172A",
            marginTop: "24px",
            marginBottom: "12px",
            lineHeight: 1.4,
          }}
        >
          {parseInline(line.substring(4))}
        </h3>
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushList(i);
      blocks.push(
        <h2
          key={`h2-${i}`}
          style={{
            fontSize: "1.45rem",
            fontWeight: 800,
            color: "#0F172A",
            marginTop: "32px",
            marginBottom: "14px",
            lineHeight: 1.35,
          }}
        >
          {parseInline(line.substring(3))}
        </h2>
      );
      continue;
    }

    if (line.startsWith("# ")) {
      flushList(i);
      blocks.push(
        <h1
          key={`h1-${i}`}
          style={{
            fontSize: "1.7rem",
            fontWeight: 900,
            color: "#0F172A",
            marginTop: "36px",
            marginBottom: "16px",
            lineHeight: 1.3,
          }}
        >
          {parseInline(line.substring(2))}
        </h1>
      );
      continue;
    }

    // Unordered list item: starts with "* " or "- "
    if (line.startsWith("* ") || line.startsWith("- ")) {
      if (listType !== "ul") {
        flushList(i);
        listType = "ul";
      }
      currentList.push(line.substring(2));
      continue;
    }

    // Ordered list item: starts with digits followed by ". "
    const olMatch = line.match(/^\d+\.\s+(.*)/);
    if (olMatch) {
      if (listType !== "ol") {
        flushList(i);
        listType = "ol";
      }
      currentList.push(olMatch[1]);
      continue;
    }

    // Regular paragraph
    flushList(i);
    blocks.push(
      <p
        key={`p-${i}`}
        style={{
          marginBottom: "14px",
          lineHeight: 1.75,
          color: "#334155",
          fontSize: "1rem",
        }}
      >
        {parseInline(line)}
      </p>
    );
  }

  flushList(lines.length);

  return <div className="markdown-rendered-content">{blocks}</div>;
}
