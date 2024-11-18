// src/components/PrivateRoute.jsx

import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route 
      {...rest} 
      element={user ? element : <Navigate to="/login" />} 
    />
  );
};

export default PrivateRoute;
