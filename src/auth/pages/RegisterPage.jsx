import { useForm } from 'react-hook-form';
import { registerUser } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { user, error } = await registerUser(data);
    if (error) {
      Swal.fire({
        title: 'Error',
        text: 'Error al registrar usuario: ' + error.message,
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          reset();
          navigate('/auth/register');
        }
      });
    }
    Swal.fire({
      title: 'Usuario registrado',
      text: `Bienvenido ${user.email}`,
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        reset();
        navigate('/dashboard');
      }
    });
  };

  return (
    <div>
      <div className='bg-primary-200 flex flex-col items-center justify-center m-4 p-4 md:mx-8 rounded-lg shadow-lg'>
        <h1 className='text-secondary-600 text-shadow-lg text-lg font-bold text-center mb-4'>
          Ingrese sus datos para registrarse
        </h1>
        <form
          className='flex flex-col items-center justify-center gap-2'
          onSubmit={handleSubmit(onSubmit)}>
          <label
            className='text-accent-600 text-shadow-lg text-md font-bold text-center'
            htmlFor='email'>
            Email
          </label>
          <input
            className='border-2 border-primary-700 rounded-md p-2 bg-primary-50'
            type='email'
            {...register('email', { required: true, min: 1 })}
          />
          {errors.email && (
            <span className='text-accent-700 text-sm'>El email es requerido y debe ser un email válido</span>
          )}
          <label
            className='text-accent-600 text-shadow-lg text-md font-bold text-center'
            htmlFor='password'>
            Contraseña
          </label>
          <input
            className='border-2 border-primary-700 rounded-md p-2 bg-primary-50'
            type='password'
            {...register('password', { required: true, min: 0 })}
          />
          {errors.stock && (
            <span className='text-accent-700 text-sm'>
              El stock es requerido y debe ser un número mayor o igual a 0
            </span>
          )}

          <button
            className='bg-primary-600 text-white/80 text-shadow-lg text-sm md:text-md font-bold text-center p-2 rounded-lg hover:bg-primary-700 transition-all duration-300 mt-2 cursor-pointer'
            type='submit'>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};
