import { Suspense } from "react";
import Author from "./auther";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostSequentialPage() {
  const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postData.json();

  const filteredPosts = posts.filter((post: Post) => post.id % 10 === 1);
  return (
    <div>
      <h1>Posts Loaded Sequentially</h1>
      <ul className="flex flex-wrap justify-space-between">
        {filteredPosts.map((post: Post) => (
          <li
            key={post.id}
            className="card bg-amber-50 m-4 p-4 text-black max-w-md w-[33%] rounded-lg shadow-md"
          >
            {post.title}
            <Suspense fallback={<div>Loading author...</div>}>
              <Author UserId={post.userId} />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  );
}
