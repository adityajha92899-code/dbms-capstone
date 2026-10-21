import { useState } from "react";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, user } = useAuth();
  const navigate        = useNavigate();
  const from            = useLocation().state?.from || "/";
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // FIX: calling navigate() during render is a React anti-pattern (warns, can loop)
  if (user && !loading) return <Navigate to={from} replace />;

  const validate = () => {
    const e = {};
    if (!name.trim() || name.trim().length < 2)   e.name  = "Name must be at least 2 characters.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email address.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // simulate auth
    login(name.trim(), email.trim());
    navigate(from, { replace: true });
  };

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      {/* BG decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-brand-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-brand-500/15 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-sm relative z-10 animate-slide-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-5xl block mb-3 drop-shadow-[0_0_20px_rgba(229,0,0,.8)]">🎬</span>
          <h1 className="font-display text-5xl text-gradient tracking-widest">AJ CINEMA</h1>
          <p className="text-zinc-500 text-sm mt-1">Sign in to save your favorites</p>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl p-8 shadow-2xl shadow-black/50">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                placeholder="Your name"
                className={`input ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
                placeholder="you@example.com"
                className={`input ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-base mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in...</>
              ) : (
                "Sign In →"
              )}
            </button>
          </form>

          <p className="text-center text-zinc-600 text-xs mt-6">
            No account needed — just enter your name & email.
          </p>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-4">
          <Link to="/" className="hover:text-zinc-400 transition-colors">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
