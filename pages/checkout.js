import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { checkoutCart, getUserCart } from '../api/orderData';

export default function Checkout() {
  const [cart, setCart] = useState({});
  const [paymentType, setPaymentType] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { value } = e.target;
    setPaymentType(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentType) {
      checkoutCart(cart.id, { paymentType }).then(() => setOrderComplete(true));
    }
  };

  useEffect(() => {
    getUserCart(user.id).then((cartData) => {
      if (!cartData || !cartData.products || cartData.products.length === 0) {
        router.push('/cart');
      } else {
        setCart(cartData);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orderComplete) {
    return (
      <>
        <div className="header">Order Successful!</div>
        <div className="checkout-ty1">Bangazon thanks you for your patronage</div>
        <div className="checkout-ty2"><Link passHref href={`/user/orders/${cart.id}`}>Review Order Details</Link> or <Link passHref href="/products">Return To Products</Link> to continue shopping</div>
      </>
    );
  }
  if (cart.id && cart.products.length > 0) {
    return (
      <div>
        <div className="header">Order Checkout</div>
        <div className="checkout-list">
          {cart?.products.map((p) => (
            <div className="checkout-list-item" key={p.orderProductId}>
              <div className="cl-title">{p.title}</div>
              <div className="cl-price">{p.price.toFixed(2)}</div>
            </div>
          ))}
          <div className="checkout-total">Order Total: ${cart.currentCost.toFixed(2)}</div>
        </div>
        <Form className="checkout-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter payment method" value={paymentType} onChange={handleChange} />
          <button type="submit">Complete Order</button>
        </Form>
      </div>
    );
  }
  return (
    <div>
      Nothing Found
    </div>
  );
}
