import React from "react";
import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  return (
    <div className="flex flex-row w-full bg-slate-400 rounded-sm gap-5 p-3 items-center">
      {result.thumbnail?.source !== undefined ? (
        <img
          src={result.thumbnail.source}
          alt={result.title}
          width={result.thumbnail.width}
          height={result.thumbnail.height}
          loading="lazy"
        />
      ) : undefined}
      <article>
        <h2>
          <Link
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            className="underline text-lg"
          >
            {result.title}
          </Link>
        </h2>
        <p className="text-base">{result.extract}</p>
      </article>
    </div>
  );
}
