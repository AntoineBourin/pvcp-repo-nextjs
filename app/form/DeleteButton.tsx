"use client";

import { useRouter } from "next/navigation";
import { deleteTodoAction } from "../actions/delete-todo";
import { startTransition } from "react";

type DeleteButtonProps = {
  id: number;
  deleteTodo: (id: number) => void;
};

export default function DeleteButton({ id, deleteTodo }: DeleteButtonProps) {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    startTransition(() => deleteTodo(id));
    await deleteTodoAction(id);
    refresh();
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 transition-colors hover:border-red-300 hover:bg-red-100 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300 dark:hover:border-red-800 dark:hover:bg-red-950/70"
    >
      Supprimer
    </button>
  );
}
