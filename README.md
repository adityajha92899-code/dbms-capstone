# 🎬 AJ CINEMA — Movie Discovery App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://dbms-capstone-96t7.vercel.app/)

🔗 **Live Deployment**: [https://dbms-capstone-96t7.vercel.app/](https://dbms-capstone-96t7.vercel.app/)

A React movie discovery platform powered by the TMDB API: cinematic hero carousel, Netflix-style rows,
search & filters, favorites, and a personal taste dashboard.

## Setup
```bash
cp .env.example .env
npm install
npm run dev
```

## Features
- Auto-rotating hero carousel with Ken Burns zoom · 🎲 Surprise Me random pick
- Horizontal scrolling rows (Trending / Popular / Top Rated / Coming Soon)
- Debounced search, genre chips, sort & year filters, pagination
- Favorites (persisted) + dashboard with taste persona, genre / rating / decade charts
- Movie detail: trailer modal (Esc to close), cast, director, similar titles
- Keyboard: press `/` to focus search

## Stack
React 18 · Vite · Redux Toolkit · React Router 6 · Tailwind CSS · Recharts · Axios
