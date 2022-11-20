import React, { createContext, useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [googleAuth, setGoogleAuth] = useState(null);

  useEffect(() => {
    const initClient = () => {
      gapi.auth2
        .init({
          clientId: clientId,
          scope: 'email',
        })
        .then(() => {
          const googleAuth = gapi.auth2.getAuthInstance();
          setProfile({
            googleId: googleAuth.currentUser.get().getBasicProfile().getId(),
            email: googleAuth.currentUser.get().getBasicProfile().getEmail(),
          });
          const token = googleAuth.currentUser.get().getAuthResponse().id_token;
          setToken(token);
          setGoogleAuth(googleAuth);
          navigate('/dashboard');
        });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const handleLogin = (res) => {
    const { tokenId } = res;
    setProfile(res.profileObj);
    setToken(tokenId);
    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => setToken(null);

  const value = {
    token,
    profile,
    googleAuth,
    onSuccess: handleLogin,
    onFailure: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};
