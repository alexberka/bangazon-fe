import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPastUserOrders } from '../../api/orderData';
import { useAuth } from '../../utils/context/authContext';

export default function UserPastOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getPastUserOrders(user.id).then(setOrders);
  }, []);

  return (
    <div>
      <div className="header">Past Orders</div>
      <div className="order-container">
        {orders.length > 0 && orders?.map((o) => (
          <Link key={o.id} passHref href={`/user/orders/${o.id}`}>
            <div className="order-listing">
              <div className="ol-date">#{o.id}-{o.completionDate.split('T')[0]}</div>
              <div className="ol-cost">Order Total: ${o.totalCost.toFixed(2)}</div>
              <div className="ol-items">{o.totalItems} item{o.totalItems > 1 && 's'}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
