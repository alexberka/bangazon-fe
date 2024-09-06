import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

export default function BrowseProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className="header">All Products</div>
      <div className="product-container">
        {products.length > 0
          && products.map((p) => (<ProductCard key={p.id} product={p} />))}
      </div>
    </>
  );
}
