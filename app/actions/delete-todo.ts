"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const deleteTodoAction = async (id: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await prisma.todo.delete({ where: { id: id } });
    revalidatePath("/form");
    return { message: "Bravo" };
  } catch {
    return { message: "Une erreur est survenue" };
  }
};
