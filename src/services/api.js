const API_URL = process.env.REACT_APP_BACKEND_API;
const prefix = 'api/1.0.0';

const userTokenId = localStorage.getItem('token');

export const dockAccount = async (userId, seedPhrase) => {
  const url = `${API_URL}/${prefix}/accounts`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      userId,
      seedPhrase,
    }),
  });

  return await response.json();
};

export const unDockAccount = async (accountId) => {
  const url = `${API_URL}/${prefix}/accounts/${accountId}`;
  return await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const getAccount = async (accountId) => {
  const url = `${API_URL}/${prefix}/accounts/${accountId}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export const getAccounts = async () => {
  const url = `${API_URL}/${prefix}/accounts`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};
