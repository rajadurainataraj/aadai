// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR8eEJTLyWtKh-spEKWRASUjWlnVRl0ow",
  authDomain: "test-dc8b9.firebaseapp.com",
  projectId: "test-dc8b9",
  storageBucket: "test-dc8b9.appspot.com",
  messagingSenderId: "219877297341",
  appId: "1:219877297341:web:0380949c7554d3213dbbd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//communicate with firebase and return something
export const db = getFirestore(app);
export const storage = getStorage(app);
