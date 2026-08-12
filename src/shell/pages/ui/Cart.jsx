import { Link } from 'react-router-dom';
export const Cart = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center h-full p-4 md:p-8'>
      <h1 className='text-2xl md:text-4xl font-bold'>Pagina protegida</h1>
      <p className='md:text-2xl'>Llegaste aquí porque iniciaste sesión.</p>
      <p className='md:text-2xl'>Pagina del carrito en construcción.</p>
      <Link to='/' type='button' className='font-bold text-blue-600 hover:text-blue-700 m-4 p-2 rounded-md border border-blue-600 hover:border-blue-700'>Volver a la página principal</Link>
    </div>
  )
}
