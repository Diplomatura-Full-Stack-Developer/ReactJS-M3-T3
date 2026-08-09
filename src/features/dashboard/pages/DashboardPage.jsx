import { useState, useEffect } from 'react';
import {
  subscribeToProducts,
  deleteProduct,
  deleteProductPermanently,
} from '../../products/services/products.service';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [showDeletedProducts, setShowDeletedProducts] = useState(false);
  const [productsToShow, setProductsToShow] = useState([]);

  const tableTitles = [
    { title: 'Producto', key: 'type' },
    { title: 'Marca', key: 'brand' },
    { title: 'Modelo', key: 'model' },
    { title: 'Precio', key: 'price' },
    { title: 'Stock', key: 'stock' },
    { title: 'Cuotas', key: 'offer' },
  ];

  useEffect(() => {
    const unsubscribe = subscribeToProducts(setProductsToShow, {
      deleted: showDeletedProducts,
    });
    return () => unsubscribe();
  }, [showDeletedProducts]);

  const handleDelete = (id) => {
    if (showDeletedProducts) {
      Swal.fire({
        title: '¿Estás seguro de querer eliminar este producto permanentemente?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProductPermanently(id);
        }
      });
    } else {
      deleteProduct(id);
    }
  };

  const handleShowDeletedProducts = () => {
    setShowDeletedProducts((prev) => !prev);
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <button
          onClick={() => navigate('products/add-product')}
          className='bg-primary-500 text-white font-bold text-shadow-lg text-md rounded-md p-2 m-2 hover:bg-primary-600 transition-colors duration-300 cursor-pointer flex items-center justify-center'>
          Agregar Producto
        </button>
        <button
          onClick={handleShowDeletedProducts}
          className='bg-accent-600 text-white font-bold rounded-md p-2 m-2 hover:bg-accent-700 transition-colors duration-300 cursor-pointer flex items-center justify-center'>
          {showDeletedProducts ? 'Ver Productos Activos' : 'Ver Productos Borrados'}
        </button>
      </div>
      <table className='w-full border-collapse border border-gray-300 shadow-md'>
        <thead className='bg-primary-100 text-gray-700 text-shadow-md'>
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
          {productsToShow.map((product) => (
            <tr
              key={product.id}
              className='border-b border-gray-300'>
              {tableTitles.map((title) => (
                <td
                  className='pl-4'
                  key={title.key}>
                  {title.key === 'offer' ? (product[title.key] ? 'Si' : 'No') : product[title.key]}
                  {title.key === 'price' ? ' $' : ''}
                </td>
              ))}
              <td>
                {!showDeletedProducts && (
                  <button
                    onClick={() => navigate(`products/update-product/${product.id}`)}
                    className='bg-primary-600 text-white rounded-md p-2 m-2 hover:bg-primary-700 transition-colors duration-300 cursor-pointer'>
                    <FiEdit2 />
                  </button>
                )}
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
