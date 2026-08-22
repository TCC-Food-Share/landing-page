import ThemeSwitchRow from './ThemeSwitchRow';
import type { LinkNavegacao } from '../../lib/types';

interface Props {
  aberto: boolean;
  links: LinkNavegacao[];
  escuro: boolean;
  onAlternarTema: () => void;
  onNavegar: () => void;
}

export default function MobileMenu({ aberto, links, escuro, onAlternarTema, onNavegar }: Props) {
  return (
    <div id="mobileMenu" className={`mobile-menu md:hidden bg-white dark:bg-[#0a0a0a]${aberto ? ' is-open' : ''}`}>
      <nav className="max-w-6xl mx-auto px-6 py-3 flex flex-col text-sm text-slate-600 border-t border-slate-100 dark:border-[#ffffff1a] dark:text-[#a3a3a3]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavegar}
            className="py-2.5 hover:text-brand-600 transition-colors"
          >
            {link.rotulo}
          </a>
        ))}

        <ThemeSwitchRow escuro={escuro} onAlternar={onAlternarTema} />

        <a
          href="#cadastro"
          onClick={onNavegar}
          className="mt-3 mb-1 bg-brand-600 hover:bg-brand-700 text-white text-center font-medium px-4 py-2.5 rounded-lg transition-colors dark:bg-[#1d4ed8] dark:hover:bg-[#1a3fb8]"
        >
          Cadastre-se
        </a>
      </nav>
    </div>
  );
}
