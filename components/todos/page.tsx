import Link from "next/link";

export default async function TodosList() {
  const response = await fetch("https://dummyjson.com/todos", {
    cache: "force-cache",
    next: { revalidate: 10 },
  });
  const { todos } = await response.json();
  return (
    <div>
      <ul>
        {todos.map((todo: { todo: string; id: number }) => (
          <li key={todo.id}>
            <Link href={`/`}>{todo.todo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
