import { Link } from 'react-router-dom';
import { formatPrice, truncateText } from '../services/api';
import './ProductCard.css';

/**
 * ProductCard Component
 * Displays individual product information in a card format
 * @param {Object} product - Product data object
 */
const ProductCard = ({ product }) => {
  if (!product) return null;

  const { id, title, price, image, description, category } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title}
          className="product-image"
          loading="lazy"
        />
        <div className="product-category-badge">
          {category}
        </div>
      </div>
      
      <div className="product-content">
        <h3 className="product-title">
          {truncateText(title, 60)}
        </h3>
        
        <p className="product-description">
          {truncateText(description, 100)}
        </p>
        
        <div className="product-footer">
          <div className="product-price">
            {formatPrice(price)}
          </div>
          
          <Link 
            to={`/product/${id}`} 
            className="view-details-btn"
            aria-label={`View details for ${title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;