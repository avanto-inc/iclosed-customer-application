// Public layout: wraps login, set-password, and intake root
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      {/* Header strip */}
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          {/* Logo */}
          <span
            className="text-[var(--color-primary)] font-bold italic text-xl leading-none"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            i
          </span>
          <span className="text-[var(--color-text-heading)] font-bold text-xl leading-none tracking-tight -ml-0.5">
            Closed
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>

      <footer className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} iClosed. All rights reserved.
      </footer>
    </div>
  );
}
