import Contador from './Contador';
import type { Estatistica } from '../../lib/types';

interface Props {
  estatisticas: Estatistica[];
}

export default function HeroStats({ estatisticas }: Props) {
  return (
    <div className="gap-10 justify-center md:justify-start flex">
      {estatisticas.map((estatistica) => (
        <div key={estatistica.rotulo}>
          <Contador alvo={estatistica.alvo} />
          <p className="text-brand-200 text-xs mt-1">{estatistica.rotulo}</p>
        </div>
      ))}
    </div>
  );
}
