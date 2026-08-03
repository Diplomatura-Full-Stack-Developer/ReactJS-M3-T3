import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export const ProtectedRoutes = ({ children }) => {

  // In a real application, this would be a state that is set by the user's authentication status.
  const isAuthenticated = false;

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, inicia sesión para poder realizar la compra.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  return children;
};

