import { useState, useEffect } from "react";
import { LogoFull } from "./NeooneLogos";

const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Kursus", href: "#kursus" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Blog", href: "#blog" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center w-35">
          <img
            src="/public/assets/web-brand.png"
            loading="lazy"
            alt="Logo"
            className="w-full"
          />
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors relative group"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[#4285F4] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full border-2 border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-all duration-200"
            style={{ fontSize: "0.875rem", fontWeight: 600 }}
          >
            Masuk
          </a>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 rounded-full bg-[#0F9D58] text-white hover:bg-[#0b8049] transition-all duration-200 shadow-sm hover:shadow-md"
            style={{ fontSize: "0.875rem", fontWeight: 600 }}
          >
            Daftar Gratis
          </a>
        </div>
      </div>
    </header>
  );
};
