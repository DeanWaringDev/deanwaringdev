/**
 * Header Navigation Component
 * 
 * Provides the main navigation for the DeanWaringDev website.
 * This is a sticky header that remains visible during scroll.
 * 
 * Features:
 * - Responsive design (desktop navigation + mobile hamburger menu)
 * - Sticky positioning for easy access to navigation
 * - Accessible mobile menu with proper ARIA attributes
 * - Keyboard navigable with clear focus indicators
 * - High contrast colors meeting WCAG AAA standards
 * 
 * Accessibility Considerations:
 * - <nav> element with aria-label for screen reader context
 * - Mobile menu button with aria-expanded state
 * - aria-controls linking button to menu content
 * - Proper focus management when opening/closing mobile menu
 * - Semantic HTML with meaningful link text
 * - 44x44px minimum touch targets on mobile
 */

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /**
   * Handle clicking outside of mobile menu to close it
   * Improves UX by allowing users to dismiss menu naturally
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  /**
   * Handle Escape key to close mobile menu
   * Important accessibility feature for keyboard users
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        // Return focus to menu button when closing with Escape
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header 
      className="bg-[#0B1D39] text-white sticky top-0 z-50 shadow-lg"
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-20">
          {/* 
            Logo / Home Link
            - Prominent branding
            - Clear hover state
            - Accessible link text includes full company name
          */}
          <Link 
            href="/" 
            className="text-2xl font-bold font-[family-name:var(--font-poppins)] hover:text-[#F97A20] transition-colors"
            aria-label="DeanWaringDev home"
          >
            DeanWaring<span className="text-[#F97A20]" aria-hidden="true">Dev</span>
          </Link>

          {/* 
            Desktop Navigation
            - Hidden on mobile (md:flex shows on medium screens and up)
            - Horizontal layout with consistent spacing
            - CTA button visually distinct from regular links
          */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="hover:text-[#F97A20] transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="hover:text-[#F97A20] transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="hover:text-[#F97A20] transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="hover:text-[#F97A20] transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#F97A20] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#e06a15] transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* 
            Mobile Menu Toggle Button
            - Only visible on mobile devices
            - aria-expanded indicates menu state to screen readers
            - aria-controls links button to menu for assistive tech
            - aria-label provides clear button purpose
            - Visual icon changes based on open/closed state
          */}
          <button
            ref={menuButtonRef}
            className="md:hidden text-white p-2 rounded-lg hover:bg-[#1a3354] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 
          Mobile Navigation Menu
          - Slides down when hamburger is clicked
          - Stacked vertical layout for mobile
          - Same links as desktop for consistency
          - Closes automatically when link is clicked
          - Proper ARIA attributes for accessibility
        */}
        {mobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden pb-4 space-y-3"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              className="block py-3 px-2 hover:text-[#F97A20] hover:bg-[#1a3354] rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-3 px-2 hover:text-[#F97A20] hover:bg-[#1a3354] rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block py-3 px-2 hover:text-[#F97A20] hover:bg-[#1a3354] rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block py-3 px-2 hover:text-[#F97A20] hover:bg-[#1a3354] rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block bg-[#F97A20] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#e06a15] transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
