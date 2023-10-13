"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-5"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="rounded-md outline-yellow-200"
      />

      <button
        className="bg-slate-200 rounded-md p-1"
        type="submit"
      >
        🚀
      </button>
    </form>
  );
}
