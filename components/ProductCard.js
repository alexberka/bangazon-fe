import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Image } from 'react-bootstrap';
import { removeFromCart } from '../api/orderProductData';
import { useAuth } from '../utils/context/authContext';

export default function ProductCard({ product, onUpdate }) {
  const { user } = useAuth();

  const onCartRemove = () => {
    removeFromCart(user.id, product.orderProductId).then(onUpdate);
  };

  return (
    <div className="product-card">
      <Link passHref href={`/products/${product.id}`}>
        <div className="pc-link-content">
          <Image className="pc-image" src={product.imageUrl || 'https://fl-1.cdn.flockler.com/embed/no-image.svg'} />
          <div className="pc-info">
            <div className="pc-title">
              {product.title}
            </div>
            {product.seller
              && (
              <div className="pc-seller">
                by&nbsp;
                <Link passHref href={`/sellers/${product.seller.id}`}>
                  {product.seller.username}
                </Link>
              </div>
              )}
            <div className="pc-price">
              ${product.price.toFixed(2)}
            </div>
            {product.category
              && (
              <div className="pc-category">
                in {product.category.name}
              </div>
              )}
          </div>
        </div>
      </Link>
      {onUpdate && (
      <button className="pc-cart-remove" type="button" onClick={onCartRemove}>
        Remove from Cart
      </button>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    orderProductId: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    sold: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    seller: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func,
};

ProductCard.defaultProps = {
  onUpdate: null,
};
