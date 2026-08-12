import { Link } from 'react-router-dom';
export const Cart = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Pagina protegida</h1>
      <p className='text-2xl'>Llegaste aquí porque iniciaste sesión</p>
      <p className='text-2xl'>Pagina del carrito en construcción</p>
      <Link to='/' type='button' className='font-bold text-blue-600 hover:text-blue-700 m-4 p-2 rounded-md border border-blue-600 hover:border-blue-700'>Volver a la página principal</Link>
    </div>
  )
}
