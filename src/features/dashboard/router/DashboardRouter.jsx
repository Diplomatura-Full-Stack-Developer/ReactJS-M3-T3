import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../../dashboard/layouts/DashboardLayout';
import { DashboardPage } from '../../dashboard/pages/DashboardPage';
import { AddProductPage } from '../../products/AddProductPage';
import { UpdateProductPage } from '../../products/UpdateProductPage';

export const DashboardRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<DashboardLayout />}>
            <Route
              index
              element={<DashboardPage />}
            />
            <Route
              path='/add-product'
              element={<AddProductPage />}
            />
            <Route
              path='/update-product/:id'
              element={<UpdateProductPage />}
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
