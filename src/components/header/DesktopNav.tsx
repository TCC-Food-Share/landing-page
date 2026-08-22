import type { LinkNavegacao } from '../../lib/types';

interface Props {
  links: LinkNavegacao[];
}

export default function DesktopNav({ links }: Props) {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-[#a3a3a3]">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="hover:text-brand-600 transition-colors">
          {link.rotulo}
        </a>
      ))}
    </nav>
  );
}
