
// import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const Header = () => {
//   const { user, logout } = useAuth();

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <div className="flex items-center gap-4">
//           <img src="/logo.png" alt="Lingo Bingo Logo" className="h-10" />
//           <h1 className="text-xl font-bold">Lingo Bingo</h1>
//         </div>

//         <nav className="flex items-center gap-6">
//           <NavLink to="/" className="hover:text-blue-300">
//             Home
//           </NavLink>
//           <NavLink to="/start-learning" className="hover:text-blue-300">
//             Start Learning
//           </NavLink>
//           <NavLink to="/tutorials" className="hover:text-blue-300">
//             Tutorials
//           </NavLink>
//           <NavLink to="/about-us" className="hover:text-blue-300">
//             About Us
//           </NavLink>
//           {user && (
//             <NavLink to="/my-profile" className="hover:text-blue-300">
//               My Profile
//             </NavLink>
//           )}
//         </nav>

//         <div className="flex items-center gap-4">
//           {user ? (
//             <>
//               <img
//                 src={user.photoURL}
//                 alt={user.displayName}
//                 className="h-8 w-8 rounded-full"
//               />
//               <button
//                 onClick={logout}
//                 className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// src/components/Header.jsx

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
            <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
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
