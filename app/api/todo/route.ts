import { TodoFormSchema } from "@/app/form/todo-types";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const result = TodoFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message ?? "Invalid title" },
      { status: 400 },
    );
  }

  const todo = await prisma.todo.create({ data: body });
  revalidatePath("/form");

  return NextResponse.json({ todo });
}
