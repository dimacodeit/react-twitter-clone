import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';
import { useAppSelector } from '../../hooks/redux';
import { SignupForm } from '../login/Login';
import Layout from './layout/Layout';

export function Views() {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const getTweets = async () => {
      const colRef = collection(db, 'tweets');
      const snapshot = await getDocs(colRef);
      const tweets = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(tweets);
    };

    getTweets();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) navigate('/login', { replace: true });
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      {isLoggedIn && <Route path="/*" element={<Layout />} />}
      <Route path="/login" element={<SignupForm />} />
    </Routes>
  );
}
