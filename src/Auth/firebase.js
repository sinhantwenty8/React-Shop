// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.xgoogle.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwwLsa1-KtyrFQkv0XSojSvWvEHczdbzs",
  authDomain: "dejavu-87dd5.firebaseapp.com",
  projectId: "dejavu-87dd5",
  storageBucket: "dejavu-87dd5.appspot.com",
  messagingSenderId: "221040563544",
  appId: "1:221040563544:web:63912a6b0a56db6921c12d",
  measurementId: "G-7LV70BT2RZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app




