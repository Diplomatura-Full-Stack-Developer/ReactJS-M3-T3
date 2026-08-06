import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ContactPage } from '../pages/ContactPage';
import { Cart } from '../pages/ui/Cart';
import { ProtectedRoutes } from '../pages/ProtectedRoutes';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ShowProductPage } from '../../features/products/ShowProductPage';

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='/contact'
            element={<ContactPage />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
          <Route
            path='products/:id'
            element={<ShowProductPage />}
          />
          <Route
            path='/cart'
            element={
              <ProtectedRoutes>
                <Cart />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </>
  );
};
