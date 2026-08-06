import { addProduct } from './services/products.service';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const AddProductPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newFeatures = data.features ? data.features.split(',').map((feature) => feature.trim()) : [];

    const newProduct = {
      ...data,
      features: newFeatures,
      imageUrl: data.imageUrl || '/images/products/no-image.jpg',
      deleted: false,
      offer: false,
    };

    await addProduct(newProduct);
    navigate('dashboard');
  };

  return (
    <div className='bg-primary-200 flex flex-col items-center justify-center m-4 p-4 md:mx-8 rounded-lg shadow-lg'>
      <form
        className='grid grid-cols-6 col-span-6 md:grid-cols-12  items-center justify-center gap-2'
        onSubmit={handleSubmit(onSubmit)}>
        {/* Producto */}
        <div className='flex flex-col col-span-6'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>Producto:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='text'
              {...register('type', { required: true })}
            />
          </div>
          {errors.type && <p className='text-accent-700 text-sm text-center'>Requerido y debe ser un texto</p>}
        </div>

        {/* Marca */}
        <div className='flex flex-col col-span-6'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>Marca:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='text'
              {...register('brand', { required: true })}
            />
          </div>
          {errors.brand && <p className='text-accent-700 text-sm text-center'>Requerido y debe ser un texto</p>}
        </div>

        {/* Modelo */}
        <div className='col-span-6 flex flex-col'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>Modelo:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='text'
              {...register('model', { required: true })}
            />
          </div>
          {errors.model && <p className='text-accent-700 text-sm text-center'>Requerido y debe ser un texto</p>}
        </div>

        {/* Precio */}
        <div className='col-span-6 flex flex-col'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>Precio:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='number'
              {...register('price', { required: true, min: 1 })}
            />
          </div>
          {errors.price && (
            <p className='text-accent-700 text-sm text-center'>Requerido y debe ser un número mayor a 0</p>
          )}
        </div>

        {/* Stock */}
        <div className='col-span-6 flex flex-col'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>Stock:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='number'
              {...register('stock', { required: true, min: 0 })}
            />
          </div>
          {errors.stock && (
            <p className='text-accent-700 text-sm text-center'>Requerido y debe ser un número mayor o igual a 0</p>
          )}
        </div>

        {/* Imagen */}
        <div className='col-span-6 flex flex-col'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>URL de la imagen:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='text'
              {...register('imageUrl')}
            />
          </div>
        </div>

        {/* Características */}
        <div className='col-span-6 flex flex-col'>
          <div className='flex flex-row items-center justify-end'>
            <label className='text-secondary-600 text-shadow-lg text-lg font-bold text-right'>Características:</label>
            <input
              className='border-2 border-primary-700 rounded-md p-2'
              type='text'
              {...register('features')}
            />
          </div>
        </div>

        <div className='md:col-span-12 flex flex-row items-center justify-center gap-2'>
          <button
            className='bg-primary-600 text-white/80 text-shadow-lg text-xl font-bold text-center p-2 rounded-lg hover:bg-primary-700 transition-all duration-300 mt-2 cursor-pointer'
            type='submit'>
            Agregar producto
          </button>
        </div>
      </form>
    </div>
  );
};
