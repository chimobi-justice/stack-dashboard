import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';


import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvTBkBzOo1xuMy5NKcfeIBvgrJudeUtHc",
  authDomain: "stack-34661.firebaseapp.com",
  projectId: "stack-34661",
  storageBucket: "stack-34661.appspot.com",
  messagingSenderId: "349009177255",
  appId: "1:349009177255:web:222b6d6eca2ef4f4108982"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);



