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
]


export const Navbar = () => {
  return (
    <nav className='text-accent-700 p-4 text-base font-bold text-shadow-lg'>
      <ul className='flex justify-between items-center gap-4 font-bold'>
        {navbarLinks.map((link) => (
          <li key={link.to} className='hover:text-accent-500 transition-colors duration-300'>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


