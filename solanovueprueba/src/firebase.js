import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1C26p6H4khdQFA_PXAexBEhzT_heyT7U",
  authDomain: "evasolano2025.firebaseapp.com",
  projectId: "evasolano2025",
  storageBucket: "evasolano2025.firebasestorage.app",
  messagingSenderId: "688759361926",
  appId: "1:688759361926:web:c413b87c7bb505da6adc07"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };