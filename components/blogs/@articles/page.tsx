const fetchTodos = async () => {
  // 2 secondes
  const responseTodo = await fetch(`https://dummyjson.com/todos`, {
    next: { tags: ["todos"] },
  });
  const { todos } = await responseTodo.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return todos;
};

export default async function Articles() {
  await fetchTodos();
  return (
    <div>
      <h1>Articles section</h1>
    </div>
  );
}
