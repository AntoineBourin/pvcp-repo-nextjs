import prisma from "@/utils/prisma";
import SearchBar from "./SearchBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { cacheLife, cacheTag } from "next/cache";

export default async function Todo({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  "use cache";
  cacheLife("max");
  cacheTag("todo");
  const { query } = await searchParams;
  const todos = await prisma.todo.findMany({
    where: { title: { contains: query as string } },
  });
  return (
    <>
      <SearchBar />
      <h1 className="mb-8 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Todos
      </h1>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}
