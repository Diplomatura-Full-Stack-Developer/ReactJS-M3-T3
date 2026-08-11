import './styles.css';
import { AppRouter } from '../src/router/AppRouter';
import { AuthProvider } from './auth/provider/AuthProvider';


export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

