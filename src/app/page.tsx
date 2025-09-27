export default function Home() {
  const time = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date());

  return (
    <>
      <h1>Welcome to the Home Page 👌</h1>

      <h2>This is a server page without async/await</h2>

      <p>{time}</p>
    </>
  );
}
