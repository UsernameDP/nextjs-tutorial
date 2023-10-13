import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-5 flex-col">
      <h1 className="text-4xl text-white">Not Found</h1>
      <Link
        href={"/"}
        className="text-white text-xl hover:scale-105 transition-all duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
