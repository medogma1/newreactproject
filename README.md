# React Product Catalog

A professional, responsive React application showcasing a product catalog with modern UI/UX design and clean code architecture.

## 🚀 Live Demo

[View Live Demo](https://medogma1.github.io/newreactproject/)

## 📋 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Product Catalog**: Browse products with detailed information and high-quality images
- **Product Details**: Dedicated pages for each product with comprehensive information
- **API Integration**: Real-time data fetching from Fake Store API
- **Fast Performance**: Optimized build with code splitting and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Friendly**: Semantic HTML structure and meta tags

## 🛠️ Technologies Used

- **React 19** - Latest React with functional components and hooks
- **React Router DOM** - Client-side routing and navigation
- **Vite** - Fast build tool and development server
- **CSS3** - Modern CSS with Flexbox, Grid, and custom properties
- **Fake Store API** - External API for product data
- **GitHub Pages** - Deployment and hosting

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── HeroBanner.jsx  # Homepage hero section
│   ├── ProductCard.jsx # Product display card
│   ├── ProductList.jsx # Product grid layout
│   ├── LoadingSpinner.jsx # Loading state component
│   └── ErrorMessage.jsx   # Error handling component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Products.jsx    # Products listing page
│   ├── ProductDetails.jsx # Individual product page
│   └── About.jsx       # About page
├── hooks/              # Custom React hooks
│   └── useProducts.js  # Product data management
├── services/           # API and external services
│   └── api.js          # API client and utilities
├── styles/             # Global styles and utilities
└── utils/              # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-product-catalog.git
   cd react-product-catalog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Deployment to GitHub Pages

```bash
npm run deploy
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Design Features

- **Modern Color Palette**: Professional blue and gray color scheme
- **Typography**: Inter font family for excellent readability
- **Animations**: Smooth hover effects and transitions
- **Loading States**: Elegant loading spinners and skeleton screens
- **Error Handling**: User-friendly error messages with retry options

## 🔧 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) to fetch:

- Product listings
- Individual product details
- Product categories
- Product ratings and reviews

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus indicators

## 🚀 Performance Optimizations

- Code splitting with dynamic imports
- Image lazy loading
- Bundle optimization with Rollup
- CSS minification
- Tree shaking for unused code
- Efficient re-rendering with React hooks

## 🧪 Code Quality

- **ESLint**: Code linting and formatting
- **Functional Components**: Modern React patterns
- **Custom Hooks**: Reusable logic extraction
- **Error Boundaries**: Graceful error handling
- **TypeScript Ready**: Easy migration path to TypeScript

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- Design inspiration from modern e-commerce platforms

---

⭐ If you found this project helpful, please give it a star on GitHub!
