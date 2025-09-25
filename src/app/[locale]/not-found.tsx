import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const locale = useLocale();

  setRequestLocale(locale);

  const t = useTranslations('notFound');

  return (
    <>
      <h1>{t('title')}</h1>

      <p>{t('description')}</p>

      <Link href='/'>{t('goHome')}</Link>
    </>
  );
}
