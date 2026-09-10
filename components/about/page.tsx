import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page à propos",
  description: "Description page à propos",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function About() {
  return (
    <div>
      <p style={{ marginBottom: "150vh" }}>Hello page à propos</p>
      <Link href="/">Nos catégories</Link>
    </div>
  );
}
