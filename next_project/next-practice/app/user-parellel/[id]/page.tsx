type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  userid: number;
  id: number;
  title: string;
};

async function fetchUserPosts(userId: string): Promise<Post[]> {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  const posts: Post[] = await postData.json();
  return posts;
}

async function fetchUserAlbum(userId: string) {
  //await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/albums/?userId=${userId}`,
  );
  return albums.json();
}

export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const albuData = fetchUserAlbum(id);
  const postsData = fetchUserPosts(id);
  const [posts, albums] = await Promise.all([postsData, albuData]);

  return (
    <div className="flex justify-between">
      Posts by User {id}
      <ul className="w-[48%]">
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className="card bg-amber-50 m-4 p-4 text-black max-w-md w-[33%] rounded-lg shadow-md"
          >
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="w-[48%]">
        Albums by User {id}
        <ul>
          {albums.map((album: User) => (
            <li
              key={album.id}
              className="card bg-amber-50 m-4 p-4 text-black max-w-md w-[33%] rounded-lg shadow-md"
            >
              <b>{album.title}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
