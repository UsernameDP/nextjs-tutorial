import React from "react";
import Link from "next/link";
import getAllUsers from "../../libs/getAllUsers";

export default async function Users() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  console.log("Hello!");

  return (
    <section>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <br />

      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
}
