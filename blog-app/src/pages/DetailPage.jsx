import { useParams, useNavigate } from '@tanstack/react-router';
import { getBlogPost } from '../data';
import '../styles/pages.css';

export function DetailPage() {
  const params = useParams({ from: '/blog/$postId' });
  const navigate = useNavigate();
  const post = getBlogPost(params.postId);

  if (!post) {
    return (
      <div className="error-container">
        <h2>Post not found</h2>
        <p>Sorry, we couldn't find the blog post you're looking for.</p>
        <button onClick={() => navigate({ to: '/' })} className="back-btn">
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <button
        onClick={() => navigate({ to: '/' })}
        className="back-btn"
      >
        ← Back to Home
      </button>

      <article className="post-detail">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta-detail">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>
        </header>

        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <footer className="post-footer">
          <button
            onClick={() => navigate({ to: -1 })}
            className="back-btn"
          >
            ← Go Back
          </button>
        </footer>
      </article>
    </div>
  );
}
