import { useEffect, useState } from 'react';
import { getProductById, updateProduct } from './services/products.service';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
    await updateProduct(id, {
      ...product,
      price: Number(data.price),
      stock: Number(data.stock),
      offer: Boolean(data.offer),
    });
    navigate('dashboard');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='bg-primary-200 flex flex-col p-4 m-4 md:m-8 rounded-lg shadow-lg'>
        <h1 className='text-secondary-600 text-shadow-lg text-4xl font-bold text-center'>{product.type}</h1>
        <h2 className='text-accent-700 text-shadow-lg text-2xl font-bold text-center'>{product.brand}</h2>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly'>
          <img
            srcSet={product.imageUrl}
            sizes='(max-width: 580px) 75vw, 35vw'
            alt={product.type}
            className='object-cover rounded-md md:rounded-lg shadow-lg m-4 w-1/2 md:w-1/6'
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
      </div>
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
          {errors.price && (
            <span className='text-accent-700 text-sm'>El precio es requerido y debe ser un número mayor a 0</span>
          )}
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
          {errors.stock && (
            <span className='text-accent-700 text-sm'>
              El stock es requerido y debe ser un número mayor o igual a 0
            </span>
          )}

          <label
            className='text-secondary-600 text-shadow-lg text-lg font-bold text-center'
            htmlFor='offer'>
            Oferta en cuotas
          </label>
          <select
            className='border-2 border-primary-700 rounded-md p-2'
            defaultValue={product.offer}
            {...register('offer')}>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>
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
