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
            href="https://github.com/rendiwidyanggita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 font-label text-xs"
            href="https://linkedin.com/in/rendiwidyanggita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 font-label text-xs"
            href="mailto:rendiwidyanggita@gmail.com"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.866l5.6-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
