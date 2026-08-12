import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';

export const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return;
    }
    if (!user) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, inicia sesión para acceder a la página del carrito.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      navigate('/');
    }
  }, [user, navigate]);
  return children;
};
