// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAew8JwBO1wh7y2QwhXzvZp2M2dg_q9KX0",
  authDomain: "gruascarvajal-68635.firebaseapp.com",
  projectId: "gruascarvajal-68635",
  storageBucket: "gruascarvajal-68635.appspot.com",
  messagingSenderId: "855955974178",
  appId: "1:855955974178:web:17a6666d912b27c0bc427b",
  measurementId: "G-6X333ZHLNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);