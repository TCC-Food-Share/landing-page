import type { ReactNode } from 'react';
import { classeRotulo } from '../../lib/estilos';

interface Props {
  id: string;
  rotulo: ReactNode;
  larguraTotal?: boolean;
  children: ReactNode;
}

export default function Campo({ id, rotulo, larguraTotal = false, children }: Props) {
  return (
    <div className={larguraTotal ? 'sm:col-span-2' : 'sm:col-span-1'}>
      <label htmlFor={id} className={classeRotulo}>
        {rotulo}
      </label>
      {children}
    </div>
  );
}
