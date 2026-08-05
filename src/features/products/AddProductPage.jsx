import { addProduct } from './services/products.service';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const AddProductPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    event.preventDefault();
    console.log(data);
    // await addProduct(data);
    navigate('dashboard');
  };

  return (
    <div>
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
            {...register('price', { required: true, min: 1 })}
          />
          {errors.price && <p className='text-accent-700 text-sm'>El precio es requerido</p>}
          {errors.price && <p className='text-accent-700 text-sm'>El precio debe ser mayor a 0</p>}
          {errors.price && <p className='text-accent-700 text-sm'>El precio debe ser un número</p>}
          <label
            className='text-secondary-600 text-shadow-lg text-lg font-bold text-center'
            htmlFor='brand'>
            Stock
          </label>
          <input
            className='border-2 border-primary-700 rounded-md p-2'
            type='number'
            {...register('stock', { required: true, min: 0 })}
          />
          {errors.stock && <p className='text-accent-700 text-sm'>El stock es requerido</p>}
          {errors.stock && <p className='text-accent-700 text-sm'>El stock debe ser mayor o igual a 0</p>}
          {errors.stock && <p className='text-accent-700 text-sm'>El stock debe ser un número</p>}
          <button
            className='bg-primary-600 text-white/80 text-shadow-lg text-xl font-bold text-center p-2 rounded-lg hover:bg-primary-700 transition-all duration-300 mt-2 cursor-pointer'
            type='submit'>
            Agregar producto
          </button>
        </form>
      </div>
    </div>
  );
};
