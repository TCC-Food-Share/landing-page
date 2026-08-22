const CODIGO_PAIS = '55';
const TOTAL_DIGITOS = 11;
const CELULAR_VALIDO = /^[1-9][1-9]9\d{8}$/;

export function apenasDigitos(valor: string): string {
  let digitos = valor.replace(/\D/g, '');

  if (digitos.length > TOTAL_DIGITOS && digitos.slice(0, 2) === CODIGO_PAIS) {
    digitos = digitos.slice(2);
  }

  return digitos.slice(0, TOTAL_DIGITOS);
}

export function formatarCelular(valor: string): string {
  const digitos = apenasDigitos(valor);

  if (!digitos) return '';
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;

  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

export function celularValido(valor: string): boolean {
  return CELULAR_VALIDO.test(apenasDigitos(valor));
}
