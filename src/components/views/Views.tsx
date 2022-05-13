import { Route, Routes } from 'react-router-dom';
import { SignupForm } from '../login/Login';
import Layout from '../main-layout/Main-layout';

export function Views() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
      <Route path="/login" element={<SignupForm />} />
    </Routes>
  );
}
