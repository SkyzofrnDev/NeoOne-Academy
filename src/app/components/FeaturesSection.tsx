import React from "react";
import { motion } from "motion/react";
import { PuzzlePiece } from "./PuzzlePiece";
import { LogoIcon } from "./NeooneLogos";

const features = [
  {
    color: "#0F9D58",
    bgColor: "#F0FDF4",
    borderColor: "#BBF7D0",
    emoji: "🎯",
    title: "Kurikulum Coding Terdepan",
    description:
      "Pelajari bahasa pemrograman paling relevan industri: Python, JavaScript, React, dan lebih banyak lagi. Kurikulum kami dirancang oleh para praktisi teknologi terbaik.",
    tags: ["Python", "JavaScript", "React"],
    puzzleVariant: 1 as const,
  },
  {
    color: "#4285F4",
    bgColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    emoji: "🤖",
    title: "Vibe Coding dengan AI",
    description:
      "Belajar cara berkolaborasi dengan AI seperti ChatGPT dan GitHub Copilot untuk menjadi developer yang 10x lebih produktif. Masa depan coding ada di sini.",
    tags: ["ChatGPT", "Copilot", "Prompt Eng."],
    puzzleVariant: 2 as const,
  },
  {
    color: "#F4B400",
    bgColor: "#FEFCE8",
    borderColor: "#FDE68A",
    emoji: "⚡",
    title: "Meningkatkan Efisiensi Kerja",
    description:
      "Otomatisasi tugas berulang, buat tool internal, dan hemat jam kerja setiap minggu. AI bukan pengganti Anda — AI adalah superpowers Anda.",
    tags: ["Otomatisasi", "Efisiensi", "No-Code"],
    puzzleVariant: 3 as const,
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section
      className="relative py-24 bg-[#F8FAFF] overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background puzzle decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <PuzzlePiece
          color="#4285F4"
          size={120}
          rotate={20}
          opacity={0.04}
          className="absolute -top-8 -right-8"
        />
        <PuzzlePiece
          color="#0F9D58"
          size={90}
          rotate={-15}
          opacity={0.05}
          className="absolute bottom-12 -left-6"
        />
        <PuzzlePiece
          color="#F4B400"
          size={80}
          rotate={45}
          opacity={0.05}
          className="absolute top-1/2 right-4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <img
              src="/public/assets/icon-brand.png"
              loading="lazy"
              alt="Logo"
              className="w-5"
            />{" "}
            <span
              style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4285F4" }}
            >
              Kenapa Neoone Academy?
            </span>
          </div>

          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}
          >
            Belajar Coding Cara yang{" "}
            <span style={{ color: "#4285F4" }}>Tepat & Menyenangkan</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.75 }}
          >
            Tiga pilar utama kami yang membuat pengalaman belajar di Neoone
            Academy berbeda dari yang lain.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-shadow overflow-hidden border"
              style={{ borderColor: feature.borderColor }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                }}
              />

              {/* Background puzzle */}
              <div className="absolute -bottom-6 -right-6 pointer-events-none">
                <PuzzlePiece
                  color={feature.color}
                  size={100}
                  rotate={-20}
                  opacity={0.06}
                  variant={feature.puzzleVariant}
                />
              </div>

              {/* Icon area */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-3xl shadow-sm"
                style={{ background: feature.bgColor }}
              >
                {feature.emoji}
              </div>

              {/* Logo icon decoration */}
              <div className="absolute top-5 right-5">
                <img
                  src="/public/assets/icon-brand.png"
                  loading="lazy"
                  alt="Logo"
                  className="w-10 opacity-20"
                />{" "}
              </div>

              <h3
                className="mb-3"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1F2937",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-500 mb-4"
                style={{ fontSize: "0.875rem", lineHeight: 1.75 }}
              >
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      background: feature.bgColor,
                      color: feature.color,
                      border: `1px solid ${feature.borderColor}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom interlocking puzzle row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center gap-1 mt-12"
        >
          {[
            { color: "#4285F4", variant: 3 as const },
            { color: "#0F9D58", variant: 1 as const },
            { color: "#F4B400", variant: 2 as const },
            { color: "#4285F4", variant: 4 as const },
            { color: "#0F9D58", variant: 3 as const },
          ].map((p, i) => (
            <PuzzlePiece
              key={i}
              color={p.color}
              size={36}
              opacity={0.3}
              variant={p.variant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
