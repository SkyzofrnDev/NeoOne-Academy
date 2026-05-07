import React from "react";
import { motion } from "motion/react";
import { PuzzlePiece } from "./PuzzlePiece";
import { LogoIcon } from "./NeooneLogos";

const courses = [
  {
    tag: "Pemula",
    tagColor: "#F4B400",
    tagBg: "#FEFCE8",
    headerBg: "linear-gradient(135deg, #FDE68A, #FCD34D)",
    emoji: "🌱",
    title: "Pengantar Coding Dasar",
    description:
      "Mulai perjalanan coding Anda dari nol. Pelajari logika pemrograman, HTML, CSS, dan dasar-dasar JavaScript dalam lingkungan yang supportif.",
    duration: "4 Minggu",
    level: "Pemula",
    students: "320+",
    puzzleVariant: 1 as const,
    accentColor: "#F4B400",
  },
  {
    tag: "Populer",
    tagColor: "#4285F4",
    tagBg: "#EFF6FF",
    headerBg: "linear-gradient(135deg, #BFDBFE, #93C5FD)",
    emoji: "🤖",
    title: "Coding dengan AI: Python Pro",
    description:
      "Kuasai Python sambil belajar mengintegrasikan AI ke dalam workflow Anda. Bangun aplikasi cerdas dengan LangChain, OpenAI API, dan lebih banyak lagi.",
    duration: "8 Minggu",
    level: "Menengah",
    students: "180+",
    puzzleVariant: 2 as const,
    accentColor: "#4285F4",
  },
  {
    tag: "Intensif",
    tagColor: "#0F9D58",
    tagBg: "#F0FDF4",
    headerBg: "linear-gradient(135deg, #BBF7D0, #86EFAC)",
    emoji: "🚀",
    title: "Full-Stack Web Dev",
    description:
      "Program intensif untuk menguasai React, Node.js, dan database. Keluar sebagai full-stack developer yang siap kerja dan berportofolio solid.",
    duration: "12 Minggu",
    level: "Lanjutan",
    students: "95+",
    puzzleVariant: 3 as const,
    accentColor: "#0F9D58",
  },
];

export const CoursesSection: React.FC = () => {
  return (
    <section
      id="kursus"
      className="relative py-24 bg-white overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <PuzzlePiece
          color="#4285F4"
          size={150}
          rotate={-30}
          opacity={0.03}
          className="absolute -top-12 left-8"
        />
        <PuzzlePiece
          color="#0F9D58"
          size={120}
          rotate={25}
          opacity={0.03}
          className="absolute bottom-8 right-4"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] mb-4">
            <span>🗺️</span>
            <span
              style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0F9D58" }}
            >
              Mulai Perjalanan Anda
            </span>
          </div>

          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}
          >
            Pilih Jalur Belajar{" "}
            <span style={{ color: "#0F9D58" }}>Impian Anda</span>
          </h2>
          <p
            className="text-gray-500 max-w-lg mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.75 }}
          >
            Dari pemula hingga profesional, kami punya kursus yang tepat untuk
            setiap tahap perjalanan coding Anda.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-gray-100"
            >
              {/* Card Header */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ background: course.headerBg }}
              >
                <span className="text-5xl z-10">{course.emoji}</span>

                {/* Puzzle decorations */}
                <div className="absolute -top-4 -right-4 opacity-30">
                  <PuzzlePiece
                    color={course.accentColor}
                    size={80}
                    rotate={20}
                    opacity={0.6}
                    variant={course.puzzleVariant}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 opacity-20">
                  <PuzzlePiece
                    color={course.accentColor}
                    size={60}
                    rotate={-30}
                    opacity={0.5}
                    variant={
                      course.puzzleVariant === 3
                        ? 1
                        : course.puzzleVariant === 2
                          ? 3
                          : 2
                    }
                  />
                </div>

                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full flex items-center gap-1.5"
                  style={{
                    background: course.tagBg,
                    border: `1.5px solid ${course.tagColor}40`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: course.tagColor }}
                  />
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: course.tagColor,
                    }}
                  >
                    {course.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2.5 py-1 rounded-lg text-white"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      background: course.accentColor,
                    }}
                  >
                    {course.level}
                  </span>
                  <img
                    src="/public/assets/icon-brand.png"
                    loading="lazy"
                    alt="Logo"
                    className="opacity-25 w-7"
                  />{" "}
                </div>

                <h3
                  className="mb-2 text-gray-900"
                  style={{ fontSize: "1.05rem", fontWeight: 700 }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-gray-500 mb-5"
                  style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
                >
                  {course.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <span style={{ fontSize: "0.8rem" }}>⏱️</span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "#6B7280",
                        fontWeight: 500,
                      }}
                    >
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ fontSize: "0.8rem" }}>👥</span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "#6B7280",
                        fontWeight: 500,
                      }}
                    >
                      {course.students} siswa
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-2xl text-white"
                  style={{
                    background: `linear-gradient(135deg, ${course.accentColor}, ${course.accentColor}cc)`,
                    fontSize: "0.875rem",
                    fontWeight: 700,
                  }}
                >
                  Lihat Kursus →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-2xl border-2 border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-all duration-200"
            style={{ fontSize: "0.95rem", fontWeight: 700 }}
          >
            Lihat Semua Kursus ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
