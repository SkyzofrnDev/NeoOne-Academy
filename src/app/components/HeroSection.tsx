import React from "react";
import { motion } from "motion/react";
import { PuzzlePiece } from "./PuzzlePiece";
import { LogoIcon } from "./NeooneLogos";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1759752393978-92d3ccf09380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNvZGluZyUyMGxhcHRvcCUyMHRlY2hub2xvZ3klMjBsZWFybmluZ3xlbnwxfHx8fDE3Nzc3MTI5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const floatAnim1 = {
  y: [-8, 8, -8],
  x: [-4, 4, -4],
  rotate: [0, 10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};
const floatAnim2 = {
  y: [6, -10, 6],
  x: [4, -4, 4],
  rotate: [0, -12, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
};
const floatAnim3 = {
  y: [-12, 6, -12],
  rotate: [5, -5, 5],
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
};
const floatAnim4 = {
  y: [8, -6, 8],
  x: [-6, 2, -6],
  rotate: [-8, 5, -8],
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const },
};

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen  items-center flex overflow-hidden bg-white pt-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #4285F4, transparent)",
          }}
        />
        <div
          className="absolute top-1/4 -right-24 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0F9D58, transparent)",
          }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, #F4B400, transparent)",
            opacity: 0.08,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4285F4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-[#4285F4]/30"
            style={{ background: "rgba(66,133,244,0.06)" }}
          >
            <span className="text-lg">🤖</span>
            <span
              style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4285F4" }}
            >
              AI + Coding Academy Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="text-gray-900 w-full"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.3,
            }}
          >
            Bangun Masa Depan Anda dengan{" "}
            <span style={{ color: "#4285F4" }}>Coding & AI</span> <br />
            Kuasai Teknologi,{" "}
            <span
              style={{
                color: "#0F9D58",
                borderBottom: "4px solid #F4B400",
              }}
            >
              Tingkatkan Efisiensi!
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-gray-500"
            style={{ fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.75 }}
          >
            Neoone Academy mengajarkan cara memanfaatkan kekuatan AI untuk
            bekerja lebih cerdas, bukan lebih keras. Temukan kreativitas Anda
            melalui coding.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#kursus"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0F9D58, #0a8a4c)",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              <span>🚀</span>
              Jelajahi Kursus
            </motion.a>
            <motion.a
              href="#daftar"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #4285F4, #2563EB)",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              <span>✨</span>
              Daftar Sekarang
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, #4285F4 0deg, #0F9D58 120deg, #F4B400 240deg, #4285F4 360deg)",
              opacity: 0.15,
              filter: "blur(32px)",
              transform: "scale(0.9)",
            }}
          />

          {/* Image container */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl w-full"
            style={{ maxWidth: 520 }}
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-br-3xl pointer-events-none z-10 opacity-70"
              style={{
                background: "linear-gradient(135deg, #4285F4aa, transparent)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl pointer-events-none z-10 opacity-70"
              style={{
                background: "linear-gradient(315deg, #0F9D58aa, transparent)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10 opacity-60"
              style={{
                background: "linear-gradient(225deg, #F4B400aa, transparent)",
              }}
            />

            <img
              src={HERO_IMAGE}
              alt="Neoone Academy Students"
              className="w-full h-auto block"
              style={{ maxHeight: 500, objectFit: "cover" }}
            />

            {/* Color overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(66,133,244,0.08), rgba(15,157,88,0.06), rgba(244,180,0,0.08))",
              }}
            />
          </div>

          {/* Floating puzzle pieces */}
          <motion.div
            animate={floatAnim1}
            className="absolute -top-6 -left-6 z-20"
          >
            <PuzzlePiece
              color="#4285F4"
              size={64}
              rotate={15}
              opacity={0.75}
              variant={1}
            />
          </motion.div>
          <motion.div
            animate={floatAnim2}
            className="absolute -top-4 right-8 z-20"
          >
            <PuzzlePiece
              color="#F4B400"
              size={48}
              rotate={-20}
              opacity={0.7}
              variant={2}
            />
          </motion.div>
          <motion.div
            animate={floatAnim3}
            className="absolute -bottom-6 -left-8 z-20"
          >
            <PuzzlePiece
              color="#0F9D58"
              size={56}
              rotate={30}
              opacity={0.7}
              variant={3}
            />
          </motion.div>
          <motion.div
            animate={floatAnim4}
            className="absolute -bottom-4 right-4 z-20"
          >
            <PuzzlePiece
              color="#4285F4"
              size={44}
              rotate={-10}
              opacity={0.65}
              variant={4}
            />
          </motion.div>
          <motion.div
            animate={floatAnim2}
            className="absolute top-1/3 -right-8 z-20"
          >
            <PuzzlePiece
              color="#0F9D58"
              size={52}
              rotate={45}
              opacity={0.6}
              variant={1}
            />
          </motion.div>
          <motion.div
            animate={floatAnim3}
            className="absolute top-1/2 -left-10 z-20"
          >
            <PuzzlePiece
              color="#F4B400"
              size={42}
              rotate={-35}
              opacity={0.55}
              variant={2}
            />
          </motion.div>

          {/* Floating badge: Vibe Coding */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 -right-12 lg:-right-2 bg-white rounded-2xl shadow-xl px-4 py-3 z-30 hidden xl:flex items-center gap-2"
          >
            <span className="text-2xl">💡</span>
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#0F9D58",
                }}
              >
                Vibe Coding
              </p>
              <p style={{ fontSize: "0.65rem", color: "#6B7280" }}>
                with AI Power
              </p>
            </div>
          </motion.div>

          {/* Floating badge: Logo Icon */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-10 left-12 bg-white rounded-2xl shadow-xl px-4 py-3 z-30 hidden xl:flex items-center gap-2"
          >
            <img
              src="/public/assets/icon-brand.png"
              loading="lazy"
              alt="Logo"
              className="w-7"
            />{" "}
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#4285F4",
                }}
              >
                Kreativitas
              </p>
              <p style={{ fontSize: "0.65rem", color: "#6B7280" }}>
                Tanpa Batas
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};
