import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Contact } from '../pages/Contact';
import { Product } from '../pages/Product';
import { Cart } from '../pages/ui/Cart';
import { ProtectedRoutes } from '../pages/ProtectedRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';


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
              element={<Contact/>}
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
