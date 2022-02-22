import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCMNvKN0hfNGY2a20Zy-c7mz0VlVar-HE",
  authDomain: "react-course-fh.firebaseapp.com",
  databaseURL:
    "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-course-fh",
  storageBucket: "react-course-fh.appspot.com",
  messagingSenderId: "367771070231",
  appId: "1:367771070231:web:97bdbb2a9ac69a39735152",
  measurementId: "G-NKRYS2H8FR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
