import { Moon, Sun } from 'lucide-react';

interface Props {
  onAlternar: () => void;
}

export default function ThemeToggleButton({ onAlternar }: Props) {
  return (
    <button
      type="button"
      aria-label="Alternar tema claro/escuro"
      onClick={onAlternar}
      className="w-9 h-9 rounded-lg hidden sm:flex items-center justify-center text-slate-600 hover:bg-slate-100 dark:text-[#a3a3a3] dark:hover:bg-[#1a1a1a] transition-colors"
    >
      <Sun className="w-[18px] h-[18px] hidden dark:block" />
      <Moon className="w-[18px] h-[18px] block dark:hidden" />
    </button>
  );
}
