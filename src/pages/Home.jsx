import { products } from '../data/products';
import { ProductCard } from './ui/ProductCard';
import logo from '../assets/images/brand/Logo_Plug_&_Hogar.png';

export const Home = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full px-16'>
        <img
          srcSet={logo}
          sizes='(max-width: 768px) 100vw, 50vw'
          alt='logo'
          className='h-24 object-contain'
        />
        <h1 className='text-2xl md:text-4xl font-bold text-secondary-600 text-shadow-lg'>Artículos del Hogar</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 w-full'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
