const APP_URL = import.meta.env.PUBLIC_APP_URL || 'https://app.foodshare.com.br';

export const urlLogin = `${APP_URL}/login`;
export const urlCadastro = `${APP_URL}/cadastro`;

export const urlCadastroEstabelecimento = `${urlCadastro}?profile=establishment`;
export const urlCadastroEntidade = `${urlCadastro}?profile=beneficiary`;
