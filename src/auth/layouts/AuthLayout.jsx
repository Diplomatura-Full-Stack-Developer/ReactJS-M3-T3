import { Outlet } from 'react-router-dom';
import { Header } from '../../shared/components/Header';
import { Footer } from '../../shared/components/Footer';

export const AuthLayout = () => {
  const HeaderProps = {
    title: 'Autenticación de usuario',
    navbar: false,
  };
  return (
    <div className='font-roboto h-screen flex flex-col'>
      <Header {...HeaderProps} />
      <main className='bg-primary-50 shadow-lg rounded-sm md:rounded-md md:mx-48 md:my-4 flex-1 pb-20 md:pb-0 overflow-y-auto scrollbar-hide'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

