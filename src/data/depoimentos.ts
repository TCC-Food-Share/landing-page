import type { Depoimento } from '../lib/types';

export const depoimentos: Depoimento[] = [
  {
    citacao:
      '"Antes, o excedente ia direto pro lixo no fim do dia. Com o Food Share, cadastro em minutos e sei exatamente quem retirou sem depender de sorte ou de combinar por fora."',
    autor: 'Roberto Cardoso',
    papel: 'Supermercado de bairro',
    iniciais: 'RC',
    temaAvatar: 'brand',
    atraso: 0,
  },
  {
    citacao:
      '"A gente dependia de sorte pra conseguir doação, um telefonema aqui, outro ali. Com o Food Share, vejo o que está disponível e já solicito na hora. Mudou a rotina do abrigo."',
    autor: 'Sandra Oliveira',
    papel: 'Abrigo social',
    iniciais: 'SO',
    temaAvatar: 'leaf',
    atraso: 120,
  },
];
