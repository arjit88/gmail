import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_HmUnp34s_Z6mrZCzrbBCdTmBax5fBUs",
  authDomain: "clone-42724.firebaseapp.com",
  projectId: "clone-42724",
  storageBucket: "clone-42724.appspot.com",
  messagingSenderId: "415275221793",
  appId: "1:415275221793:web:daee7ff749c13442813460",
  measurementId: "G-9NKCV9B31F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
