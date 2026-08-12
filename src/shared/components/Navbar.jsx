import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { FiMenu } from 'react-icons/fi';
import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const navbarLinks = [
  {
    to: '/',
    label: 'Inicio',
  },
  {
    to: '/contact',
    label: 'Contacto',
  },
  {
    to: '/about',
    label: 'Nosotros',
  },
  ...(user ? [
    {
      to: '/dashboard',
      label: 'Admin',
    },
  ] : []),
  ];
  

  const handleLogout = () => {
    logoutUser();
    navigate('/auth');
  };

  return (
    <div className='flex justify-between items-center'>
      <nav className='text-accent-700 p-4 text-base font-bold text-shadow-lg hidden md:block'>
        <ul className='flex justify-between items-center gap-4 font-bold'>
          {navbarLinks.map((link) => (
            <li
              key={link.to}
              className='hover:text-accent-500 transition-colors duration-300'>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {user ? (
        <Link
          onClick={handleLogout}
          className='bg-primary-500 w-16 md:w-24 text-white text-center font-bold text-shadow-lg text-xs rounded-md p-2 m-2 hover:bg-primary-600 transition-colors duration-300 cursor-pointer'>
          Cerrar sesión
        </Link>
      ) : (
      <Link
        to='/auth'
        className='bg-primary-500 w-16 md:w-24 text-white text-center font-bold text-shadow-lg text-xs rounded-md p-2 m-2 hover:bg-primary-600 transition-colors duration-300 cursor-pointer'>
        Iniciar sesión
      </Link>
      )}
      <div className='flex justify-end items-center md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <DropdownMenuTrigger
                render={
                  <button
                    type='button'
                    className='p-2'
                    aria-label='Abrir menú'>
                    <FiMenu className='text-4xl text-accent-700 font-bold' />
                  </button>
                }
              />
            }
          />
          <DropdownMenuContent
            className='w-40'
            align='start'>
            <DropdownMenuGroup>
              {navbarLinks.map((link) => (
                <DropdownMenuItem key={link.to}>
                  <Link
                    to={link.to}
                    className='hover:text-accent-500 transition-colors duration-300'>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
