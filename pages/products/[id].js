import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';
import { getSingleProduct } from '../../api/productData';

export default function ProductViewer() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    getSingleProduct(router.query.id).then(setProduct);
  }, [router.query.id]);

  return (
    <>
      {product.id && (<ProductDetails product={product} />)}
    </>
  );
}
