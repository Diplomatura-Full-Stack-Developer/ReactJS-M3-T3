import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from './services/products.service';

export const ShowProductPage = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      setProduct(products.find((product) => product.id === id));
    });
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Navigate to a protected route
    navigate('/cart');
  };

  return (
    <div className='bg-primary-200 flex flex-col p-4 m-4 md:m-8 rounded-lg shadow-lg'>
      <h1 className='text-secondary-600 text-shadow-lg text-4xl font-bold text-center'>{product.type}</h1>
      <h2 className='text-accent-700 text-shadow-lg text-2xl font-bold text-center'>{product.brand}</h2>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly'>
        <img
          srcSet={product.imageUrl}
          sizes='(max-width: 768px) 100vw, 50vw'
          alt={product.type}
          className='object-cover rounded-md md:rounded-lg shadow-lg m-4 w-1/2 md:w-1/4'
        />
        <div className='flex flex-col items-start'>
          <p>
            <span className='font-bold'>Modelo: </span>
            {product.model}
          </p>
          <p>
            <span className='font-bold'>Precio: </span>
            {product.price} $
          </p>
          <p>
            <span className='font-bold'>Stock: </span>
            {product.stock}
          </p>
        </div>
        <div className='flex flex-col items-start justify-center px-4'>
          <h3 className='text-accent-700 text-shadow-lg text-xl font-bold text-center my-4'>Características</h3>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
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
    </div>
  );
};
