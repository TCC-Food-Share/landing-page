interface Props {
  escuro: boolean;
  onAlternar: () => void;
}

export default function ThemeSwitchRow({ escuro, onAlternar }: Props) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={escuro}
      onClick={onAlternar}
      className="sm:hidden flex items-center justify-between gap-3 py-2.5"
    >
      <span className="flex items-center gap-2">Modo escuro</span>
      <span className="relative w-10 h-6 rounded-full bg-slate-200 transition-colors dark:bg-[#1d4ed8]">
        <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform dark:translate-x-4" />
      </span>
    </button>
  );
}
