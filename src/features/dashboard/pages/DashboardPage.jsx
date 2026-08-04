import { useState, useEffect } from 'react';
import { getProducts } from '../../products/services/products.service';

export const DashboardPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  console.log(products);

  return (
    <div className='p-4'>
      <table className='w-full border-collapse border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border border-gray-300 p-2'>Type</th>
            <th className='border border-gray-300 p-2'>Brand</th>
            <th className='border border-gray-300 p-2'>Model</th>
            <th className='border border-gray-300 p-2'>Price</th>
            <th className='border border-gray-300 p-2'>Stock</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {products.map((product) => (
            <tr key={product.id} className='border-b border-gray-300'>
              <td>{product.type}</td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
