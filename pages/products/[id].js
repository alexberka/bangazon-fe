import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';
import { getSingleProduct } from '../../api/productData';
import { useAuth } from '../../utils/context/authContext';
import { addToCart } from '../../api/orderProductData';

export default function ProductViewer() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const onUpdate = () => {
    getSingleProduct(router.query.id, user.id).then(setProduct);
  };

  const onCartAdd = () => {
    if (product.inCart < product.quantity) {
      addToCart(user.id, product.id).then(onUpdate);
    }
  };

  useEffect(() => {
    onUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id, user]);

  return (
    <>
      {product.id && (<ProductDetails product={product} onCartAdd={onCartAdd} />)}
    </>
  );
}
