import Search from "./search";

export default function Navbar() {
  return (
    <nav className="flex w-full sticky">
      <section className="p-5 bg-slate-500 w-full flex justify-between">
        <h1 className="text-white text-2xl font-bold">WikiRocket!</h1>

        <Search />
      </section>
    </nav>
  );
}
