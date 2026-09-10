import { NextResponse } from "next/server";

export async function GET() {
  const number = Math.random() * 100;
  return NextResponse.json({ number: number });
}
