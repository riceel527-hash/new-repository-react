// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth }  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: "AIzaSyA-GJmT_wHST2wO5BcIA2a89b-peCv3F7o",
  authDomain: "new-repository-react.firebaseapp.com",
  projectId: "new-repository-react",
  storageBucket: "new-repository-react.firebasestorage.app",
  messagingSenderId: "410658226201",
  appId: "1:410658226201:web:71d360e908774aca276a88",
  measurementId: "G-Y1YMZ2EV99"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();