/**
 * Footer Component
 * 
 * Provides site-wide footer with navigation, social links, and copyright information.
 * Uses semantic HTML5 <footer> element for proper document structure.
 * 
 * Features:
 * - Company information and tagline
 * - Social media links (GitHub, LinkedIn)
 * - Quick navigation links
 * - Contact information
 * - Copyright notice with dynamic year
 * 
 * Accessibility Considerations:
 * - Proper heading hierarchy (h2 for sections within footer)
 * - aria-label on social icons for screen reader users
 * - High contrast text colors (light on dark background)
 * - List structure for navigation items (semantic HTML)
 * - External links open in new tab with rel="noopener noreferrer"
 * - SVG icons have aria-hidden since adjacent text provides context
 * - Keyboard navigable with visible focus indicators
 */

import Link from "next/link";

export default function Footer() {
  // Dynamic copyright year - always current
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0B1D39] text-white"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 
            Company Information Section
            - Spans 2 columns on larger screens for prominence
            - Includes brand name, description, and social links
          */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              DeanWaring<span className="text-[#F97A20]" aria-hidden="true">Dev</span>
            </h2>
            <p className="text-[#EFE9E1] mb-4 max-w-md leading-relaxed">
              Professional software development services delivering high-quality mobile apps, 
              web applications, and custom solutions for businesses. Building accessible, 
              scalable software that makes a difference.
            </p>
            
            {/* 
              Social Media Links
              - External links open in new tabs
              - rel="noopener noreferrer" for security
              - aria-label provides context for screen readers
              - SVG icons marked as decorative with aria-hidden
              - 44x44px touch targets for accessibility
            */}
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a 
                href="https://github.com/DeanWaringDev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors p-2 rounded-lg hover:bg-[#1a3354]"
                aria-label="Visit DeanWaringDev on GitHub (opens in new tab)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/deanwaring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors p-2 rounded-lg hover:bg-[#1a3354]"
                aria-label="Connect with DeanWaringDev on LinkedIn (opens in new tab)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 
            Quick Links Section
            - Site navigation for easy footer access
            - Semantic list structure
          */}
          <nav aria-label="Footer quick links">
            <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-poppins)]">Quick Links</h2>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  href="/" 
                  className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors inline-block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors inline-block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors inline-block py-1"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors inline-block py-1"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* 
            Contact Information Section
            - Email link uses mailto: protocol
            - Phone numbers would also go here if applicable
          */}
          <nav aria-label="Contact information">
            <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-poppins)]">Get in Touch</h2>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  href="/contact" 
                  className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors inline-block py-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@deanwaringdev.com" 
                  className="text-[#EFE9E1] hover:text-[#F97A20] transition-colors inline-block py-1"
                >
                  hello@deanwaringdev.com
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* 
          Copyright Section
          - Separated from main footer content with border
          - Dynamic year prevents outdated copyright notices
        */}
        <div className="border-t border-[#5A6872] mt-8 pt-8 text-center text-[#EFE9E1]">
          <p>
            <span className="sr-only">Copyright</span>
            &copy; {currentYear} DeanWaringDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
