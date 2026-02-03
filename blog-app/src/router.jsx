import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import React from "react";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
// DELETE the ProfilePage import line that was here

// Root Route
const rootRoute = createRootRoute({
  component: () => <RootLayout />,
});

// Index Route (Home Page)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

// Blog Detail Route
const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$postId",
  component: DetailPage,
});

// Not Found Route
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFoundPage,
});

// 1. Ensure profileRoute is NOT in this array
const routeTree = rootRoute.addChildren([
  indexRoute,
  blogDetailRoute,
  notFoundRoute,
]);

// Create Router
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
});
