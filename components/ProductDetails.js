import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="header">
        {product.title}
      </div>
      <div className="pd-product">
        <Image className="pd-image" src={product.imageUrl || 'https://fl-1.cdn.flockler.com/embed/no-image.svg'} />
        <div className="pd-info">
          <div className="pd-description">{product.description}</div>
          <div>
            <div className="pd-price">
              ${product.price.toFixed(2)}
            </div>
            <div className="pd-quantity">&nbsp;{product.quantity} available from&nbsp;</div>
            <div className="pd-seller">
              <Link passHref href={`/sellers/${product.seller.id}`}>
                {product.seller.username}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    seller: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
    }),
  }).isRequired,
};
