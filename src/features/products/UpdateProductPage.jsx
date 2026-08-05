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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <form
          className='flex flex-col items-center justify-center gap-2'
          onSubmit={handleSubmit(onSubmit)}>
          <label
            className='text-secondary-600 text-shadow-lg text-lg font-bold text-center'
            htmlFor='name'>
            Precio
          </label>
          <input
            className='border-2 border-primary-700 rounded-md p-2'
            type='number'
            defaultValue={product.price}
            {...register('price', { required: true, min: 1 })}
          />
          {errors.price && <span className='text-accent-700 text-sm'>El precio es requerido</span>}
          {errors.price && <span className='text-accent-700 text-sm'>El precio debe ser mayor a 0</span>}
          {errors.price && <span className='text-accent-700 text-sm'>El precio debe ser un número</span>}
          <label
            className='text-secondary-600 text-shadow-lg text-lg font-bold text-center'
            htmlFor='brand'>
            Stock
          </label>
          <input
            className='border-2 border-primary-700 rounded-md p-2'
            type='number'
            defaultValue={product.stock}
            {...register('stock', { required: true, min: 0 })}
          />
          {errors.stock && <span className='text-accent-700 text-sm'>El stock es requerido</span>}
          {errors.stock && <span className='text-accent-700 text-sm'>El stock debe ser mayor o igual a 0</span>}
          {errors.stock && <span className='text-accent-700 text-sm'>El stock debe ser un número</span>}
          <button
            className='bg-primary-600 text-white/80 text-shadow-lg text-xl font-bold text-center p-2 rounded-lg hover:bg-primary-700 transition-all duration-300 mt-2 cursor-pointer'
            type='submit'>
            Modificar datos
          </button>
        </form>
      </div>
    </div>
  );
};
