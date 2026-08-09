import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
export const Header = ({ title, navbar, initialButton }) => {
  const navigate = useNavigate();
  return (
    <div className='bg-primary-100 w-full h-16 flex items-center justify-between sticky top-0 z-10 flex-row p-4 md:px-48'>
      <h1 className='text-2xl font-bold text-accent-700 text-shadow-lg hidden md:block'>{title}</h1>
      {navbar && <Navbar />}
      {initialButton && <button onClick={() => navigate("/")} className='bg-primary-500 text-white font-bold text-shadow-lg text-md rounded-md p-2 m-2 hover:bg-primary-600 transition-colors duration-300 cursor-pointer flex items-center justify-center'>Inicio</button>}
    </div>
  );
};


