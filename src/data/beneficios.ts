import type { Beneficio } from '../lib/types';

export const beneficios: Beneficio[] = [
  {
    icone: 'gift',
    titulo: 'Gratuito',
    descricao: 'Sem taxa de cadastro ou de uso, para estabelecimentos e entidades.',
    temaIcone: 'brand',
    atraso: 0,
  },
  {
    icone: 'clock',
    titulo: 'Rápido',
    descricao: 'Cadastro de alimento em menos de 1 minuto, direto do celular.',
    temaIcone: 'brand',
    atraso: 100,
  },
  {
    icone: 'recycle',
    titulo: 'Reduz desperdício',
    descricao: 'O excedente vira doação registrada, em vez de ir para o lixo.',
    temaIcone: 'leaf',
    atraso: 200,
  },
  {
    icone: 'users',
    titulo: 'Fortalece comunidades',
    descricao: 'Conecta negócios locais a entidades sociais da própria região.',
    temaIcone: 'amber',
    atraso: 300,
  },
];
