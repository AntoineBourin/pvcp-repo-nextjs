type Todo = {
  id: number;
  todo: string;
};

const ProductList = async () => {
  const response = await fetch("https://dummyjson.com/todos?limit=5");
  const data = await response.json();

  return (
    <ul>
      {data.todos.map((todo: Todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </ul>
  );
};

export default ProductList;
