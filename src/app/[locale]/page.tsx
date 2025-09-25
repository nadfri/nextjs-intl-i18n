import { Locale, useFormatter, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  // Enable static rendering
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('home');

  const format = useFormatter();

  const time = format.dateTime(new Date(), {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <>
      <h1>{t('title')} </h1>

      <h2>{t('description')}</h2>

      <p>{time}</p>
    </>
  );
}
