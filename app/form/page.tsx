import Products from "./Products";
import { Suspense } from "react";
import Todo from "./Todo";

export default async function FormPage(props: PageProps<"/form">) {
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <Suspense fallback={<p>Chargement des todos AAA...</p>}>
        <Todo searchParams={props.searchParams} />
      </Suspense>
      <Suspense fallback={<p>Chargement des produits...</p>}>
        <Products />
      </Suspense>
    </main>
  );
}
