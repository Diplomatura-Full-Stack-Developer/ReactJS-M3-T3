import { Link } from 'react-router-dom'

const navbarLinks = [
  {
    to: '/',
    label: 'Inicio',
  },
  {
    to: '/contact',
    label: 'Contacto',
  },
  {
    to: '/about',
    label: 'Nosotros',
  },
  {
    to: '/dashboard',
    label: 'Admin',
  },
  {
    to: '/auth',
    label: 'Iniciar sesión',
  },
]


export const Navbar = () => {
  return (
    <nav className='text-accent-700 p-4 text-base font-bold text-shadow-lg'>
      <ul className='flex justify-between items-center gap-4 font-bold'>
        {navbarLinks.map((link) => (
          <li key={link.to} className='hover:text-accent-500 transition-colors duration-300'>
            <Link to={link.to}>{link.label==="Iniciar sesión" ? <button className='bg-primary-500 text-white font-bold text-shadow-lg text-md rounded-md p-2 m-2 hover:bg-primary-600 transition-colors duration-300 cursor-pointer flex items-center justify-center'>{link.label}</button> : link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


