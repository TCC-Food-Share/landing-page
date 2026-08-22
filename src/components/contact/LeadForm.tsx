import { useEffect, useState } from 'react';
import type { ComponentProps } from 'react';
import Campo from './Campo';
import SuccessHero from './SuccessHero';
import { formatarCelular } from '../../lib/celular';
import { enviarLead } from '../../lib/leads';
import { MENSAGENS, validarLead } from '../../lib/validacao';
import { classeCampo } from '../../lib/estilos';
import type { Lead, PerfilLead } from '../../lib/types';

const LEAD_VAZIO: Lead = {
  nome: '',
  celular: '',
  perfil: '',
  cidade: '',
  mensagem: '',
};

export default function LeadForm() {
  const [lead, setLead] = useState<Lead>(LEAD_VAZIO);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (!enviado) return;
    document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [enviado]);

  const atualizar = (campo: keyof Lead, valor: string) => {
    setLead((atual) => ({ ...atual, [campo]: valor }));
  };

  const aoEnviar: ComponentProps<'form'>['onSubmit'] = async (evento) => {
    evento.preventDefault();
    if (enviando) return;

    const erroValidacao = validarLead(lead);
    if (erroValidacao) {
      setErro(erroValidacao);
      return;
    }

    setErro(null);
    setEnviando(true);

    try {
      await enviarLead(lead);
    } catch {
      setEnviando(false);
      setErro(MENSAGENS.falhaEnvio);
      return;
    }

    setEnviado(true);
  };

  if (enviado) return <SuccessHero />;

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-3xl text-slate-900 mb-3 dark:text-[#fafafa]">
          Fale com a gente
        </h2>
        <p className="text-slate-500 dark:text-[#a3a3a3]">
          Deixe seus dados e entramos em contato para ativar seu cadastro.
        </p>
      </div>

      <form className="grid sm:grid-cols-2 gap-5" onSubmit={aoEnviar} noValidate>
        <Campo id="nome" rotulo="Nome">
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome"
            className={classeCampo}
            value={lead.nome}
            onChange={(evento) => atualizar('nome', evento.target.value)}
          />
        </Campo>

        <Campo id="celular" rotulo="Celular">
          <input
            id="celular"
            name="celular"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(11) 98765-4321"
            className={classeCampo}
            value={lead.celular}
            onChange={(evento) => atualizar('celular', formatarCelular(evento.target.value))}
          />
        </Campo>

        <Campo id="perfil" rotulo="Sou">
          <select
            id="perfil"
            name="perfil"
            className={classeCampo}
            value={lead.perfil}
            onChange={(evento) => atualizar('perfil', evento.target.value as PerfilLead)}
          >
            <option value="">Selecione</option>
            <option value="estabelecimento">Estabelecimento</option>
            <option value="entidade">Entidade beneficiária</option>
          </select>
        </Campo>

        <Campo id="cidade" rotulo="Cidade">
          <input
            id="cidade"
            name="cidade"
            type="text"
            placeholder="Sua cidade"
            className={classeCampo}
            value={lead.cidade}
            onChange={(evento) => atualizar('cidade', evento.target.value)}
          />
        </Campo>

        <Campo
          id="mensagem"
          larguraTotal
          rotulo={
            <>
              Mensagem <span className="text-slate-400 font-normal dark:text-[#a3a3a3]">(opcional)</span>
            </>
          }
        >
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            placeholder="Conte um pouco sobre seu estabelecimento ou instituição"
            className={classeCampo}
            value={lead.mensagem}
            onChange={(evento) => atualizar('mensagem', evento.target.value)}
          />
        </Campo>

        {erro && <p className="sm:col-span-2 text-sm text-red-600 dark:text-red-400">{erro}</p>}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed dark:bg-[#1d4ed8] dark:hover:bg-[#1a3fb8]"
          >
            {enviando ? 'Enviando...' : 'Quero saber mais'}
          </button>
        </div>
      </form>
    </>
  );
}
