import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  articles: ReactNode;
  categories: ReactNode;
};

export default function BlogLayout({
  children,
  articles,
  categories,
}: LayoutProps) {
  return (
    <>
      {children}
      <section>
        <h1>Les articles</h1>
        {articles}
      </section>
      <section>
        <h1>Les catégories</h1>
        {categories}
      </section>
    </>
  );
}
