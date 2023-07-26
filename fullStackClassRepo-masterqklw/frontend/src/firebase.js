// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ6QGOhq8pEqA6SBb9d-1jm49DmB78B4s",
  authDomain: "my-frist-project-e9e48.firebaseapp.com",
  projectId: "my-frist-project-e9e48",
  storageBucket: "my-frist-project-e9e48.appspot.com",
  messagingSenderId: "495042417595",
  appId: "1:495042417595:web:40c261f08429fb27cdaa9e",
  measurementId: "G-MVWZCDDJC0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
