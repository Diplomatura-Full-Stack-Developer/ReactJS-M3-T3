import { useNavigate } from 'react-router-dom';

export const ButtonsShowProduct = ({ handleAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row items-center justify-center w-full gap-4'>
      <button
        onClick={() => navigate('/')}
        className='bg-primary-700 text-white/80 text-shadow-lg text-xl font-bold text-center p-2 rounded-lg hover:bg-primary-800 transition-all duration-300 mt-8'>
        Regresar
      </button>
      <button
        onClick={() => handleAddToCart()}
        className='bg-accent-700 text-white/80 text-shadow-lg text-xl font-bold text-center p-2 rounded-lg hover:bg-accent-800 transition-all duration-300 mt-8'>
        Comprar
      </button>
    </div>
  );
}
