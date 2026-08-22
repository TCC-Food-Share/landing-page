import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandMark from '../shared/BrandMark';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import ThemeToggleButton from './ThemeToggleButton';
import { alternarTema, temaEscuroAtivo } from '../../lib/theme';
import type { LinkNavegacao } from '../../lib/types';

interface Props {
  links: LinkNavegacao[];
}

export default function Header({ links }: Props) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [escuro, setEscuro] = useState(false);

  useEffect(() => {
    setEscuro(temaEscuroAtivo());
  }, []);

  useEffect(() => {
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setMenuAberto(false);
    };

    const consulta = window.matchMedia('(min-width: 768px)');
    const aoMudarLargura = (evento: MediaQueryListEvent) => {
      if (evento.matches) setMenuAberto(false);
    };

    document.addEventListener('keydown', aoTeclar);
    consulta.addEventListener('change', aoMudarLargura);

    return () => {
      document.removeEventListener('keydown', aoTeclar);
      consulta.removeEventListener('change', aoMudarLargura);
    };
  }, []);

  const aoAlternarTema = () => setEscuro(alternarTema());

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100 dark:bg-[#0a0a0a]/90 dark:border-[#ffffff1a]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2">
          <BrandMark classeNome="hidden sm:block" />
        </a>

        <DesktopNav links={links} />

        <div className="flex items-center gap-3">
          <ThemeToggleButton onAlternar={aoAlternarTema} />

          <a
            href="#"
            className="border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors dark:border-[#ffffff1a] sm:inline text-sm text-slate-600 dark:text-[#a3a3a3] dark:hover:bg-[#1a1a1a]"
          >
            Entrar
          </a>

          <a
            href="#cadastro"
            className="hidden md:inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors dark:bg-[#1d4ed8] dark:hover:bg-[#1a3fb8]"
          >
            Cadastre-se
          </a>

          <button
            type="button"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobileMenu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((aberto) => !aberto)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 dark:text-[#a3a3a3] dark:hover:bg-[#1a1a1a] transition-colors"
          >
            {menuAberto ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <MobileMenu
        aberto={menuAberto}
        links={links}
        escuro={escuro}
        onAlternarTema={aoAlternarTema}
        onNavegar={() => setMenuAberto(false)}
      />
    </header>
  );
}
