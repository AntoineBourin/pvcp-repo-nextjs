import { cacheLife, cacheTag } from "next/cache";

const fetchProducts = async () => {
  // 5 secondes
  const responseProducts = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  });
  const data = await responseProducts.json();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return data.products;
};

export default async function Products() {
  "use cache";
  cacheLife("hours");
  cacheTag("products");
  const products = await fetchProducts();
  return products.map((product: { id: number; title: string }) => (
    <li key={product.id}>{product.title}</li>
  ));
}
