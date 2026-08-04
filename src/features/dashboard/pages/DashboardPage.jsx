import { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../../products/services/products.service';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const tableTitles = [
    { title: 'Producto', key: 'type' },
    { title: 'Marca', key: 'brand' },
    { title: 'Modelo', key: 'model' },
    { title: 'Precio', key: 'price' },
    { title: 'Cantidad', key: 'stock' },
  ];

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  return (
    <div className='p-4'>
      <button
        onClick={() => navigate('/add-product')}
        className='bg-primary-600 text-white rounded-md p-2 m-2 hover:bg-primary-700 transition-colors duration-300 cursor-pointer flex items-center justify-center'>
        Agregar Producto
      </button>
      <table className='w-full border-collapse border border-gray-300 shadow-md'>
        <thead className='bg-primary-200 text-gray-700 text-shadow-md'>
          <tr>
            {tableTitles.map((title) => (
              <th
                className='border border-gray-300 p-2'
                key={title.key}>
                {title.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white'>
          {products.map((product) => (
            <tr
              key={product.id}
              className='border-b border-gray-300'>
              {tableTitles.map((title) => (
                <td
                  className='pl-4'
                  key={title.key}>
                  {product[title.key]} {title.key === 'price' ? '$' : ''}
                </td>
              ))}
              <td>
                <button
                  onClick={() => navigate(`/update-product/${product.id}`)}
                  className='bg-primary-600 text-white rounded-md p-2 m-2 hover:bg-primary-700 transition-colors duration-300 cursor-pointer'>
                  <FiEdit2 />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className='bg-accent-600 text-white rounded-md p-2 m-2 hover:bg-accent-700 transition-colors duration-300 cursor-pointer'>
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
