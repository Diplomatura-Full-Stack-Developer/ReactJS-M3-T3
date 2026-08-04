import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from '../../shell/layouts/MainLayout';
import { ContactPage } from '../../shell/pages/ContactPage';
import { Cart } from '../../shell/pages/ui/Cart';
import { ProtectedRoutes } from '../../shell/pages/ProtectedRoutes';
import { HomePage } from '../../shell/pages/HomePage';
import { AboutPage } from '../../shell/pages/AboutPage';
import { Product } from '../../features/products/Product';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<MainLayout />}>
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
              path='/product/:id'
              element={<Product />}
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
      </BrowserRouter>
    </>
  );
};
