import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import React, { lazy, Suspense } from 'react';
import { RootLayout } from './components/RootLayout';
import { DetailPage } from './pages/DetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Requirement: Implement Lazy Loading
const LazyHomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));

// Root Route
const rootRoute = createRootRoute({
  component: () => (
    // Requirement: Implement Suspense wrapper
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
      <RootLayout />
    </Suspense>
  ),
});

// Index Route (Home Page) using the Lazy component
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LazyHomePage,
});

// Blog Detail Route with params
const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$postId',
  component: DetailPage,
});

// Create Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  blogDetailRoute,
]);

// Create Router
export const router = createRouter({
  routeTree,
  // Requirement: Handle 404 errors
  defaultNotFoundComponent: NotFoundPage,
  // Requirement: Implement Error Boundary (Default Error Component)
  defaultErrorComponent: ({ error }) => (
    <div style={{ padding: '2rem', color: 'red' }}>
      <h2>Application Error</h2>
      <p>{error.message}</p>
    </div>
  ),
});