"use client";

import { useOptimistic } from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList({
  todos,
}: {
  todos: Array<{ id: number; title: string }>;
}) {
  const [optimisticTodos, deleteTodo] = useOptimistic(
    todos,
    (state, todoIdToDelete) =>
      state.filter((todo) => todo.id !== todoIdToDelete),
  );
  return (
    <ul className="mt-8 space-y-2">
      {optimisticTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between gap-3 border-b border-zinc-200 py-2 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
        >
          <span>{todo.title}</span>
          <DeleteButton id={todo.id} deleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  );
}
