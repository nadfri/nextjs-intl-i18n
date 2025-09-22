import { getTranslations } from 'next-intl/server';

export default async function ServerPage() {
  const t = await getTranslations('serverPage');

  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();

  return (
    <>
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>

      <p>{t('name', { name: user.name })}</p>
    </>
  );
}
