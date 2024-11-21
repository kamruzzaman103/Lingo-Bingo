import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);

      if (!user) {
        navigate('/my-profile');
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
      <div className="profile-container p-4 py-6 sm:max-w-sm m-auto text-center mt-20 border-2 border-solid rounded-xl max-w-[400px]">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName}</h1>
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="User Avatar"
          className="w-32 mx-auto h-32 rounded-full mb-4 "
        />
        <p>Email: {user.email}</p>
        <div className='mt-5'>
          <button
            onClick={handleLogout}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          >
            Logout
          </button>
          <Link to="/update-profile">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Update Your Profile
            </button>
          </Link>
        </div>

      </div>
    )
  );
};

export default MyProfile;






