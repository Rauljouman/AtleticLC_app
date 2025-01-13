// Importar las funciones necesarias del SDK modular
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbv2pnBrRcAr7_ti20Ii3BPqkc2NkujZs",
  authDomain: "atleticlc2024.firebaseapp.com",
  projectId: "atleticlc2024",
  storageBucket: "atleticlc2024.appspot.com",
  messagingSenderId: "439556996832",
  appId: "1:439556996832:web:ce29a8ededd42c5aa5da85",
  measurementId: "G-B63G5L9STY"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
const auth = getAuth(app); // Autenticación
const firestore = getFirestore(app); // Firestore

export { app, auth, firestore as db};
