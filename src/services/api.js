const API_URL = process.env.REACT_APP_BACKEND_API;
const prefix = 'api/1.0.0';

export const dockAccount = async (userId, seedPhrase, googleAuth) => {
  const newAuthRes = await googleAuth.currentUser.get().reloadAuthResponse();
  const url = `${API_URL}/${prefix}/accounts`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${newAuthRes.id_token}`,
    },
    body: JSON.stringify({
      userId,
      seedPhrase,
    }),
  });

  return await response.json();
};

export const unDockAccount = async (accountId, googleAuth) => {
  const newAuthRes = await googleAuth.currentUser.get().reloadAuthResponse();
  const url = `${API_URL}/${prefix}/accounts/${accountId}`;
  return await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${newAuthRes.id_token}`,
    },
  });
};

export const getAccounts = async (userId, googleAuth) => {
  const newAuthRes = await googleAuth.currentUser.get().reloadAuthResponse();
  const condition = encodeURIComponent(JSON.stringify({ userId }));
  const url = `${API_URL}/${prefix}/accounts?conditions=${condition}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${newAuthRes.id_token}`,
    },
  });

  return await response.json();
};
