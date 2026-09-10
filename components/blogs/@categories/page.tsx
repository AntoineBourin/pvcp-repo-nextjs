const fetchProducts = async () => {
  // 5 secondes
  const responseProducts = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  });
  const data = await responseProducts.json();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return data.products;
};

export default async function Categories() {
  await fetchProducts();
  return (
    <div>
      <h1>Articles section</h1>
    </div>
  );
}
