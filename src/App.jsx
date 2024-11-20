import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LetsLearn from './components/LetsLearn';
import Lesson from './components/Lesson';
import Tutorial from './components/Tutorial';
import MyProfile from './components/MyProfile';
import UpdateProfile from './components/UpdateProfile';
// import NotFound from './components/NotFound';
import ForgotPassword from './components/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/start-learning" element={<LetsLearn />} />
          <Route path="/lessons/:lesson_no" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
          <Route path="/tutorials" element={<ProtectedRoute><Tutorial /></ProtectedRoute>} />
          <Route path="/my-profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
          <Route path="/update-profile" element={<ProtectedRoute ><UpdateProfile /></ProtectedRoute>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
