// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDdsBNGEe2PXGinO5FP2SY1DQQ1AQjCkkM",
  authDomain: "logo-4e9e4.firebaseapp.com",
  projectId: "logo-4e9e4",
  storageBucket: "logo-4e9e4.appspot.com",
  messagingSenderId: "588954829210",
  appId: "1:588954829210:web:51e767e2661babac7f7a23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
