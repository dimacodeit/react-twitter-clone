import ProtectedRoute from '@Components/protected-route/Protected-route';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { db } from '../../firebase-config';
import { useAppSelector } from '../../hooks/redux';
import { SignupForm } from '../login/Login';
import Layout from './layout/Layout';

export function Views() {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);

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

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute canLoad={isLoggedIn} redirectTo="login">
            <Layout />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<SignupForm />} />
    </Routes>
  );
}
