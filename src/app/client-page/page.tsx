'use client';

import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Client Page 💻👤</h1>

      <p>This is a client component with a counter ➡️ {count}</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
