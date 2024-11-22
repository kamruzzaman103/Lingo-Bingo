import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();


  if (loading) {
    return <div className="flex items-center justify-center h-screen">
           <span className="loading loading-ring loading-lg"></span>
    </div>
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
