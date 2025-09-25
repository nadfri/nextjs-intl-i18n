'use client';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Locale, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ToggleLocale() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locales = routing.locales;
  const currentLocale = useLocale();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as Locale;
    const queryString = searchParams.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace({ pathname: newUrl }, { locale: selectedLocale });
    //router.refresh(); /* Optional: Refresh the page to load locale-specific data */
  };

  return (
    <select onChange={handleLocaleChange} value={currentLocale}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

/* Wrapper component to use Suspense cause useSearchParams */
export function ToggleLocalSuspense() {
  return (
    <Suspense fallback='Loading...'>
      <ToggleLocale />
    </Suspense>
  );
}
