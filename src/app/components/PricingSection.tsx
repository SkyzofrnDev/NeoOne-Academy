import { motion } from "framer-motion";
import { PuzzlePiece } from "./PuzzlePiece";
import { LogoIcon } from "./NeooneLogos";

const monthlyFeatures = [
  "Akses penuh ke semua materi",
  "Komunitas Discord eksklusif",
  "Sertifikat Bulanan",
  "Update materi setiap bulan",
  "Forum tanya jawab aktif",
];

const batchFeatures = [
  "Semua fitur Paket Bulanan",
  "Sesi Mentoring Eksklusif (2x/bulan)",
  "Akses Tools AI Premium",
  "Proyek portfolio terbimbing",
  "Sertifikat Batch + LinkedIn Badge",
  "Priority support 24/7",
];

export const PricingSection: React.FC = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background:
          "linear-gradient(160deg, #F8FAFF 0%, #F0FDF4 50%, #FEFCE8 100%)",
      }}
    >
      {/* Background puzzle decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <PuzzlePiece
          color="#4285F4"
          size={160}
          rotate={-20}
          opacity={0.04}
          className="absolute -top-10 -left-10"
        />
        <PuzzlePiece
          color="#0F9D58"
          size={140}
          rotate={30}
          opacity={0.04}
          className="absolute -bottom-10 -right-10"
        />
        <PuzzlePiece
          color="#F4B400"
          size={100}
          rotate={60}
          opacity={0.05}
          className="absolute top-1/2 left-4"
        />
        <PuzzlePiece
          color="#4285F4"
          size={80}
          rotate={-45}
          opacity={0.04}
          className="absolute top-20 right-8"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BFDBFE] shadow-sm mb-4">
            <span>💎</span>
            <span
              style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4285F4" }}
            >
              Investasi Masa Depan yang Terjangkau
            </span>
          </div>

          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}
          >
            Pilih Paket <span style={{ color: "#4285F4" }}>Belajar Anda</span>
          </h2>
          <p
            className="text-gray-500 max-w-lg mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.75 }}
          >
            Pilih paket belajar yang sesuai dengan kebutuhan Anda dan mulailah
            perjalanan coding Anda hari ini.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card 1: Monthly */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-[#4285F4]/30 overflow-hidden"
          >
            {/* Corner puzzles */}
            <div className="absolute -top-6 -right-6 pointer-events-none">
              <PuzzlePiece
                color="#4285F4"
                size={100}
                rotate={10}
                opacity={0.07}
                variant={1}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 pointer-events-none">
              <PuzzlePiece
                color="#4285F4"
                size={80}
                rotate={-20}
                opacity={0.05}
                variant={3}
              />
            </div>

            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#EFF6FF" }}
                >
                  <span className="text-xl">📅</span>
                </div>
                <span
                  className="px-3 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF]"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#4285F4",
                  }}
                >
                  Paket Bulanan
                </span>
              </div>
              <img
                src="/public/assets/icon-brand.png"
                loading="lazy"
                alt="Logo"
                className="w-10 opacity-20"
              />{" "}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "#4285F4",
                  }}
                >
                  Rp 100.000
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#6B7280",
                  fontWeight: 500,
                }}
              >
                per bulan
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#EFF6FF" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#4285F4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#4B5563",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl border-2 border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-all duration-200"
              style={{ fontSize: "0.95rem", fontWeight: 700 }}
            >
              Mulai Paket Bulanan
            </motion.button>
          </motion.div>

          {/* Card 2: Batch HIGHLIGHTED */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative rounded-3xl p-8 shadow-2xl"
            style={{ background: "linear-gradient(145deg, #0F9D58, #0a8a4c)" }}
          >
            
            {/* Best Value Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-full px-20 -top-2 left-1/2 -translate-x-1/2 z-20 "
            >
              <div
                className="px-5 py-2 rounded-full shadow-lg flex items-center gap-1.5"
                style={{ background: "#F4B400" }}
              >
                <span style={{ fontSize: "0.8rem" }}>⭐</span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#1F2937",
                  }}
                >
                  BEST VALUE — Hemat Rp 20.000!
                </span>
                <span style={{ fontSize: "0.8rem" }}>⭐</span>
              </div>
            </motion.div>

            {/* White puzzle decorations */}
            <div className="absolute -top-6 -right-6 pointer-events-none">
              <PuzzlePiece
                color="white"
                size={100}
                rotate={10}
                opacity={0.08}
                variant={2}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 pointer-events-none">
              <PuzzlePiece
                color="white"
                size={90}
                rotate={-25}
                opacity={0.06}
                variant={4}
              />
            </div>

            <div className="flex items-start justify-between mb-6 mt-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <span className="text-xl">🔥</span>
                </div>
                <span
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#0F9D58",
                    background: "white",
                  }}
                >
                  Paket Hemat 1 Batch (3 Bulan)
                </span>
              </div>
              <img
                src="/public/assets/icon-brand.png"
                loading="lazy"
                alt="Logo"
                className="w-10 opacity-50"
              />{" "}
            </div>

            {/* Price with strikethrough */}
            <div className="mb-6">
              <span
                style={{ fontSize: "2.5rem", fontWeight: 900, color: "white" }}
              >
                Rp 280.000
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "line-through",
                    fontWeight: 500,
                  }}
                >
                  Rp 300.000
                </span>
                <span
                  className="px-2 py-0.5 rounded-lg"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    background: "#F4B400",
                    color: "#1F2937",
                  }}
                >
                  HEMAT 7%
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                }}
              >
                per 1 batch (3 bulan)
              </span>
            </div>

            {/* 3 interlocking puzzle pieces */}
            <div
              className="flex items-center justify-center gap-0.5 mb-6 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <PuzzlePiece color="white" size={36} opacity={0.7} variant={3} />
              <PuzzlePiece
                color="#F4B400"
                size={36}
                opacity={0.85}
                variant={1}
              />
              <PuzzlePiece color="white" size={36} opacity={0.7} variant={2} />
              <span
                className="ml-3"
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                }}
              >
                Puzzle lengkap = 1 Level!
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {batchFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* High-emphasis CTA */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(244,180,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-2xl transition-all duration-200 shadow-lg"
              style={{
                background: "#F4B400",
                fontSize: "1rem",
                fontWeight: 800,
                color: "#1F2937",
              }}
            >
              🚀 Mulai Paket Hemat Sekarang!
            </motion.button>

            <p
              className="text-center mt-3"
              style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}
            >
              Tanpa ikatan kontrak · Bisa cancel kapan saja
            </p>
          </motion.div>
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mt-12 flex-wrap"
        >
          {[
            { icon: "🔒", text: "Pembayaran Aman" },
            { icon: "↩️", text: "Garansi 7 Hari" },
            { icon: "📱", text: "Akses Seumur Hidup" },
            { icon: "🏆", text: "Sertifikat Resmi" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#6B7280",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
