export const API_URL_POST = import.meta.env.VITE_BASE_URL_API_URL_POST;

// 'http://localhost:3333/potlife';

export const API_URL_ORV = import.meta.env.VITE_BASE_URL_ORV;
// 'https://api-pintura-comun.onrender.com/condicao'

export function POST_DATAS(body) {
  return {
    url: API_URL_POST,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PUT_STATUS(body) {
  return {
    url: 'http://localhost:4041/api/status',
    options: {
      method: 'PUT',
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
