import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeanWaringDev | Professional Software Development Services",
  description: "Transform your business with custom software solutions. Specializing in mobile apps, web applications, and scalable systems.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1D39] to-[#1a3354] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
              Professional Software Development
              <span className="text-[#F97A20]"> That Drives Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#EFE9E1] mb-8 leading-relaxed">
              Transform your business vision into powerful, scalable software solutions. 
              We specialize in mobile apps, web applications, and custom development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F97A20] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e06a15] transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0B1D39] transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1D39] mb-4 font-[family-name:var(--font-poppins)]">
              Our Services
            </h2>
            <p className="text-xl text-[#5A6872] max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile App Development */}
            <div className="bg-[#EFE9E1] p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#F97A20] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1D39] mb-4">Mobile App Development</h3>
              <p className="text-[#5A6872] mb-6">
                Native and cross-platform mobile applications for iOS and Android. 
                From concept to app store deployment.
              </p>
              <Link href="/services#mobile" className="text-[#F97A20] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Web Development */}
            <div className="bg-[#EFE9E1] p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#4EA5D9] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1D39] mb-4">Web Applications</h3>
              <p className="text-[#5A6872] mb-6">
                Modern, responsive web applications built with cutting-edge technologies. 
                Fast, secure, and scalable solutions.
              </p>
              <Link href="/services#web" className="text-[#F97A20] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Custom Solutions */}
            <div className="bg-[#EFE9E1] p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0B1D39] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1D39] mb-4">Custom Solutions</h3>
              <p className="text-[#5A6872] mb-6">
                Tailored software solutions designed specifically for your unique business requirements 
                and workflows.
              </p>
              <Link href="/services#custom" className="text-[#F97A20] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-[#EFE9E1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1D39] mb-4 font-[family-name:var(--font-poppins)]">
              Featured Projects
            </h2>
            <p className="text-xl text-[#5A6872] max-w-2xl mx-auto">
              Building real products that solve real problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GCSEFastTrack */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#4EA5D9] to-[#0B1D39]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1D39] mb-3">GCSEFastTrack</h3>
                <p className="text-[#5A6872] mb-4">
                  Comprehensive English language learning platform with subscription-based access, 
                  interactive lessons, and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#EFE9E1] text-[#0B1D39] px-3 py-1 rounded-full text-sm font-medium">Education</span>
                  <span className="bg-[#EFE9E1] text-[#0B1D39] px-3 py-1 rounded-full text-sm font-medium">Web App</span>
                </div>
                <Link href="/portfolio#gcse" className="text-[#F97A20] font-semibold hover:underline">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Childminding App */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#F97A20] to-[#0B1D39]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1D39] mb-3">Childminding Management</h3>
                <p className="text-[#5A6872] mb-4">
                  Complete childminding management system with parent portals, attendance tracking, 
                  finance management, and automated reporting.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#EFE9E1] text-[#0B1D39] px-3 py-1 rounded-full text-sm font-medium">SaaS</span>
                  <span className="bg-[#EFE9E1] text-[#0B1D39] px-3 py-1 rounded-full text-sm font-medium">Mobile App</span>
                </div>
                <Link href="/portfolio#childminding" className="text-[#F97A20] font-semibold hover:underline">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* WheelchairRacer */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#0B1D39] to-[#5A6872]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1D39] mb-3">WheelchairRacer</h3>
                <p className="text-[#5A6872] mb-4">
                  UK running events platform with race analysis, training plans, and comprehensive 
                  event discovery for wheelchair athletes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#EFE9E1] text-[#0B1D39] px-3 py-1 rounded-full text-sm font-medium">Sports</span>
                  <span className="bg-[#EFE9E1] text-[#0B1D39] px-3 py-1 rounded-full text-sm font-medium">Web Platform</span>
                </div>
                <Link href="/portfolio#wheelchairracer" className="text-[#F97A20] font-semibold hover:underline">
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-[#0B1D39] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1a3354] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1D39] mb-4 font-[family-name:var(--font-poppins)]">
              Why Work With Us
            </h2>
            <p className="text-xl text-[#5A6872] max-w-2xl mx-auto">
              Professional software development backed by real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F97A20] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1D39] mb-2">Quality Focused</h3>
              <p className="text-[#5A6872]">
                Clean, maintainable code following industry best practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#4EA5D9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1D39] mb-2">Fast Delivery</h3>
              <p className="text-[#5A6872]">
                Efficient development process with regular updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0B1D39] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1D39] mb-2">Scalable Solutions</h3>
              <p className="text-[#5A6872]">
                Built to grow with your business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#5A6872] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1D39] mb-2">Ongoing Support</h3>
              <p className="text-[#5A6872]">
                Continued maintenance and feature development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B1D39] to-[#1a3354] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#EFE9E1] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful software solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F97A20] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#e06a15] transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
