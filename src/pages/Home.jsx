import { useProducts } from '../hooks/useProducts';
import HeroBanner from '../components/HeroBanner';
import ProductList from '../components/ProductList';
import './Home.css';

/**
 * Home Page Component
 * Main landing page with hero section and featured products
 */
const Home = () => {
  // Fetch limited products for homepage display
  const { products, loading, error } = useProducts(6);

  return (
    <div className="home-page">
      <HeroBanner />
      
      <ProductList 
        products={products}
        loading={loading}
        error={error}
        title="Featured Products"
      />
      
      {/* Additional sections can be added here */}
      <section className="home-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-description">
                Quick and reliable shipping to your doorstep with real-time tracking.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M13 12h3l2-2-2-2h-3"/>
                  <path d="M11 12H8l-2-2 2-2h3"/>
                </svg>
              </div>
              <h3 className="feature-title">Quality Guaranteed</h3>
              <p className="feature-description">
                All products are carefully selected and quality tested before shipping.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="feature-title">Secure Shopping</h3>
              <p className="feature-description">
                Your personal information and payments are protected with advanced security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;