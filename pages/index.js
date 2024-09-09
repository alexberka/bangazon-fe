import { useEffect, useState } from 'react';
import { getTopProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTopProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className="header">Top Products</div>
      <div className="product-container">
        {products.length > 0
          && products.map((p) => (<ProductCard key={p.id} product={p} />))}
      </div>
    </>
  );
}

export default Home;
