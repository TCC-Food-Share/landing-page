import { apenasDigitos, celularValido } from './celular';
import type { Lead } from './types';

export const MENSAGENS = {
  camposObrigatorios: 'Preencha nome, celular, perfil e cidade antes de enviar.',
  celularInvalido: 'Digite um celular válido com DDD, no formato (11) 98765-4321.',
  falhaEnvio: 'Não conseguimos enviar seus dados agora. Tente novamente em instantes.',
} as const;

export function validarLead(lead: Lead): string | null {
  const celular = apenasDigitos(lead.celular);

  if (!lead.nome.trim() || !celular || !lead.perfil || !lead.cidade.trim()) {
    return MENSAGENS.camposObrigatorios;
  }

  if (!celularValido(celular)) {
    return MENSAGENS.celularInvalido;
  }

  return null;
}
