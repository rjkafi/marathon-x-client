// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN_R3AN5_QAlgwby6fdJr42RxdHvOAgIQ",
  authDomain: "marathon-x.firebaseapp.com",
  projectId: "marathon-x",
  storageBucket: "marathon-x.firebasestorage.app",
  messagingSenderId: "170864220928",
  appId: "1:170864220928:web:f775c3b45bf40bcc6231e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;