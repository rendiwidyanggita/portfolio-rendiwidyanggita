"use client";

import { useEffect } from "react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dimmed Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="relative bg-surface-container-lowest rounded-xl shadow-md w-full max-w-[450px] overflow-hidden border border-surface-container-low z-10 animate-[fade-in_0.3s_ease-out]">
        {/* Header */}
        <div className="flex justify-between items-start p-6 pb-2 border-b border-surface-variant/50">
          <div>
            <h2 className="text-2xl font-headline font-bold text-on-surface tracking-tight">Get in Touch</h2>
            <p className="text-on-surface-variant text-sm font-body mt-2 leading-relaxed">
              Feel free to reach out through any of these channels
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 -mt-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <span className="material-symbols-outlined text-xl" data-weight="fill">
              close
            </span>
          </button>
        </div>
        
        {/* Contact Options */}
        <div className="p-6 space-y-4">
          {/* Email Option */}
          <a
            className="group flex items-center p-4 rounded-lg border border-surface-variant bg-surface hover:bg-surface-container-low hover:border-outline-variant transition-all duration-300"
            href="mailto:rendiwidya@example.com"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/30 text-primary group-hover:bg-primary-container/50 transition-colors">
              <span className="material-symbols-outlined text-[24px]">mail</span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-label font-medium text-on-surface-variant uppercase tracking-wider">
                Email
              </div>
              <div className="text-base font-headline font-medium text-on-surface group-hover:text-primary transition-colors">
                rendiwidya@example.com
              </div>
            </div>
          </a>
          
          {/* LinkedIn Option */}
          <a
            className="group flex items-center p-4 rounded-lg border border-surface-variant bg-surface hover:bg-surface-container-low hover:border-outline-variant transition-all duration-300"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5]/20 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm font-label font-medium text-on-surface-variant uppercase tracking-wider">
                LinkedIn
              </div>
              <div className="text-base font-headline font-medium text-on-surface group-hover:text-[#0077b5] transition-colors">
                Rendi Widya Anggita
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
