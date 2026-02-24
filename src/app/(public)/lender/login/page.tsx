"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  BarChart2,
  Users,
  ClipboardList,
} from "lucide-react";

export default function LenderLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="lender-root">
      {/* ── Left branding panel ── */}
      <aside className="lender-aside">
        <div className="lender-blob lender-blob-1" />
        <div className="lender-blob lender-blob-2" />

        <div className="lender-aside-content">
          {/* Logo */}
          <div className="lender-aside-logo">
            <span className="lender-logo-i">i</span>
            <span className="lender-logo-closed">Closed</span>
          </div>

          <div className="lender-badge">Lender Portal</div>

          <h2 className="lender-aside-heading">
            Your lending dashboard,
            <br />
            all in one place.
          </h2>
          <p className="lender-aside-sub">
            Manage borrower transactions, review closing documents, and track
            deal progress across your entire portfolio.
          </p>

          <ul className="lender-feature-list">
            <li className="lender-feature-item">
              <BarChart2 size={16} className="lender-feature-icon" />
              Real-time deal tracking
            </li>
            <li className="lender-feature-item">
              <Users size={16} className="lender-feature-icon" />
              Borrower management hub
            </li>
            <li className="lender-feature-item">
              <ClipboardList size={16} className="lender-feature-icon" />
              Document review &amp; approvals
            </li>
          </ul>
        </div>

        <p className="lender-aside-footer">
          © {new Date().getFullYear()} iClosed · All rights reserved
        </p>
      </aside>

      {/* ── Right form panel ── */}
      <main className="lender-main">
        <div className="lender-form-card">
          {/* Mobile logo */}
          <div className="lender-mobile-logo">
            <span
              className="lender-logo-i"
              style={{ color: "var(--color-primary)" }}
            >
              i
            </span>
            <span
              className="lender-logo-closed"
              style={{ color: "var(--color-text-heading)" }}
            >
              Closed
            </span>
          </div>

          <div className="lender-form-header">
            <div className="lender-portal-tag">Lender Portal</div>
            <h1 className="lender-form-title">Sign in to your account</h1>
            <p className="lender-form-subtitle">
              Manage your lending operations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lender-form" noValidate>
            {/* Email */}
            <div className="lender-field-group">
              <label htmlFor="lender-email" className="lender-field-label">
                Lender Email
              </label>
              <div className="lender-input-wrapper">
                <Mail size={16} className="lender-input-icon" />
                <input
                  id="lender-email"
                  type="email"
                  autoComplete="email"
                  placeholder="lender@firm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="lender-field-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="lender-field-group">
              <div className="lender-label-row">
                <label htmlFor="lender-password" className="lender-field-label">
                  Password
                </label>
                <a href="/forgot-password" className="lender-forgot-link">
                  Forgot password?
                </a>
              </div>
              <div className="lender-input-wrapper">
                <Lock size={16} className="lender-input-icon" />
                <input
                  id="lender-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="lender-field-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="lender-toggle-pw"
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
              className={`lender-btn-primary${loading ? " lender-btn-loading" : ""}`}
            >
              {loading ? (
                <span className="lender-spinner" />
              ) : (
                <>
                  Sign In as Lender
                  <ArrowRight size={16} className="lender-btn-arrow" />
                </>
              )}
            </button>
          </form>

          {/* Customer portal link */}
          <p className="lender-customer-link">
            Are you a borrower?{" "}
            <a href="/login">Sign in to Customer Portal →</a>
          </p>
        </div>
      </main>

      <style>{`
        /* ─── Layout ─── */
        .lender-root {
          display: flex;
          min-height: 100vh;
          background: var(--color-bg);
        }

        /* ─── Left aside — navy/dark theme ─── */
        .lender-aside {
          position: relative;
          width: 420px;
          min-height: 100vh;
          background: linear-gradient(145deg, #1a2744 0%, #0f1a33 55%, #080f1f 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.5rem 2rem;
          overflow: hidden;
          flex-shrink: 0;
        }

        .lender-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          pointer-events: none;
        }
        .lender-blob-1 {
          width: 340px;
          height: 340px;
          background: #c0392b;
          top: -90px;
          right: -110px;
        }
        .lender-blob-2 {
          width: 260px;
          height: 260px;
          background: #4a7fd4;
          bottom: -70px;
          left: -90px;
        }

        .lender-aside-content {
          position: relative;
          z-index: 1;
          margin-top: 1rem;
        }

        .lender-aside-logo {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 1.5rem;
        }
        .lender-logo-i {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-weight: 800;
          font-size: 2rem;
          color: #c0392b;
          line-height: 1;
        }
        .lender-logo-closed {
          font-weight: 800;
          font-size: 1.6rem;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .lender-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #c0392b;
          background: rgba(192, 57, 43, 0.15);
          border: 1px solid rgba(192, 57, 43, 0.3);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          margin-bottom: 1.5rem;
        }

        .lender-aside-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin: 0 0 1rem;
        }
        .lender-aside-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          margin: 0 0 2.5rem;
        }

        .lender-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .lender-feature-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.82);
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-lg);
          padding: 0.55rem 0.9rem;
        }
        .lender-feature-icon {
          opacity: 0.85;
          flex-shrink: 0;
        }

        .lender-aside-footer {
          position: relative;
          z-index: 1;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }

        /* ─── Right main ─── */
        .lender-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
        }

        .lender-form-card {
          width: 100%;
          max-width: 400px;
        }

        .lender-mobile-logo {
          display: none;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 2rem;
        }

        .lender-form-header {
          margin-bottom: 2rem;
        }
        .lender-portal-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a2744;
          background: rgba(26, 39, 68, 0.08);
          border: 1px solid rgba(26, 39, 68, 0.2);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          margin-bottom: 0.75rem;
        }
        .lender-form-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-text-heading);
          margin: 0 0 0.35rem;
        }
        .lender-form-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* ─── Form ─── */
        .lender-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .lender-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .lender-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .lender-field-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-heading);
          letter-spacing: 0.01em;
        }
        .lender-forgot-link {
          font-size: 0.78rem;
          color: #1a2744;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .lender-forgot-link:hover {
          opacity: 0.7;
        }

        .lender-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .lender-input-icon {
          position: absolute;
          left: 0.85rem;
          color: var(--color-text-muted);
          pointer-events: none;
        }
        .lender-field-input {
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
        .lender-field-input::placeholder {
          color: var(--color-text-muted);
        }
        .lender-field-input:focus {
          border-color: #1a2744;
          box-shadow: 0 0 0 3px rgba(26, 39, 68, 0.1);
          background: #fff;
        }
        .lender-toggle-pw {
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
        .lender-toggle-pw:hover {
          color: var(--color-text-heading);
        }

        /* ─── Primary button — navy ─── */
        .lender-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.78rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          background: #1a2744;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.18s, transform 0.12s, box-shadow 0.18s;
          letter-spacing: 0.01em;
          margin-top: 0.25rem;
          box-shadow: 0 4px 14px rgba(26, 39, 68, 0.3);
          font-family: inherit;
        }
        .lender-btn-primary:hover:not(:disabled) {
          background: #0f1a33;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(26, 39, 68, 0.38);
        }
        .lender-btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }
        .lender-btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .lender-btn-arrow {
          transition: transform 0.15s;
        }
        .lender-btn-primary:hover .lender-btn-arrow {
          transform: translateX(3px);
        }

        .lender-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: lender-spin 0.6s linear infinite;
        }
        @keyframes lender-spin {
          to { transform: rotate(360deg); }
        }

        /* Customer link */
        .lender-customer-link {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .lender-customer-link a {
          color: #1a2744;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .lender-customer-link a:hover {
          opacity: 0.7;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .lender-aside {
            display: none;
          }
          .lender-mobile-logo {
            display: flex;
          }
          .lender-main {
            align-items: flex-start;
            padding-top: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
