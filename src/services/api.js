const API_URL = process.env.REACT_APP_BACKEND_API;
const prefix = 'api/1.0.0';

export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem('token', newAuthRes.id_token);
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};

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
