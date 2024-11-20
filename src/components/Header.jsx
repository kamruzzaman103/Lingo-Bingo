import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/image/logo.jpg';

const getActiveClass = (isActive) =>
  isActive
    ? 'text-blue-600 underline font-semibold'
    : 'text-black hover:text-blue-500';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="shadow-lg">
      <header className="bg-white py-2 flex justify-between items-center px-4 lg:px-8">
        {/* Mobile Dropdown Menu */}
        <div className="dropdown lg:hidden">
          <button tabIndex="0" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-10 mt-2 w-36 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/start-learning" className={({ isActive }) => getActiveClass(isActive)}>
                Start Learning
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorials" className={({ isActive }) => getActiveClass(isActive)}>
                Tutorials
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => getActiveClass(isActive)}>
                About Us
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/my-profile" className={({ isActive }) => getActiveClass(isActive)}>
                  My Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          <img src={logo} alt="Logo" className="w-28 h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 text-black">
          <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/start-learning" className={({ isActive }) => getActiveClass(isActive)}>
            Start Learning
          </NavLink>
          <NavLink to="/tutorials" className={({ isActive }) => getActiveClass(isActive)}>
            Tutorials
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => getActiveClass(isActive)}>
            About Us
          </NavLink>
          {user && (
            <NavLink to="/my-profile" className={({ isActive }) => getActiveClass(isActive)}>
              My Profile
            </NavLink>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-blue-700"
                title={user.displayName}
              />
              <button
                onClick={logout}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

