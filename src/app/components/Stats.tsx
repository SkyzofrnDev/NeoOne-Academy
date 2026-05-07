import { motion } from "framer-motion";

const stats = [
  {
    icon: "🎓",
    value: "10+",
    label: "Program Tersertifikasi",
    description: "Fokus pada keterampilan praktis yang diminati industri",
  },
  {
    icon: "🤝",
    value: "98%",
    label: "Kepuasan Siswa",
    description: "Terbukti dengan ulasan dan testimoni dari alumni kami",
  },
  {
    icon: "💼",
    value: "92%",
    label: "Tingkat Penyerapan Kerja",
    description: "Alumni kami bekerja di perusahaan teknologi terkemuka",
  },
];

const Stats = () => {
  return (
    <section className="relative py-50 bg-[url('/assets/stats.JPG')] bg-cover bg-center bg-fixed bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Top wave */}
      <div className="absolute z-10 -top-2 left-0 right-0 pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 60" className="w-full">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
            fill="#F8FAFF"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-2 items-center">
              <p className="font-semibold text-5xl">
                200<span className="text-[#0F9D58] text-4xl">+</span>
              </p>
              <p className="text-2xl font-semibold text-[#0F9D58]">
                Siswa Terdaftar
              </p>
              <p className="text-lg opacity-80">
                Anak yang sudah mengikuti kelas coding & robotik
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <p className="font-semibold text-5xl">
                200<span className="text-[#4285F4] text-4xl">+</span>
              </p>
              <p className="text-2xl font-semibold text-[#4285F4]">
                Siswa Terdaftar
              </p>
              <p className="text-lg opacity-80">
                Anak yang sudah mengikuti kelas coding & robotik
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <p className="font-semibold text-5xl">
                200<span className="text-[#F4B400] text-4xl">+</span>
              </p>
              <p className="text-2xl font-semibold text-[#F4B400]">
                Siswa Terdaftar
              </p>
              <p className="text-lg opacity-80">
                Anak yang sudah mengikuti kelas coding & robotik
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave */}
      <div className="absolute z-10 bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
            fill="#F8FAFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default Stats;
