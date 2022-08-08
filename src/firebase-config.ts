import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: 'react-twitter-clone-bd306.firebaseapp.com',
  projectId: 'react-twitter-clone-bd306',
  storageBucket: 'react-twitter-clone-bd306.appspot.com',
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
