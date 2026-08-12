import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { DashboardLayout } from '../../dashboard/layouts/DashboardLayout';
import { DashboardPage } from '../../dashboard/pages/DashboardPage';
import { AddProductPage } from '../../products/AddProductPage';
import { UpdateProductPage } from '../../products/UpdateProductPage';
import { useAuth } from '../../../auth/hooks/useAuth';


export const DashboardRouter = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to='/' />;
  }
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route
            index
            element={<DashboardPage />}
          />
          <Route
            path='products/add-product'
            element={<AddProductPage />}
          />
          <Route
            path='products/update-product/:id'
            element={<UpdateProductPage />}
          />
        </Route>
        <Route
          path='*'
          element={<Navigate to='/dashboard/' />}
        />
      </Routes>
    </>
  );
};
