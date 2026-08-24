import { useEffect, useRef, useState } from 'react';
import { animarContador } from '../../lib/contador';

const DURACAO = 1400;

interface Props {
  alvo: number;
}

export default function Contador({ alvo }: Props) {
  const referencia = useRef<HTMLParagraphElement>(null);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento) return;

    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzirMovimento) {
      setValor(alvo);
      return;
    }

    let cancelar: (() => void) | undefined;

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          observador.unobserve(entrada.target);
          cancelar = animarContador(alvo, DURACAO, setValor);
        });
      },
      { threshold: 0.5 },
    );

    observador.observe(elemento);

    return () => {
      observador.disconnect();
      cancelar?.();
    };
  }, [alvo]);

  return (
    <p ref={referencia} className="font-display font-extrabold text-2xl sm:text-3xl text-white">
      {`${valor.toLocaleString('pt-BR')}+`}
    </p>
  );
}
