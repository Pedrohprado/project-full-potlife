export const API_URL_CATALIZADOR = import.meta.env.VITE_BASE_URL_CONFIRM_CATALI;

// 'http://localhost:3333/potlife'

export const API_URL_ORV = import.meta.env.VITE_BASE_URL_ORV;
// 'https://api-pintura-comun.onrender.com/condicao'

export function CONFIRM_CATALIZADOR(body) {
  return {
    url: API_URL_CATALIZADOR,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_CONDIT_ORV() {
  return {
    url: API_URL_ORV,
    options: {
      method: 'GET',
    },
  };
}
