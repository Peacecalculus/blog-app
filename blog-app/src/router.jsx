import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import React, { Suspense } from 'react';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './ErrorBoundary';

// Loading component
const Loading = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <p>Loading...</p>
  </div>
);

// Root Route
const rootRoute = createRootRoute({
  component: () => <RootLayout />,
});

// Index Route (Home Page)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// Blog Detail Route with params
const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$postId',
  component: DetailPage,
});

// Not Found Route
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

// Create Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  blogDetailRoute,
  notFoundRoute,
]);

// Create Router
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  defaultErrorComponent: ({ error }) => (
    <div style={{ padding: '2rem' }}>
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  ),
});
