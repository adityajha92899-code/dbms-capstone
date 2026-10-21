import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import PageLoader from "./components/PageLoader";
import { useAuth } from "./context/AuthContext";

// Lazy loaded pages
const Home       = lazy(() => import("./pages/Home"));
const Search     = lazy(() => import("./pages/Search"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const Favorites  = lazy(() => import("./pages/Favorites"));
const Login      = lazy(() => import("./pages/Login"));
const Dashboard  = lazy(() => import("./pages/Dashboard"));

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  return user ? children : <Navigate to="/login" replace state={{ from: location.pathname }} />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-body">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/search"      element={<Search />} />
            <Route path="/movie/:id"   element={<MovieDetail />} />
            <Route path="/login"       element={<Login />} />
            <Route path="/favorites"   element={
              <ProtectedRoute><Favorites /></ProtectedRoute>
            } />
            <Route path="/dashboard"   element={
              <ProtectedRoute><Dashboard /></ProtectedRoute>
            } />
            <Route path="*"            element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
