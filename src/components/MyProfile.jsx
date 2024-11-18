// src/components/MyProfile.jsx
import  { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(user);
        
      if (!user) {
        navigate('/login');
      } else {
        setUser(user);
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    user && (
      <div className="profile-container p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName}</h1>
        <img 
          src={user.photoURL || 'https://via.placeholder.com/150'} 
          alt="User Avatar" 
          className="w-32 h-32 rounded-full mb-4" 
        />
        <p>Email: {user.email}</p>
        <button 
          onClick={handleLogout} 
          className="mt-4 bg-red-600 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default MyProfile;
