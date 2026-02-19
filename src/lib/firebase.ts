import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChijIrRpHwr6NznwHHWhM7pUq9lqYZ2EQ",
  authDomain: "website-91af5.firebaseapp.com",
  projectId: "website-91af5",
  storageBucket: "website-91af5.firebasestorage.app",
  messagingSenderId: "222435511960",
  appId: "1:222435511960:web:7f1dca5fb294d6f0678aed",
  measurementId: "G-F9EXQYJW65"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

let analytics;
// Analytics is only supported in browser environments
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, db, analytics };
