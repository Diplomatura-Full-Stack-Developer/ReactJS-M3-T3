import imageNew from '../assets/images/brand/Plug&Hogar_new.jpg';
import imageOld from '../assets/images/brand/Plug&Hogar_old.jpg';

export const About = () => {
  return (
    <section className='p-4'>
      <div className='grid gap-4 md:grid-cols-2 md:gap-0 md:min-h-110'>
        <figure className='overflow-hidden rounded-md md:rounded-l-md'>
          <img
            srcSet={imageNew}
            sizes='(max-width: 768px) 100vw, 50vw'
            alt='Sucursal actual de Plug & Hogar'
            className='h-full w-full object-cover'
          />
        </figure>

        <article className='relative overflow-hidden min-h-110 flex items-center rounded-md md:rounded-r-md'>
          <img
            srcSet={imageOld}
            sizes='(max-width: 768px) 100vw, 50vw'
            alt='Sucursal antigua de Plug & Hogar'
            aria-hidden='true'
            className='absolute inset-0 h-full w-full object-cover opacity-70'
          />
          <div className='absolute inset-0 bg-black/55' />

          <div className='relative z-10 p-6 md:p-8 text-white/80'>
            <h2 className='text-2xl font-bold mb-4'>Nuestra historia</h2>
            <p className='text-sm md:text-base'>
              Plug & Hogar nació hace más de 80 años en Buenos Aires, de la mano de una familia de inmigrantes que llegó
              con ganas de trabajar y la idea de acercar al hogar lo que hacía la vida diaria más simple. Empezaron con
              un pequeño local, ofreciendo productos confiables y un trato cercano: cada cliente era atendido como si
              fuera de la familia.
            </p>
            <p className='text-sm md:text-base'>
              Con el tiempo, esa misma forma de hacer las cosas los llevó a crecer. De Buenos Aires a Mendoza, Córdoba y
              Santa Fe, Plug & Hogar se fue expandiendo sin perder su esencia. Hoy somos una cadena con presencia en
              distintas provincias, pero seguimos siendo una empresa familiar.
            </p>
            <p className='text-sm md:text-base'>
              Nuestra política más importante no cambió: calidad en lo que vendemos y calidez en cómo atendemos. Creemos
              que un buen electrodoméstico importa, y que la confianza se construye en el mostrador, en el asesoramiento
              y en el acompañamiento después de la compra.
            </p>
            <p className='text-sm md:text-base leading-relaxed'>
              Por eso, en cada sucursal vas a encontrar el mismo compromiso: productos de calidad y una atención humana,
              clara y cercana. Porque para nosotros, el hogar empieza cuando alguien te escucha de verdad.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
