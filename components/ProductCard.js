import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

export default function ProductCard({ product }) {
  return (
    <Link passHref href={`/products/${product.id}`}>
      <div className="product-card">
        <Image className="pc-image" src={product.imageUrl || 'https://fl-1.cdn.flockler.com/embed/no-image.svg'} />
        <div className="pc-info">
          <div className="pc-title">
            {product.title}
          </div>
          <div className="pc-seller">
            by&nbsp;
            <Link passHref href={`/sellers/${product.seller.id}`}>
              {product.seller.username}
            </Link>
          </div>
          <div className="pc-price">
            ${product.price.toFixed(2)}
          </div>
          <div className="pc-category">
            in {product.category.name}
          </div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
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
};
