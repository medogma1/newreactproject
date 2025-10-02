import './LoadingSpinner.css';

/**
 * LoadingSpinner Component
 * Displays a loading spinner with optional message
 * @param {string} message - Optional loading message
 * @param {string} size - Size variant: 'small', 'medium', 'large'
 */
const LoadingSpinner = ({ message = "Loading...", size = "medium" }) => {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {message && (
        <p className="loading-message">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;