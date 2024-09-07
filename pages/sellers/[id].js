import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSeller } from '../../api/userData';
import ProductCard from '../../components/ProductCard';

export default function SellerStore() {
  const [seller, setSeller] = useState({});
  const router = useRouter();

  useEffect(() => {
    getSingleSeller(router.query.id).then(setSeller);
  }, [router.query.id]);

  return (
    <div className="seller-store">
      {seller.id && (
        <>
          <div className="header">{seller.firstName} {seller.lastName}&apos;s Store</div>
          <div className="product-container">
            {seller.products?.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </>
      )}
    </div>
  );
}
