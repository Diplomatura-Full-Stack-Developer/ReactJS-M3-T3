import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '../../auth/pages/LoginPage';
import { RegisterPage } from '../../auth/pages/RegisterPage';

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            index
            element={<LoginPage />}
          />
          <Route
            path='register'
            element={<RegisterPage />}
          />
        <Route
          path='*'
          element={<Navigate to='/auth/' />}
          />
        </Route>
      </Routes>
    </>
  );
};
