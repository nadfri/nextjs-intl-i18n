'use client';
import { useTranslations, useFormatter } from 'next-intl';
import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);
  const t = useTranslations('clientPage');
  const format = useFormatter();

  const time = format.dateTime(new Date(), {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <>
      <h1>{t('title', { time })}</h1>

      <h2>{time}</h2>

      <p>{t('description', { count })}</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
