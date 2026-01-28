import React from 'react';

export const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to build your first component...',
    content: `React is a JavaScript library for building user interfaces with reusable components. 
    
In this comprehensive guide, we'll explore:
- JSX syntax and how it works
- Components and their lifecycle
- Hooks and state management
- Props and their usage
- Event handling in React

React makes it easy to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Key concepts:
1. Components are the building blocks of React applications
2. Props allow data to flow from parent to child components
3. State allows components to manage their own data
4. Hooks provide a way to use state and other features in functional components

Let's start coding and building amazing React applications!`,
    author: 'John Developer',
    date: '2026-01-15'
  },
  {
    id: 2,
    title: 'Understanding Tanstack Router',
    excerpt: 'Discover the modern way of routing in React applications...',
    content: `Tanstack Router is a powerful, modern routing library for React that provides a file-based routing system inspired by Next.js.

Why choose Tanstack Router?
- Type-safe routing with TypeScript support
- Modern API with hooks integration
- Dynamic route matching and parameters
- Built-in error handling and fallbacks
- Lazy loading and code splitting

Key features:
1. File-based routing for better organization
2. Type-safe route definitions
3. Built-in error boundaries
4. Route guards and middleware support
5. Excellent developer experience

Tanstack Router simplifies complex routing scenarios and provides a better developer experience compared to traditional routing solutions. It's the future of React routing!

Getting started is easy - just install @tanstack/react-router and follow the examples in the documentation.`,
    author: 'Jane Router',
    date: '2026-01-10'
  },
  {
    id: 3,
    title: 'Mastering Error Boundaries',
    excerpt: 'Learn how to handle errors gracefully in your React applications...',
    content: `Error boundaries are a powerful feature in React that help you handle errors gracefully and improve user experience.

What are Error Boundaries?
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree. They allow you to display a fallback UI instead of crashing the entire application.

When to use Error Boundaries:
- Catching rendering errors
- Handling errors during lifecycle methods
- Displaying user-friendly error messages
- Graceful degradation of features

How to implement:
1. Create a class component
2. Implement componentDidCatch lifecycle method
3. Add error state and fallback UI
4. Wrap your app or sections with the boundary

Important notes:
- Error boundaries don't catch errors in event handlers (use try/catch)
- They don't catch async code errors
- They don't catch server-side rendering errors
- They don't catch errors in the error boundary itself

By implementing error boundaries, you create more robust applications that handle errors gracefully.`,
    author: 'Error Handler',
    date: '2026-01-05'
  },
  {
    id: 4,
    title: 'React Suspense and Code Splitting',
    excerpt: 'Optimize your React app performance with lazy loading...',
    content: `Suspense is a feature that lets your components "wait" for something before they can render. Combined with React.lazy, you can implement code splitting.

Benefits of Code Splitting:
- Reduce initial bundle size
- Lazy load components on demand
- Improved page load performance
- Better caching strategies

How Suspense Works:
1. Lazy load components using React.lazy()
2. Wrap with Suspense boundary
3. Provide a fallback UI
4. Components load on demand

Implementation Steps:
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}

Best Practices:
- Keep fallback UI simple and fast
- Combine with route-based code splitting
- Monitor bundle size
- Test lazy loading in production

Suspense is essential for building performant React applications!`,
    author: 'Perf Master',
    date: '2026-01-01'
  }
];

export const getBlogPost = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
