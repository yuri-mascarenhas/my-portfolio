import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    // Future: Add email sending (SES, SendGrid, etc.)
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
}
