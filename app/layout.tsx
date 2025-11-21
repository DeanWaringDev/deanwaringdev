/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire DeanWaringDev website.
 * It handles:
 * - Global font loading (Inter for body, Poppins for headings)
 * - SEO metadata and Open Graph tags
 * - Accessibility features including skip navigation
 * - Consistent header and footer across all pages
 * 
 * Accessibility Features:
 * - Proper language attribute for screen readers
 * - Skip to main content link for keyboard users
 * - Semantic HTML5 structure with ARIA landmarks
 * - Font display swap to prevent FOUT (Flash of Unstyled Text)
 */

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Inter Font Configuration
 * Inter is used for body text throughout the site.
 * - Variable font for better performance
 * - Latin subset for optimal loading
 * - Display swap ensures text is always readable during font load
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

/**
 * Poppins Font Configuration
 * Poppins is used for all headings and emphasis text.
 * - Bold weights (600, 700, 800) for strong hierarchy
 * - Display swap for accessibility
 */
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

/**
 * SEO Metadata
 * Comprehensive metadata for search engines and social media.
 * Includes Open Graph tags for rich social media previews.
 */
export const metadata: Metadata = {
  title: "DeanWaringDev | Professional Software Development Services",
  description: "Professional software development services specializing in mobile apps, web applications, and custom solutions. Building high-quality, scalable software for businesses.",
  keywords: ["software development", "mobile apps", "web development", "custom software", "UK software developer", "accessible software", "WCAG compliant"],
  authors: [{ name: "DeanWaringDev" }],
  robots: "index, follow",
  openGraph: {
    title: "DeanWaringDev | Professional Software Development Services",
    description: "Professional software development services specializing in mobile apps, web applications, and custom solutions.",
    type: "website",
    url: "https://deanwaringdev.com",
    siteName: "DeanWaringDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeanWaringDev | Professional Software Development Services",
    description: "Professional software development services specializing in mobile apps, web applications, and custom solutions.",
  },
};

/**
 * Root Layout Component
 * 
 * @param children - The page content to be rendered
 * @returns The complete HTML document structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* Skip Navigation Link - Accessibility Feature for Keyboard Users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* 
          Header Navigation
          Wrapped in <header> element with role="banner" for proper landmark
        */}
        <Header />

        {/* 
          Main Content Area
          - ID allows skip navigation to work
          - role="main" and <main> element create proper landmark
          - tabIndex={-1} allows programmatic focus for skip navigation
        */}
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>

        {/* 
          Footer
          Wrapped in <footer> element with role="contentinfo" for proper landmark
        */}
        <Footer />
      </body>
    </html>
  );
}
