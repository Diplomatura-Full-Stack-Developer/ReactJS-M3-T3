import './styles.css';
import { DashboardRouter } from './features/dashboard/router/DashboardRouter';
// import { AppRouter } from './shell/router/AppRouter';
export const App = () => {
  // return <AppRouter />;
  return <DashboardRouter />;
};
