import getUser from "@/libs/getUser";
import getUserPosts from "@/libs/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/libs/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId }
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);

  const user: User = await userData;

  if (!user) {
    return {
      title: "user not found"
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user: User = await userData;

  if (!user) return notFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user, index) => {
    return { userId: user.id.toString() };
  });
}
