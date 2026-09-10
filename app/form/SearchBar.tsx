"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const searchParam = useSearchParams();
  const [search, setSearch] = useState(searchParam.get("query") ?? "");
  const { push } = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    push(`/form?query=${e.target.value}`);
  };

  return (
    <>
      <p>Rechercher</p>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        name="search"
        id="search"
        aria-label="search"
        placeholder="Votre recherche..."
      />
    </>
  );
};

export default SearchBar;
