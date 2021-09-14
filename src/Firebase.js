import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0GKhJMh_rwg56VcmgoqHNjoYUGo5u5vE",
  authDomain: "ecommerce-ic-2021.firebaseapp.com",
  projectId: "ecommerce-ic-2021",
  storageBucket: "ecommerce-ic-2021.appspot.com",
  messagingSenderId: "335321860911",
  appId: "1:335321860911:web:b94a83ec1b9dcad9d0afda"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}