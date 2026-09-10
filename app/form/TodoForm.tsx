"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TodoFormSchema, TodoFormType } from "./todo-types";

export default function TodoForm() {
  const { refresh } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(TodoFormSchema),
  });

  const onSubmit = async (todo: TodoFormType) => {
    const response = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify(todo),
    });
    const todoDB = await response.json();
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit((todo) => onSubmit(todo))}
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Le titre"
        {...register("title")}
        className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-700"
      />
      {errors?.title?.message && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {errors.title.message}
        </p>
      )}

      <button
        type="submit"
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Envoyer
      </button>
    </form>
  );
}
