import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from '../../shell/layouts/MainLayout';
import { Contact } from '../../shell/pages/Contact';
import { Cart } from '../../shell/pages/ui/Cart';
import { ProtectedRoutes } from '../../shell/pages/ProtectedRoutes';
import { Home } from '../../shell/pages/Home';
import { About } from '../../shell/pages/About';
import { Product } from '../../shell/pages/Product';

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
              element={<Home />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='/about'
              element={<About />}
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
