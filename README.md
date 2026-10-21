# 🎬 AJ CINEMA — Movie Discovery App

A React movie discovery platform powered by the TMDB API: cinematic hero carousel, Netflix-style rows,
search & filters, favorites, and a personal taste dashboard.

## Setup
```bash
cp .env.example .env      # add your free TMDB key (https://www.themoviedb.org/settings/api)
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
