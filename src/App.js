import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './context/AuthProvider';
import { gapi } from 'gapi-script';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Dock from './pages/Dock';
import UnDock from './pages/UnDock';
import UserAssets from './pages/UserAssets';

const App = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.auth2
        .init({
          clientId: clientId,
          scope: 'email',
        })
        .then(() => {
          const googleAuth = gapi.auth2.getAuthInstance();
          localStorage.setItem(
            'token',
            googleAuth.currentUser.get().getAuthResponse().id_token
          );
        });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserAssets />} />
          <Route path="dock" element={<Dock />} />
          <Route path="undock" element={<UnDock />} />
        </Route>
        <Route path="*" element={() => {}} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
