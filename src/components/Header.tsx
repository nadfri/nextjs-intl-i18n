import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ToggleLocalSuspense } from './ToggleLocale';

export function Header() {
  const t = useTranslations('links');

  const links = [
    { label: t('home'), href: '/' },
    { label: t('serverPage'), href: 'server-page' },
    { label: t('clientPage'), href: 'client-page' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <ToggleLocalSuspense />
    </header>
  );
}
