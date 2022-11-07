import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB4Lk2HuAuMZZa1bIESXO8evO9tBaO65Lo",
  authDomain: "fir-auth-86618.firebaseapp.com",
  projectId: "fir-auth-86618",
  storageBucket: "fir-auth-86618.appspot.com",
  messagingSenderId: "558922775099",
  appId: "1:558922775099:web:a4a24d551a4f185df37a1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
