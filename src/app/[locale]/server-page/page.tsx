import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function ServerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  // Enable static rendering
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('serverPage');

  const randomID = Math.floor(Math.random() * 10) + 1;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${randomID}`);
  const user = await res.json();

  return (
    <>
      <h1>{t('title')}</h1>

      <h2>{t('description')}</h2>

      <p>{t('name', { name: user.name })}</p>
    </>
  );
}
