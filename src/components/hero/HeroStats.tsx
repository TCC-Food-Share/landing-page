import Contador from './Contador';
import type { Estatistica } from '../../lib/types';

interface Props {
  estatisticas: Estatistica[];
}

export default function HeroStats({ estatisticas }: Props) {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-x-8 gap-y-5 sm:gap-10">
      {estatisticas.map((estatistica) => (
        <div key={estatistica.rotulo} className="min-w-0 md:min-w-[auto]">
          <Contador alvo={estatistica.alvo} />
          <p className="text-brand-200 text-xs mt-1">{estatistica.rotulo}</p>
        </div>
      ))}
    </div>
  );
}
