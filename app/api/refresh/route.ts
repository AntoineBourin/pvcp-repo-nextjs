import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidatePath("/blog/[slug]");
  return NextResponse.json({ message: "refreshed successfully" });
}
