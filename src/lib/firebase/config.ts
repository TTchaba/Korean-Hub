import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUp22a1hYyoBR1Kp3ukoGjkZf6PuykBeQ",
  authDomain: "korean-hub-a65d8.firebaseapp.com",
  projectId: "korean-hub-a65d8",
  storageBucket: "korean-hub-a65d8.firebasestorage.app",
  messagingSenderId: "105432128813",
  appId: "1:105432128813:web:4dd2fe99a01658a0f247a4",
  measurementId: "G-G66JMVQ5S8",
};

const app = initializeApp(firebaseConfig);

export async function getFirebaseAnalytics() {
  if (await isSupported()) {
    return getAnalytics(app);
  }

  return null;
}