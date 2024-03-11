import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4KOr162vSmzU4DNHpGf_hd3786JKA0LE",
  authDomain: "neoleads-application.firebaseapp.com",
  databaseURL: "https://neoleads-application-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neoleads-application",
  storageBucket: "neoleads-application.appspot.com",
  messagingSenderId: "410222550314",
  appId: "1:410222550314:web:29a7b208e2135ce9149253",
  measurementId: "G-791BFKMGBS",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
const storage = getStorage(app);
export { firestore, app, storage };
