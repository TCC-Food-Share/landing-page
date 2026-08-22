import { Check } from 'lucide-react';

export default function SuccessHero() {
  return (
    <div className="text-center bg-slate-50 rounded-3xl px-8 py-16 dark:bg-[#1a1a1a] dark:border dark:border-[#262626]">
      <div className="success-check w-20 h-20 mx-auto mb-6 rounded-full bg-leaf-50 text-leaf-600 flex items-center justify-center dark:bg-[#14301a] dark:text-emerald-400">
        <Check className="w-10 h-10" />
      </div>
      <h2 className="font-display font-bold text-3xl text-slate-900 mb-3 dark:text-[#fafafa]">
        Recebemos seus dados!
      </h2>
      <p className="text-slate-500 max-w-sm mx-auto dark:text-[#a3a3a3]">
        Nossa equipe entra em contato pelo celular informado em breve. Obrigado por fazer parte do Food Share.
      </p>
    </div>
  );
}
