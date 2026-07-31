import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className='bg-primary-100 w-full h-16 flex items-center justify-between sticky top-0 z-10 flex-row p-4 md:px-48'>
      <h1 className='text-2xl font-bold text-accent-700 text-shadow-lg hidden md:block'>Curso de ReactJS</h1>
      <Navbar />
    </div>
  );
};
