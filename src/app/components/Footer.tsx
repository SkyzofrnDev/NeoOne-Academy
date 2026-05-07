import React from "react";
import { PuzzlePiece } from "./PuzzlePiece";
import { LogoFull } from "./NeooneLogos";

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background puzzle decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <PuzzlePiece
          color="#4285F4"
          size={120}
          rotate={-20}
          opacity={0.05}
          className="absolute top-4 right-4"
        />
        <PuzzlePiece
          color="#0F9D58"
          size={100}
          rotate={30}
          opacity={0.04}
          className="absolute bottom-4 left-4"
        />
        <PuzzlePiece
          color="#F4B400"
          size={80}
          rotate={50}
          opacity={0.04}
          className="absolute top-1/2 left-1/2"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/public/assets/document-light.png"
                loading="lazy"
                alt="Logo"
                className="w-25"
              />{" "}
            </div>
            <p
              className="text-gray-400 mb-4 max-w-sm"
              style={{ fontSize: "0.875rem", lineHeight: 1.75 }}
            >
              Neoone Academy adalah platform belajar coding dan AI terdepan
              untuk membantu Anda bekerja lebih cerdas dan kreatif di era
              digital.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", icon: "📸" },
                { label: "Twitter", icon: "🐦" },
                { label: "LinkedIn", icon: "💼" },
                { label: "YouTube", icon: "▶️" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <span style={{ fontSize: "0.85rem" }}>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontSize: "0.875rem", fontWeight: 700 }}
            >
              Platform
            </h4>
            <ul className="space-y-2">
              {["Semua Kursus", "Mentor", "Blog", "FAQ", "Komunitas"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4
              className="text-white mb-4"
              style={{ fontSize: "0.875rem", fontWeight: 700 }}
            >
              Perusahaan
            </h4>
            <ul className="space-y-2">
              {[
                "Tentang Kami",
                "Karir",
                "Press",
                "Kontak",
                "Kebijakan Privasi",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Puzzle row divider */}
        <div className="flex items-center gap-0.5 mb-6 opacity-20 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <PuzzlePiece
              key={i}
              color={
                i % 3 === 0 ? "#4285F4" : i % 3 === 1 ? "#0F9D58" : "#F4B400"
              }
              size={20}
              opacity={0.8}
              variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
            />
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
          <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>
            © 2025 Neoone Academy ID. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-1">
            <span style={{ fontSize: "0.8rem", color: "#6B7280" }}>
              Dibuat dengan
            </span>
            <span style={{ fontSize: "0.8rem" }}>❤️</span>
            <span style={{ fontSize: "0.8rem", color: "#6B7280" }}>
              untuk developer Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
