import  { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      navigate('/my-profile');
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="update-profile-container p-4 max-w-lg mx-auto mt-36">
      <h1 className="text-3xl font-bold mb-4 text-center">Update Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="w-full p-2 border rounded"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 w-full font-bold">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
