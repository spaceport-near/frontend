const API_URL = process.env.REACT_APP_BACKEND_API;
const prefix = 'api/1.0.0';

const timeToRefresh = 600000;

export const refreshTokenSetup = (googleAuth) => {
  const refreshToken = async () => {
    const newAuthRes = await googleAuth.currentUser.get().reloadAuthResponse();
    localStorage.setItem('token', newAuthRes.id_token);
    setTimeout(refreshToken, timeToRefresh);
  };
  setTimeout(refreshToken, timeToRefresh);
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

export const getAccounts = async (userId) => {
  const condition = encodeURIComponent(JSON.stringify({userId}));
  const url = `${API_URL}/${prefix}/accounts?conditions=${condition}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};
