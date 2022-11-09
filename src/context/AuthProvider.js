import * as React from 'react';
import {
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = React.useState(true);
  //const [profile, setProfile] = React.useState(null);

  const handleLogin = (res) => {
    console.log('res from google', res);
    const { tokenId } = res;
    setToken('token');
    //setProfile(profileObj);

    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    //profile,
    onSuccess: handleLogin,
    onFailure: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
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
