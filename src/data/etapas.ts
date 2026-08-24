import type { Etapa } from '../lib/types';

export const etapas: Etapa[] = [
  {
    numero: 1,
    titulo: 'Cadastro simples',
    descricao: 'O estabelecimento informa CNPJ, endereço e cria o perfil em quatro passos curtos.',
    imagem: '/img/tela_cadastro_2.jpg',
    alt: 'Tela de cadastro do estabelecimento',
    largura: 1280,
    altura: 780,
    lado: 'direita',
  },
  {
    numero: 2,
    titulo: 'Alimento no ar',
    descricao: 'Nome, categoria, quantidade e validade, e o alimento já aparece disponível para as entidades.',
    imagem: '/img/tela_alimentos_estabelecimento.jpg',
    alt: 'Tela de listagem de alimentos do estabelecimento',
    largura: 1440,
    altura: 809,
    lado: 'esquerda',
  },
  {
    numero: 3,
    titulo: 'Pedido e retirada',
    descricao: 'A entidade solicita, o estabelecimento aceita, e os dois acompanham o status até a confirmação.',
    imagem: '/img/tela_detalhe_pedido.jpg',
    alt: 'Tela de detalhe do pedido',
    largura: 1440,
    altura: 733,
    lado: 'direita',
  },
];
