import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`products/${product.id}`);
  };


  return (
    <div
      onClick={handleClick}
      className='bg-primary-200 rounded-lg shadow-lg transform-3d hover:scale-103 transition-all duration-300 flex flex-col p-4 items-center justify-center relative overflow-hidden cursor-pointer'>
      {product.offer && (
        <div className='absolute w-48 h-48 bg-accent-700 text-white/80 text-sm top-0 right-0 flex flex-col items-center justify-end translate-x-1/2 -translate-y-1/2 rotate-45'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-white text-4xl font-bold'>12</span>
            <span className='text-white text-sm'>CUOTAS SIN INTERÉS</span>
          </div>
        </div>
      )}
      <h2 className='text-xl font-bold text-secondary-600 text-shadow-lg'>{product.type}</h2>
      <h3 className='text-md font-bold text-accent-700 text-shadow-lg'>{product.brand}</h3>
      <img
        src={product.imageUrl}
        // sizes='(max-width: 768px) 100vw, 50vw'
        alt={product.type}
        className=' object-scale-down h-48 w-full rounded-md md:rounded-lg'
      />
    </div>
  );
};
