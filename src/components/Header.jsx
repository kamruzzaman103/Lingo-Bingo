// // src/components/Header.jsx
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Header = () => {
//   const { user, logout } = useAuth();

//   return (
//     <header className="bg-white shadow p-4 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold text-blue-600">VocabApp</Link>
//       <nav className="flex space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/start-learning">Start Learning</Link>
//         <Link to="/tutorials">Tutorials</Link>
//         <Link to="/about-us">About Us</Link>
//         {user && <Link to="/my-profile">My Profile</Link>}
//       </nav>
//       <div className="flex items-center space-x-4">
//         {user ? (
//           <>
//             <img src={user.photoURL}  alt="Profile" className="w-8 h-8 rounded-full" />
//             <button onClick={logout} className="text-red-500">Logout</button>
//           </>
//         ) : (
//           <Link to="/login" className="text-blue-600">Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">VocabApp</Link>
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/start-learning">Start Learning</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/about-us">About Us</Link>
        {user && <Link to="/my-profile">My Profile</Link>}
      </nav>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <img 
              src={user.photoURL}  
              alt="Profile" 
              className="w-8 h-8 rounded-full" 
              title={user.displayName} // Tooltip on hover with username
            />
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-blue-600">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
