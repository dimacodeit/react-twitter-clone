import ProtectedRoute from '@Components/protected-route/Protected-route';
import { useAppSelector } from '@Hooks/redux';
import { Route, Routes } from 'react-router-dom';
import SignupForm from '../login/Login';
import Layout from './layout/Layout';

export function Views() {
  const { login } = useAppSelector((state) => state.authReducer);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute canLoad={!!login} redirectTo="login">
            <Layout />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<SignupForm />} />
    </Routes>
  );
}
