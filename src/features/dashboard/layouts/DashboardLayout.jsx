import { Outlet } from 'react-router-dom';
import { Header } from '../../../shared/components/Header';
import { Footer } from '../../../shared/components/Footer';

export const DashboardLayout = () => {
  const headerProps = {
    title: 'Administrador de Productos',
    navbar: false,
    initialButton: true,
    returnButton: true,
  };
  return (
    <div className='font-roboto h-screen flex flex-col'>
      <Header {...headerProps} />
      <main className='bg-primary-50 shadow-lg rounded-sm md:rounded-md md:mx-48 md:my-4 flex-1 pb-20 md:pb-0 overflow-y-auto scrollbar-hide'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

