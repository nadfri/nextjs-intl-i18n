'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((current) => current + 1);
  
  const t = useTranslations('clientPage');

  return (
    <>
      <h1>{t('title')}</h1>

      <h2>{t('description', { count })}</h2>

      <button onClick={increment}>{t('clickMe')}</button>
    </>
  );
}
