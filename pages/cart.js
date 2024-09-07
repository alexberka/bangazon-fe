import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getUserCart } from '../api/orderData';
import ProductCard from '../components/ProductCard';

export default function Cart() {
  const [cart, setCart] = useState({});
  const { user } = useAuth();

  const updateCart = () => {
    getUserCart(user.id).then(setCart);
  };

  useEffect(() => {
    updateCart();
  }, [user]);

  if (!cart.id) {
    return (<div>Your cart is empty. Start shopping!</div>);
  }
  return (
    <div className="cart">
      <div className="header">Your Cart</div>
      <div className="product-container">
        {cart?.products.map((p) => <ProductCard key={p.orderProductId} product={p} onUpdate={updateCart} />)}
      </div>
      <div className="cart-total">Cart Total: ${cart.currentCost.toFixed(2)}</div>
      {cart.products.length > 0 && (
        <Link passHref href="/checkout">
          <div className="cart-checkout-btn">
            Checkout &#40;{cart.products.length} item{cart.products.length > 1 && 's'}&#41;
          </div>
        </Link>
      )}
    </div>
  );
}
