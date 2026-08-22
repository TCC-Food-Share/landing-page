import axios from 'axios';
import { apenasDigitos } from './celular';
import type { Lead } from './types';

const WEBHOOK_URL = import.meta.env.PUBLIC_LEAD_WEBHOOK_URL;

export async function enviarLead(lead: Lead): Promise<void> {
  if (!WEBHOOK_URL) {
    throw new Error('PUBLIC_LEAD_WEBHOOK_URL não configurada');
  }

  await axios.post(WEBHOOK_URL, {
    nome: lead.nome.trim(),
    celular: apenasDigitos(lead.celular),
    perfil: lead.perfil,
    cidade: lead.cidade.trim(),
    mensagem: lead.mensagem.trim(),
  });
}
