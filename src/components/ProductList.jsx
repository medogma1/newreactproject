import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import './ProductList.css';

/**
 * ProductList Component
 * Displays a grid of product cards with loading and error states
 * @param {Array} products - Array of product objects
 * @param {boolean} loading - Loading state
 * @param {string} error - Error message
 * @param {string} title - Section title
 */
const ProductList = ({ products = [], loading = false, error = null, title = "Products" }) => {
  if (loading) {
    return (
      <section className="product-list-section">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="product-list-section">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <ErrorMessage message={error} />
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="product-list-section">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"/>
              </svg>
            </div>
            <h3 className="empty-state-title">No Products Found</h3>
            <p className="empty-state-description">
              We couldn't find any products to display at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product-list-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">
            Discover our amazing collection of {products.length} products
          </p>
        </div>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;