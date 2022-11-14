import * as React from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = React.useState(localStorage.getItem('token'));
  const [profile, setProfile] = React.useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  const handleLogin = (res) => {
    const { tokenId } = res;
    localStorage.removeItem('token');
    localStorage.setItem('token', tokenId);
    localStorage.setItem('profile', JSON.stringify(res.profileObj));
    setProfile(res.profileObj);
    setToken('token');

    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    setToken(null);
  };

  const value = {
    token,
    profile,
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
