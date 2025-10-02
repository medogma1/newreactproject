import './About.css';

/**
 * About Page Component
 * Displays information about the company/store
 */
const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1 className="about-title">About Our Store</h1>
          <p className="about-subtitle">
            Your trusted destination for quality products and exceptional service
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="section-content">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for bringing you the finest products from around the world, 
                our store has been serving customers with dedication and excellence. We believe in 
                quality, authenticity, and customer satisfaction above all else.
              </p>
              <p>
                Every product in our catalog is carefully selected to meet our high standards, 
                ensuring that you receive only the best when you shop with us.
              </p>
            </div>
            <div className="section-image">
              <svg viewBox="0 0 400 300" className="about-illustration">
                <defs>
                  <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                <rect x="50" y="80" width="300" height="180" rx="20" fill="url(#aboutGradient)" opacity="0.1" />
                <circle cx="120" cy="140" r="30" fill="url(#aboutGradient)" opacity="0.3" />
                <circle cx="280" cy="180" r="25" fill="url(#aboutGradient)" opacity="0.4" />
                <rect x="180" y="120" width="80" height="60" rx="10" fill="url(#aboutGradient)" opacity="0.2" />
                <path d="M100 200 Q200 160 300 200" stroke="url(#aboutGradient)" strokeWidth="3" fill="none" opacity="0.6" />
              </svg>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 12h3l2-2-2-2h-3"/>
                    <path d="M11 12H8l-2-2 2-2h3"/>
                  </svg>
                </div>
                <h3>Quality First</h3>
                <p>We never compromise on quality. Every product meets our rigorous standards.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3>Customer Focus</h3>
                <p>Your satisfaction is our priority. We're here to serve you with excellence.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>Trust & Security</h3>
                <p>Shop with confidence. Your data and transactions are always secure.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping to get your products to you as soon as possible.</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Commerce Street<br />Business District, City 12345</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@ourstore.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;