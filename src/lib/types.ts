export type PerfilLead = 'estabelecimento' | 'entidade';

export interface Lead {
  nome: string;
  celular: string;
  perfil: PerfilLead | '';
  cidade: string;
  mensagem: string;
}

export interface LinkNavegacao {
  href: string;
  rotulo: string;
}

export interface Beneficio {
  icone: 'gift' | 'clock' | 'recycle' | 'users';
  titulo: string;
  descricao: string;
  temaIcone: 'brand' | 'leaf' | 'amber';
  atraso: number;
}

export interface Etapa {
  numero: number;
  titulo: string;
  descricao: string;
  imagem: string;
  alt: string;
  largura: number;
  altura: number;
  lado: 'esquerda' | 'direita';
}

export interface Depoimento {
  citacao: string;
  autor: string;
  papel: string;
  iniciais: string;
  temaAvatar: 'brand' | 'leaf';
  atraso: number;
}

export interface Duvida {
  pergunta: string;
  resposta: string;
}

export interface Estatistica {
  alvo: number;
  rotulo: string;
}
