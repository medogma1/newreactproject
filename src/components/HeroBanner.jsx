import { Link } from 'react-router-dom';
import './HeroBanner.css';

/**
 * HeroBanner Component
 * Hero section with background image, text, and call-to-action
 */
const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-background">
        <svg 
          className="hero-pattern" 
          width="100%" 
          height="100%" 
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="1"/>
            </linearGradient>
            <pattern id="heroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="rgba(255,255,255,0.1)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGradient)"/>
          <rect width="100%" height="100%" fill="url(#heroPattern)"/>
        </svg>
      </div>
      
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover Amazing Products
              <span className="hero-title-accent">Just For You</span>
            </h1>
            
            <p className="hero-description">
              Explore our curated collection of high-quality products from various categories. 
              Find exactly what you're looking for with our easy-to-use product catalog.
            </p>
            
            <div className="hero-actions">
              <Link to="/products" className="hero-btn primary">
                <span>Shop Now</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
              
              <Link to="/about" className="hero-btn secondary">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              <svg 
                width="400" 
                height="300" 
                viewBox="0 0 400 300" 
                className="hero-illustration"
              >
                <defs>
                  <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f3f4f6"/>
                    <stop offset="100%" stopColor="#e5e7eb"/>
                  </linearGradient>
                </defs>
                
                {/* Shopping boxes/packages */}
                <rect x="50" y="120" width="80" height="60" rx="8" fill="url(#boxGradient)" stroke="#d1d5db" strokeWidth="2"/>
                <rect x="150" y="100" width="70" height="70" rx="8" fill="url(#boxGradient)" stroke="#d1d5db" strokeWidth="2"/>
                <rect x="240" y="130" width="75" height="55" rx="8" fill="url(#boxGradient)" stroke="#d1d5db" strokeWidth="2"/>
                
                {/* Shopping bag */}
                <path d="M180 200 L220 200 L215 250 L185 250 Z" fill="#3b82f6" opacity="0.8"/>
                <path d="M185 200 Q185 190 195 190 L205 190 Q215 190 215 200" stroke="#3b82f6" strokeWidth="3" fill="none"/>
                
                {/* Decorative elements */}
                <circle cx="100" cy="80" r="3" fill="#fbbf24"/>
                <circle cx="280" cy="90" r="4" fill="#10b981"/>
                <circle cx="320" cy="180" r="3" fill="#f59e0b"/>
                <circle cx="80" cy="200" r="2" fill="#ef4444"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m7 13 5 5 5-5"/>
            <path d="m7 6 5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;