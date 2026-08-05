import { useEffect, useState } from 'react';
import { getProductById, updateProduct } from './services/products.service';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ShowProductPage } from './ShowProductPage';

export const UpdateProductPage = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id, product]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    event.preventDefault();
    await updateProduct(id, { ...product, price: Number(data.price), stock: Number(data.stock) });
    navigate('dashboard');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ShowProductPage showButtons={false} />
      <div className='bg-primary-200 flex flex-col items-center justify-center mx-4 p-4 md:mx-8 rounded-lg shadow-lg'>
        <form className='flex flex-col items-center justify-center gap-2' onSubmit={handleSubmit(onSubmit)}>
          <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-center' htmlFor='name'>Precio</label>
          <input className='border-2 border-primary-700 rounded-md p-2' type='number' {...register('price')} defaultValue={product.price} />
          <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-center' htmlFor='brand'>Stock</label>
          <input className='border-2 border-primary-700 rounded-md p-2' type='number' {...register('stock')} defaultValue={product.stock} />
          <button className='bg-primary-600 text-white/80 text-shadow-lg text-xl font-bold text-center p-2 rounded-lg hover:bg-primary-700 transition-all duration-300 mt-2' type='submit'>Modificar datos</button>
        </form>
      </div>
    </div>
  );
};
