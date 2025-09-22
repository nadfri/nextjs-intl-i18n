import Link from 'next/link';

export function Header() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Server Page', href: '/server-page' },
    { label: 'Client Page', href: '/client-page' },
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
    </header>
  );
}
