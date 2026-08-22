export function animarContador(
  alvo: number,
  duracao: number,
  aoAtualizar: (valor: number) => void,
): () => void {
  let inicio: number | null = null;
  let frame = requestAnimationFrame(function passo(marca: number) {
    if (inicio === null) inicio = marca;

    const progresso = Math.min((marca - inicio) / duracao, 1);
    const suavizado = 1 - Math.pow(1 - progresso, 3);

    if (progresso < 1) {
      aoAtualizar(Math.floor(suavizado * alvo));
      frame = requestAnimationFrame(passo);
      return;
    }

    aoAtualizar(alvo);
  });

  return () => cancelAnimationFrame(frame);
}
