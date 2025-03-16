// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log("Received contact form data:", { name, email, message });
    
    // Process your form data here:
    // For example, send an email or store it in a database.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
