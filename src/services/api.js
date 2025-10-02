/**
 * API Service for Fake Store API
 * Handles all HTTP requests with proper error handling and response formatting
 */

const BASE_URL = 'https://fakestoreapi.com';

/**
 * Generic API request handler with error handling
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} - API response data
 */
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

/**
 * Product API methods
 */
export const productAPI = {
  /**
   * Get all products
   * @returns {Promise<Array>} Array of products
   */
  getAllProducts: () => apiRequest('/products'),

  /**
   * Get product by ID
   * @param {number} id - Product ID
   * @returns {Promise<Object>} Product object
   */
  getProductById: (id) => apiRequest(`/products/${id}`),

  /**
   * Get products by category
   * @param {string} category - Category name
   * @returns {Promise<Array>} Array of products in category
   */
  getProductsByCategory: (category) => apiRequest(`/products/category/${category}`),

  /**
   * Get all categories
   * @returns {Promise<Array>} Array of category names
   */
  getCategories: () => apiRequest('/products/categories'),

  /**
   * Get limited number of products
   * @param {number} limit - Number of products to fetch
   * @returns {Promise<Array>} Array of products
   */
  getLimitedProducts: (limit) => apiRequest(`/products?limit=${limit}`),
};

/**
 * Helper function to format price
 * @param {number} price - Price value
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

/**
 * Helper function to truncate text
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export default productAPI;