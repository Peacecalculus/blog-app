# Blog Application with React & Tanstack Router

A modern blog application built with React, Tanstack Router, demonstrating advanced routing patterns, error handling, and code optimization.

## Features

✨ **Core Features:**
- **Home Page** - Display list of blog posts with titles and excerpts
- **Detail Page** - View full blog post content
- **Navigation** - Seamless routing between pages with back button support
- **404 Error Handling** - Custom fallback page for non-existent routes
- **Error Boundary** - Graceful error handling with user-friendly fallback UI
- **Suspense & Lazy Loading** - Code splitting with loading states

## Tech Stack

- **React 18.2** - UI library
- **Tanstack Router** - Modern routing solution
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## Project Structure

```
blog-app/
├── src/
│   ├── components/
│   │   └── RootLayout.jsx      # Main layout with navbar and footer
│   ├── pages/
│   │   ├── HomePage.jsx        # Home page with blog posts list
│   │   ├── DetailPage.jsx      # Detail page for single post
│   │   └── NotFoundPage.jsx    # 404 page
│   ├── styles/
│   │   ├── global.css          # Global styles
│   │   ├── layout.css          # Layout styles
│   │   └── pages.css           # Page-specific styles
│   ├── ErrorBoundary.jsx       # Error boundary component
│   ├── data.js                 # Mock blog posts data
│   ├── router.jsx              # Tanstack Router configuration
│   ├── main.jsx                # Application entry point
│   └── App.jsx                 # Main app component
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Project dependencies
└── README.md                   # This file

```

## Installation & Setup

### Method 1: Local Development

1. **Clone/Download the project**
   ```bash
   cd blog-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Method 2: Stackblitz (Recommended for Online IDE)

1. Go to [Stackblitz.com](https://stackblitz.com)
2. Click "Create New" → "Vite"
3. Replace the files with the ones from this project
4. Dependencies will install automatically
5. Application starts on a live preview

### Method 3: CodeSandbox

1. Go to [CodeSandbox.com](https://codesandbox.io)
2. Create new Vite project
3. Upload/paste all files from this project
4. The preview will show immediately

## How to Deploy on Stackblitz

1. Go to https://stackblitz.com
2. Click **Create New Project** → **Vite**
3. Delete default files
4. Copy all files from `src/` folder
5. Create the same folder structure
6. Edit `package.json` to match our dependencies
7. Stackblitz will auto-install and run

Your live link will be: `https://stackblitz.com/edit/{your-project-id}`

## Features Explained

### 1. **Error Boundary**
Catches runtime errors in child components and displays a fallback UI:
```jsx
<ErrorBoundary>
  <RouterProvider router={router} />
</ErrorBoundary>
```

### 2. **Suspense & Code Splitting**
Loading states while components render:
```jsx
<Suspense fallback={<Loading />}>
  <Outlet />
</Suspense>
```

### 3. **Tanstack Router Configuration**
Type-safe routing with route parameters:
```jsx
const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$postId',
  component: DetailPage,
});
```

### 4. **Navigation**
Programmatic navigation with `useNavigate`:
```jsx
const navigate = useNavigate();
navigate({ to: `/blog/${post.id}` });
```

### 5. **404 Handling**
Wildcard route catches undefined paths:
```jsx
const notFoundRoute = createRoute({
  path: '*',
  component: NotFoundPage,
});
```

## Sample Blog Posts

The app includes 4 sample posts:
1. Getting Started with React
2. Understanding Tanstack Router
3. Mastering Error Boundaries
4. React Suspense and Code Splitting

## Styling

- **Responsive Design** - Mobile-first approach with media queries
- **Modern UI** - Gradient backgrounds, smooth animations, hover effects
- **Glassmorphism** - Frosted glass effect on navbar
- **Color Scheme** - Purple gradient theme (#667eea to #764ba2)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

✅ Code splitting with lazy loading  
✅ Efficient routing with Tanstack Router  
✅ CSS animations for smooth UX  
✅ Optimized for mobile devices  
✅ Error boundaries for stability  

## Learning Resources

- [Tanstack Router Docs](https://tanstack.com/router/latest)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS Tricks](https://css-tricks.com)

## Troubleshooting

**Issue: Blank page**
- Check browser console for errors
- Ensure index.html references correct root div id

**Issue: Navigation not working**
- Verify router.jsx has all routes defined
- Check route paths match your components

**Issue: Styles not loading**
- Ensure CSS files are imported in components
- Check CSS file paths are correct

## Future Enhancements

- Add blog post search functionality
- Implement pagination
- Add comments section
- User authentication
- Database integration
- Dark mode toggle

## License

MIT

## Support

For issues or questions, check the error console and review the code comments.

---

**Happy Coding! 🚀**

Build amazing React apps with Tanstack Router!
