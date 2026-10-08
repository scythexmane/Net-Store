# Net Store

A responsive e-commerce frontend built with React, Vite, React Router, Tailwind CSS, and Framer Motion.

**Live Demo:** https://net-store-dev.vercel.app/

![Net Store screenshot](docs/screenshot.png)

## Features

- Responsive product catalog
- Product search, category filtering, and price filtering
- Product detail pages
- Persistent cart with quantity controls
- Loading, error, and empty states
- Accessible navigation and form controls
- Lightweight page and product animations
- Fake Store API integration

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Fake Store API

## Getting started

Requirements: Node.js 18+ and npm.

    npm install
    npm run dev

Create a production build with:

    npm run build
    npm run preview

Quality checks:

    npm run lint
    npm run format:check

## Project structure

    src/
    ├── components/   # Shared UI components
    ├── data/         # API requests and product formatting
    ├── hooks/        # Shared application state
    ├── pages/        # Route-level screens
    ├── App.jsx       # Application routes and layout
    └── index.css     # Global styles and accessibility defaults

## What I learned

This project helped me practice React component composition, client-side routing, API requests, shared state, localStorage persistence, responsive layouts, loading and error handling, and accessible UI states.

## Future improvements

- Connect checkout and contact forms to a backend
- Add automated component and end-to-end tests
- Replace the demo API with a real product service
- Add pagination and server-side filtering

## Note

Net Store is a learning project. Product data comes from the public Fake Store API, and checkout is intentionally not implemented.