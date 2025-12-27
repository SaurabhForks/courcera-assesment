export default async function Author({ UserId }: { UserId: number }) {
  type Author = {
    id: number;
    name: string;
  };

  const authorData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${UserId}`,
  );
  const author: Author = await authorData.json();
  return (
    <div>
      <h2>Author Information</h2>
      <p>Name: {author.name}</p>
    </div>
  );
}
