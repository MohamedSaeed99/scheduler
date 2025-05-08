import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import NavigationDrawer from './navigation/NavigationDrawer';
import { Box } from '@mui/material';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenNavigationDrawer = () => setOpen(true);
  const handleCloseNavigationDrawer = () => setOpen(false);

  // If not authenticated, only show the home page
  if (!isAuthenticated) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    );
  }

  // If authenticated, show the full app with navigation
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <Header handleOpenNavigationDrawer={handleOpenNavigationDrawer} />
      <NavigationDrawer open={open} handleCloseDrawer={handleCloseNavigationDrawer} />
      <Box sx={{ 
        flex: 1,
        margin: 0,
        padding: 0,
        width: '100%'
      }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AppRoutes; 