import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <section className="flex gap-2 flex-col text-center">
        <h1 className="text-4xl">Not Found</h1>
        <Link
          href={"/"}
          className="hover:scale-105 transition-all duration-200"
        >
          Return Home
        </Link>
      </section>
    </div>
  );
}
