type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
};

export default async function UserServerpage() {
  //await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay for loading demonstration
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await user.json();
  return (
    <div>
      <h1>User Server Page</h1>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>Name:{user.name}</h2>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
