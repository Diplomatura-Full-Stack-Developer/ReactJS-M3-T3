import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className='font-roboto h-screen flex flex-col'>
      <Header />
      <main className='bg-primary-50 shadow-lg rounded-sm md:rounded-md md:mx-48 md:my-4 flex-1 pb-20 md:pb-0 overflow-y-auto scrollbar-hide'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

