// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL6YXJx9VWWfURBhOeSPxsRAibV8Q0o9s",
  authDomain: "macsmachete.firebaseapp.com",
  projectId: "macsmachete",
  storageBucket: "macsmachete.appspot.com",
  messagingSenderId: "832110345217",
  appId: "1:832110345217:web:8887f239ce025cdef65400",
  measurementId: "G-VQMQHV9VKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, auth, storage };
