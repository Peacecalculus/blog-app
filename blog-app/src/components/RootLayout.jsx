import React, { Suspense } from 'react';
import { Outlet, Link } from '@tanstack/react-router';
import '../styles/layout.css';

export function RootLayout() {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/" className="logo">
            📚 Blog App
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <main className="main-content">
          <Outlet />
        </main>
      </Suspense>

      <footer className="footer">
        <p>&copy; 2026 Blog Application. Built with React & Tanstack Router.</p>
      </footer>
    </div>
  );
}
