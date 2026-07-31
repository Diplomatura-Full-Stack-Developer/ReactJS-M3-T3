import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialNetworks = [
  {
    name: 'Whatsapp',
    icon: <FaWhatsapp className='inline-block mr-2 text-xl font-bold' />,
    url: '+54 9 11-3333-3333',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className='inline-block mr-2 text-xl font-bold' />,
    url: 'https://www.facebook.com/plugyhogar',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className='inline-block mr-2 text-xl font-bold' />,
    url: 'https://www.instagram.com/plugyhogar',
  },
];

export const BranchesCard = ({ branch }) => {
  return (
    <div className='bg-primary-200 rounded-lg shadow-lg transform-3d hover:scale-103 transition-all duration-300 flex flex-col p-4'>
      <div className='flex flex-col items-center md:flex-col'>
        <img
          src={branch.imageUrl}
          alt={branch.province}
          loading='lazy'
          decoding='async'
          className='w-full object-cover rounded-md md:rounded-lg h-48 aspect-video'
        />
        <div className='flex flex-row items-center justify-between w-full px-4'>
          <h2 className='text-xl font-bold text-secondary-600 text-shadow-lg'>{branch.province}</h2>
          <h3 className='text-md font-bold text-accent-700 text-shadow-lg'>{branch.city}</h3>
        </div>
      </div>
      <p className='text-sm text-black/80 text-shadow-lg'>
        {' '}
        <span className='font-bold'>Dirección:</span> {branch.address}
      </p>
      <p className='text-sm text-black/80 text-shadow-lg'>
        {' '}
        <span className='font-bold'>Email de atención al cliente:</span> {branch.customerServiceEmail}
      </p>
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-black/80 text-shadow-lg'>
          {network.icon} {network.url}
        </a>
      ))}
    </div>
  );
};
