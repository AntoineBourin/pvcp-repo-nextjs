"use client";

import { useRouter } from "next/navigation";

export default function Revalidate() {
  const { refresh } = useRouter();

  const handleRevalidate = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/refresh`, {
      method: "POST",
    });
    refresh();
  };

  return <button onClick={handleRevalidate}>Revalider</button>;
}
