// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDXb_VL901TfAEdd7YL_WbUDK1-vEGlMjE",
    authDomain: "lingo-bingo-577fe.firebaseapp.com",
    projectId: "lingo-bingo-577fe",
    storageBucket: "lingo-bingo-577fe.firebasestorage.app",
    messagingSenderId: "429458304879",
    appId: "1:429458304879:web:5fd9cd3e121d730aa2429a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

export { auth, loginWithGoogle, logout };
