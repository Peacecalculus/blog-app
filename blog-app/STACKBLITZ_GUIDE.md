# Setup Instructions for Stackblitz/CodeSandbox

## Quick Start on Stackblitz

### Step 1: Go to Stackblitz
- Visit https://stackblitz.com
- Click **"Create New"** button
- Select **"Vite"** project type

### Step 2: Install Dependencies
Edit your `package.json` to include:
```json
{
  "name": "blog-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tanstack/react-router": "^1.16.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9"
  }
}
```

### Step 3: File Structure
Create this folder structure:
```
blog-app/
├── src/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── ErrorBoundary.jsx
│   ├── data.js
│   ├── router.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

### Step 4: Copy All Files
1. Copy each file from the `src/` folder to Stackblitz
2. Create the same folder structure
3. Files will auto-sync and install dependencies

### Step 5: Run the App
- Stackblitz automatically starts the dev server
- Click the preview button to see your app
- Make changes and see live updates

## Alternative: CodeSandbox

1. Go to https://codesandbox.io
2. Click **"Create Sandbox"** → **"Import"**
3. Upload your `blog-app` folder
4. CodeSandbox will detect it's a Vite project
5. App starts automatically in preview

## File Content Summary

### Core Files:
- **main.jsx** - Application entry point
- **router.jsx** - Tanstack Router setup
- **ErrorBoundary.jsx** - Error handling
- **data.js** - Mock blog data

### Pages:
- **HomePage.jsx** - Lists all blog posts
- **DetailPage.jsx** - Shows single post
- **NotFoundPage.jsx** - 404 error page

### Components:
- **RootLayout.jsx** - Main layout with nav/footer

### Styles:
- **global.css** - Global styles
- **layout.css** - Layout and navbar
- **pages.css** - Page-specific styles

## Deployment Options

### Option 1: Stackblitz Live Link
After creating project on Stackblitz:
- Your live link: `https://stackblitz.com/edit/{project-id}`
- Share this link with others
- It's instantly deployed!

### Option 2: CodeSandbox Live Link
After importing on CodeSandbox:
- Live link is automatically generated
- Click **"Share"** button for embed/links
- Format: `https://codesandbox.io/s/{sandbox-id}`

### Option 3: Deploy to Production
```bash
# Build
npm run build

# Deploy with Vercel (Recommended)
npm i -g vercel
vercel

# Or GitHub Pages, Netlify, etc.
```

## Troubleshooting

### Dependencies won't install
- Clear node_modules cache
- Restart the editor
- Check package.json syntax

### App shows blank page
- Open dev tools (F12)
- Check for console errors
- Verify index.html has `<div id="root"></div>`

### Routes not working
- Check router.jsx file
- Verify route paths are correct
- Ensure components are imported

### Styles not loading
- Check CSS file imports in components
- Verify CSS file paths are relative
- Check for CSS syntax errors

## Tips & Tricks

1. **Live Share**: Stackblitz has built-in live collaboration
2. **Git Integration**: Connect GitHub repo for version control
3. **Terminal Access**: Use Stackblitz terminal for npm commands
4. **Download Project**: Export as ZIP from Stackblitz
5. **Custom Domain**: Upgrade for custom domain on Stackblitz Pro

## Next Steps

1. Explore the code and understand the structure
2. Modify blog posts in `data.js`
3. Add new features (search, pagination, etc.)
4. Deploy to production
5. Share your live link!

---

**You're all set! Your blog app is ready to go! 🎉**
