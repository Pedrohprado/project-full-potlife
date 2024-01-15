export const API_URL_CATALIZADOR = 'http://localhost:3333/potlife';
//   'https://api-pintura-comun.onrender.com/potlife';

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
