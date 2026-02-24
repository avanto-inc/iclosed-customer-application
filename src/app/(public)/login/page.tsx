"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Building2,
  Shield,
  FileCheck,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Auth logic goes here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="login-root">
      {/* ── Left branding panel ── */}
      <aside className="login-aside">
        {/* Decorative blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="aside-content">
          {/* Logo */}
          <div className="aside-logo">
            <span className="logo-i">i</span>
            <span className="logo-closed">Closed</span>
          </div>

          <h2 className="aside-heading">
            Real Estate Closings,
            <br />
            made simple.
          </h2>
          <p className="aside-sub">
            Your secure portal for managing documents, legal support, and every
            step of your transaction — all in one place.
          </p>

          {/* Feature pills */}
          <ul className="feature-list">
            <li className="feature-item">
              <Shield size={16} className="feature-icon" />
              Bank-grade encryption
            </li>
            <li className="feature-item">
              <FileCheck size={16} className="feature-icon" />
              e-Signature ready documents
            </li>
            <li className="feature-item">
              <Building2 size={16} className="feature-icon" />
              Expert legal team on standby
            </li>
          </ul>
        </div>

        <p className="aside-footer">
          © {new Date().getFullYear()} iClosed · All rights reserved
        </p>
      </aside>

      {/* ── Right form panel ── */}
      <main className="login-main">
        <div className="form-card">
          {/* Mobile logo (hidden on desktop) */}
          <div className="mobile-logo">
            <span className="logo-i">i</span>
            <span
              className="logo-closed"
              style={{ color: "var(--color-text-heading)" }}
            >
              Closed
            </span>
          </div>

          <div className="form-header">
            <h1 className="form-title">Welcome back</h1>
            <p className="form-subtitle">Sign in to your customer portal</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form" noValidate>
            {/* Email */}
            <div className="field-group">
              <label htmlFor="email" className="field-label">
                Email address
              </label>
              <div className="input-wrapper">
                <Mail size={16} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="field-group">
              <div className="label-row">
                <label htmlFor="password" className="field-label">
                  Password
                </label>
                <a href="/forgot-password" className="forgot-link">
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <Lock size={16} className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="toggle-pw"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary${loading ? " btn-loading" : ""}`}
            >
              {loading ? (
                <span className="spinner" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} className="btn-arrow" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="divider">
              <span>or</span>
            </div>

            {/* Google SSO */}
            <button type="button" className="btn-google">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                aria-hidden="true"
              >
                <path
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>
          </form>

          {/* Lender portal link */}
          <p className="lender-link">
            Are you a lender?{" "}
            <a href="/lender/login">Sign in to Lender Portal →</a>
          </p>
        </div>
      </main>

      <style>{`
        /* ─── Layout ─── */
        .login-root {
          display: flex;
          min-height: 100vh;
          background: var(--color-bg);
        }

        /* ─── Left aside ─── */
        .login-aside {
          position: relative;
          width: 420px;
          min-height: 100vh;
          background: linear-gradient(145deg, #c0392b 0%, #8b1a12 60%, #5a0d09 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.5rem 2rem;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* decorative blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
          background: #fff;
          pointer-events: none;
        }
        .blob-1 {
          width: 320px;
          height: 320px;
          top: -80px;
          right: -100px;
        }
        .blob-2 {
          width: 240px;
          height: 240px;
          bottom: -60px;
          left: -80px;
        }

        .aside-content {
          position: relative;
          z-index: 1;
          margin-top: 1rem;
        }

        .aside-logo {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 3rem;
        }
        .logo-i {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-weight: 800;
          font-size: 2rem;
          color: #fff;
          line-height: 1;
        }
        .logo-closed {
          font-weight: 800;
          font-size: 1.6rem;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .aside-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin: 0 0 1rem;
        }
        .aside-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          margin: 0 0 2.5rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.88);
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: var(--radius-lg);
          padding: 0.55rem 0.9rem;
        }
        .feature-icon {
          opacity: 0.9;
          flex-shrink: 0;
        }

        .aside-footer {
          position: relative;
          z-index: 1;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }

        /* ─── Right main ─── */
        .login-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
        }

        .form-card {
          width: 100%;
          max-width: 400px;
        }

        /* Mobile-only logo */
        .mobile-logo {
          display: none;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 2rem;
        }
        .mobile-logo .logo-closed {
          color: var(--color-text-heading);
        }
        .mobile-logo .logo-i {
          color: var(--color-primary);
        }

        .form-header {
          margin-bottom: 2rem;
        }
        .form-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-text-heading);
          margin: 0 0 0.35rem;
        }
        .form-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* ─── Form ─── */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .field-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-heading);
          letter-spacing: 0.01em;
        }
        .forgot-link {
          font-size: 0.78rem;
          color: var(--color-primary);
          text-decoration: none;
          transition: color 0.15s;
        }
        .forgot-link:hover {
          color: var(--color-primary-hover);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 0.85rem;
          color: var(--color-text-muted);
          pointer-events: none;
          flex-shrink: 0;
        }
        .field-input {
          width: 100%;
          padding: 0.7rem 2.75rem 0.7rem 2.5rem;
          font-size: 0.875rem;
          color: var(--color-text-heading);
          background: var(--color-bg-alt);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .field-input::placeholder {
          color: var(--color-text-muted);
        }
        .field-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.12);
          background: #fff;
        }
        .toggle-pw {
          position: absolute;
          right: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          padding: 0.25rem;
          border-radius: var(--radius-sm);
          transition: color 0.15s;
        }
        .toggle-pw:hover {
          color: var(--color-text-heading);
        }

        /* ─── Buttons ─── */
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.78rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          background: var(--color-primary);
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.18s, transform 0.12s, box-shadow 0.18s;
          letter-spacing: 0.01em;
          margin-top: 0.25rem;
          box-shadow: 0 4px 14px rgba(192, 57, 43, 0.35);
          font-family: inherit;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--color-primary-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(192, 57, 43, 0.4);
        }
        .btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-arrow {
          transition: transform 0.15s;
        }
        .btn-primary:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* spinner */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text-muted);
          font-size: 0.78rem;
        }
        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* Google button */
        .btn-google {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          width: 100%;
          padding: 0.72rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-text-heading);
          background: #fff;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
          font-family: inherit;
        }
        .btn-google:hover {
          background: var(--color-bg-alt);
          border-color: var(--color-primary-ring);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        /* Lender link */
        .lender-link {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .lender-link a {
          color: var(--color-primary);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .lender-link a:hover {
          color: var(--color-primary-hover);
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .login-aside {
            display: none;
          }
          .mobile-logo {
            display: flex;
          }
          .login-main {
            align-items: flex-start;
            padding-top: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
