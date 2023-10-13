export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 }
  });

  if (!res.ok) return undefined;

  return res.json();
}
