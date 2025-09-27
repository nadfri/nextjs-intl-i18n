'use client';

import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((curr) => curr + 1);

  return (
    <>
      <h1>Client Page 💻👤</h1>

      <p>This is a client component with a counter ➡️ {count}</p>

      <button onClick={increment}>Click me!</button>
    </>
  );
}
