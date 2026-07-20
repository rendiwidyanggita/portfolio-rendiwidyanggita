export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 w-full py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-headline font-bold text-on-surface">
          Rendi Widya Anggita
        </div>
        <div className="text-sm font-body text-on-surface-variant order-3 md:order-2 text-center md:text-left">
          © 2026 Rendi Widya Anggita. All rights reserved.
        </div>
        <div className="flex items-center gap-6 order-2 md:order-3">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 font-label text-xs"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg">code</span>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 font-label text-xs"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg">work</span>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 font-label text-xs"
            href="mailto:rendiwidya@example.com"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
