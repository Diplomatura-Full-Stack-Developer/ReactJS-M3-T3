import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../../dashboard/layouts/DashboardLayout';
import { DashboardPage } from '../../dashboard/pages/DashboardPage';

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
