import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './context/AuthProvider';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Dock from './pages/Dock';
import UnDock from './pages/UnDock';
import UserAssets from './pages/UserAssets';

const App = () => {
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
