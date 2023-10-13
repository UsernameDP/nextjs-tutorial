type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;

  return (
    <>
      {posts.map((post, index) => {
        return (
          <article key={index}>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
          </article>
        );
      })}
    </>
  );
}
