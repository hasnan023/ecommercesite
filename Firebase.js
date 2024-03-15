import firebase from 'firebase/compat/app';
import 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpZ6iBvwdjL7goa1MCY8Ttya_q2cc4tJA",
  authDomain: "ecomercerec.firebaseapp.com",
  projectId: "ecomercerec",
  storageBucket: "ecomercerec.appspot.com",
  messagingSenderId: "760716520650",
  appId: "1:760716520650:web:c9b2f3776006fbcd201833",
  measurementId: "G-BX9VQ8QGKW"
};

// Initialize Firebase
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
