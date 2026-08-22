const CHAVE = 'theme';

export function temaEscuroAtivo(): boolean {
  return document.documentElement.classList.contains('dark');
}

export function aplicarTema(escuro: boolean): void {
  document.documentElement.classList.toggle('dark', escuro);
  localStorage.setItem(CHAVE, escuro ? 'dark' : 'light');
}

export function alternarTema(): boolean {
  const escuro = !temaEscuroAtivo();
  aplicarTema(escuro);
  return escuro;
}
