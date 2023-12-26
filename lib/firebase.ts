import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB96yavxC9CO_nceZAF4krjhzF9umj8ykA",
  authDomain: "challenge-3aff8.firebaseapp.com",
  projectId: "challenge-3aff8",
  storageBucket: "challenge-3aff8.appspot.com",
  messagingSenderId: "825984596086",
  appId: "1:825984596086:web:2cf333dee713ca5edfc757",
  measurementId: "G-E50LHB79CC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
