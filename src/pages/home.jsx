
import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import ProductCard from '../components/header/product-card';

const Home = () => {
  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState("");

  async function fetchProducts() {
    setLoading(true)
    try { 
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (e) {
      setError(e)
      console.log(error);
      setLoading(false)
    }

    return products;
   
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      {
        loading ? 
        <div className='flex justify-center items-center w-full min-h-screen'>
          <Circles 
          height={'120'}
          width={'120'}
          color='#000080'
          visible={true}
          />
        </div> 
        : 
        <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-3 mx-auto'>
          {
            products && products.length > 0 ? 
            products.map((product) => <ProductCard key={product.id} product={product} />) 
            : <div>No products found</div>
          }
        </div>
      }
    </div>
  )
}

export default Home