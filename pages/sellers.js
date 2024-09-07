import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllSellers } from '../api/userData';
import ProductCard from '../components/ProductCard';

export default function BrowseSellers() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    getAllSellers().then(setSellers);
  }, []);

  return (
    <div>
      <div className="header">All Sellers</div>
      {sellers?.map((s) => (
        <div className="seller-card" key={s.id}>
          <Link passHref href={`/sellers/${s.id}`}>
            <div className="sc-header">
              {s.firstName} {s.lastName} &#40;{s.username}&#41;
            </div>
          </Link>
          <div className="sc-items-sold">{s.itemsSold} item{s.itemsSold !== 1 && 's'} sold</div>
          <div className="sc-product-title">Top Products</div>
          <div className="product-container">
            {s.products?.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
