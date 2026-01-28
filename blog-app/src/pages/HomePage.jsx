import { useNavigate } from '@tanstack/react-router';
import { blogPosts } from '../data';
import '../styles/pages.css';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="hero">
        <h1>📚 My Blog</h1>
        <p>Explore articles about React, Routing, and Web Development</p>
      </div>

      <div className="posts-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <button
              onClick={() => navigate({ to: `/blog/${post.id}` })}
              className="read-more-btn"
            >
              Read More →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
