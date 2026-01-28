import { useNavigate } from '@tanstack/react-router';
import '../styles/pages.css';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className="not-found-actions">
          <button
            onClick={() => navigate({ to: '/' })}
            className="primary-btn"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate({ to: -1 })}
            className="secondary-btn"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
