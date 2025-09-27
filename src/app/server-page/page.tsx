export default async function ServerPage() {
  const randomID = Math.floor(Math.random() * 10) + 1;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${randomID}
    `);

  const user = await res.json();

  return (
    <>
      <h1>Server Page</h1>

      <h2>This is a server page with async and data fetching</h2>

      <p>User name : {user.name}</p>
    </>
  );
}
