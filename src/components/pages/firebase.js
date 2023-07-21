// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCslH6suFNvIi0Xvgk-RUPKd8ttQAgT4U",
  authDomain: "verba-volant-db.firebaseapp.com",
  projectId: "verba-volant-db",
  storageBucket: "verba-volant-db.appspot.com",
  messagingSenderId: "227859691815",
  appId: "1:227859691815:web:460106c95a6f7a95941102",
  measurementId: "G-NNS1CBR5BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}