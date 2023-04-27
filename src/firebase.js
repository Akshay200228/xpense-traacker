import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDqIY5Z2EDnwxIFnzn20B1p7rtzeiEYhlY",
  authDomain: "cryptopad-47bc9.firebaseapp.com",
  projectId: "cryptopad-47bc9",
  storageBucket: "cryptopad-47bc9.appspot.com",
  messagingSenderId: "188446201730",
  appId: "1:188446201730:web:141eee58415d895e33e19b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export{auth, provider};
export const firebaseApp = initializeApp(firebaseConfig);
