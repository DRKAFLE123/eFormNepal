import { NextResponse } from "next/server";
import { getArticles, saveArticle, deleteArticle } from "@/data/blogServer";
import { BlogArticle } from "@/data/blog";

export async function GET() {
  try {
    const articles = getArticles();
    return NextResponse.json({ success: true, articles });
  } catch (error) {
    console.error("GET /api/articles error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load articles" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || !body.titleEn) {
      return NextResponse.json(
        { success: false, error: "Title in English is required." },
        { status: 400 }
      );
    }

    const saved = saveArticle(body);
    return NextResponse.json({ success: true, article: saved });
  } catch (error) {
    console.error("POST /api/articles error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save article" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Article ID is required" },
        { status: 400 }
      );
    }

    const deleted = deleteArticle(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Article not found or could not be deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Article deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/articles error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete article" },
      { status: 500 }
    );
  }
}
