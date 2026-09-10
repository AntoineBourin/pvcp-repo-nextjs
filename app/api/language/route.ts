import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { language } = await request.json();
  const response = NextResponse.json({ message: "Cookie defined" });

  response.cookies.set("language", language);

  return response;
}
