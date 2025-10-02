import './ErrorMessage.css';

/**
 * ErrorMessage Component
 * Displays error messages with optional retry functionality
 * @param {string} message - Error message to display
 * @param {function} onRetry - Optional retry function
 * @param {string} type - Error type: 'error', 'warning', 'info'
 */
const ErrorMessage = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry = null,
  type = "error" 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="m12 17 .01 0"/>
          </svg>
        );
      case 'info':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m12 16-4-4 4-4"/>
            <path d="m16 12H8"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m15 9-6 6"/>
            <path d="m9 9 6 6"/>
          </svg>
        );
    }
  };

  return (
    <div className={`error-message ${type}`}>
      <div className="error-content">
        <div className="error-icon">
          {getIcon()}
        </div>
        <div className="error-text">
          <h3 className="error-title">
            {type === 'warning' ? 'Warning' : type === 'info' ? 'Information' : 'Error'}
          </h3>
          <p className="error-description">{message}</p>
        </div>
      </div>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="retry-button"
          aria-label="Retry the failed operation"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M3 21v-5h5"/>
          </svg>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;