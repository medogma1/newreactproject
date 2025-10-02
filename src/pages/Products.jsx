import ProductList from '../components/ProductList';
import './Products.css';

/**
 * Products Page Component
 * Displays all products in a dedicated page
 */
const Products = () => {
  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Our Products</h1>
          <p className="page-description">
            Discover our amazing collection of high-quality products
          </p>
        </div>
        
        <ProductList />
      </div>
    </div>
  );
};

export default Products;