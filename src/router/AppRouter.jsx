import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainRouter } from '../shell/router/MainRouter';
import { DashboardRouter } from '../features/dashboard/router/DashboardRouter';
import { Navigate } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/*'
            element={<MainRouter />}
          />
          <Route
            path='/dashboard/*'
            element={<DashboardRouter />}
          />
          <Route
            path='*'
            element={<Navigate to='/*' />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
