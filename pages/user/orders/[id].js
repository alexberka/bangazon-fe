import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleUserOrder } from '../../../api/orderData';
import ProductCard from '../../../components/ProductCard';

export default function UserSingleOrder() {
  const [order, setOrder] = useState({});
  const router = useRouter();

  useEffect(() => {
    getSingleUserOrder(router.query.id).then(setOrder);
  }, []);

  return (
    <div>
      {order.id && (
        <>
          <div className="header">Order #{order.id}-{order.completionDate.split('T')[0]}</div>
          <div className="order-item-number">{order.totalItems} item{order.totalItems > 1 && 's'}</div>
          <div className="order-total">Order Total: ${order.totalCost.toFixed(2)}</div>
          <div className="order-payment">{order.paymentType}</div>
          <div className="product-container">
            {order?.products.map((p) => (<ProductCard key={p.orderProductId} product={p} />))}
          </div>
        </>
      )}
    </div>
  );
}
