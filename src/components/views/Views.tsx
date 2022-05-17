import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { SignupForm } from '../login/Login';
import Layout from '../main-layout/Main-layout';

export function Views() {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

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
