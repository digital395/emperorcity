"use client";

import { motion } from "framer-motion";
import { BadgeIndianRupee, FileCheck2 } from "lucide-react";
import Image from "next/image";

const pricingData = [
  {
    category: "Premium",
    sqftRate: "₹2,190/-",
    centRate: "₹9,53,964/-",
    featured: true,
  },
  {
    category: "A Block",
    sqftRate: "₹2,140/-",
    centRate: "₹9,32,184/-",
    featured: false,
  },
  {
    category: "B Block",
    sqftRate: "₹2,040/-",
    centRate: "₹8,88,624/-",
    featured: false,
  },
  {
    category: "C Block",
    sqftRate: "₹1,990/-",
    centRate: "₹8,66,844/-",
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function PriceDetails() {
  const reraNumber = "TN RERA/26/LO/2457/2026";

  return (
    <section id="price-details" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-[#541215]/3 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="mb-10 text-center sm:mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="font-[Poppins] text-[9px] font-semibold tracking-[0.3em] text-[#711717] uppercase sm:text-[10px]">
              Pricing Details
            </span>

            <span className="h-px w-10 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-[Marcellus] text-[40px] leading-[1.05] tracking-tight text-[#541215] sm:text-[50px] lg:text-[56px]"
          >
            Emperor City <span className="text-[#711717]">Phase 2</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-xl font-[Poppins] text-[13px] leading-6 text-[#541215]/60 sm:text-[14px]"
          >
            Premium residential plots with flexible pricing across different
            blocks.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-white shadow-[0_20px_60px_rgba(84,18,21,0.08)]"
        >
          <div className="hidden md:block">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#541215]/10 bg-[#541215]">
              <div className="px-8 py-5">
                <span className="font-[Poppins] text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                  Plot Category
                </span>
              </div>

              <div className="px-8 py-5 text-right">
                <span className="font-[Poppins] text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                  Sq. Ft. Rate
                </span>
              </div>

              <div className="px-8 py-5 text-right">
                <span className="font-[Poppins] text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                  Cent Rate
                </span>
              </div>
            </div>

            {pricingData.map((item, index) => (
              <motion.div
                key={item.category}
                variants={itemVariants}
                className={`grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-[#541215]/8 last:border-b-0 ${
                  item.featured ? "bg-[#FBFAF7]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-4 px-8 py-6">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      item.featured
                        ? "bg-[#D4AF37]/15 text-[#711717]"
                        : "bg-[#541215]/5 text-[#711717]"
                    }`}
                  >
                    <BadgeIndianRupee size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="font-[Marcellus] text-[21px] text-[#541215]">
                      {item.category}
                    </p>

                    {item.featured && (
                      <span className="font-[Poppins] text-[8px] font-semibold tracking-[0.15em] text-[#D4AF37] uppercase">
                        Premium Selection
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-8 py-6 text-right">
                  <span className="font-[Poppins] text-[17px] font-semibold text-[#711717]">
                    {item.sqftRate}
                  </span>
                </div>

                <div className="px-8 py-6 text-right">
                  <span className="font-[Poppins] text-[17px] font-semibold text-[#541215]">
                    {item.centRate}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="divide-y divide-[#541215]/10 md:hidden">
            {pricingData.map((item) => (
              <motion.div
                key={item.category}
                variants={itemVariants}
                className={`p-5 ${item.featured ? "bg-[#FBFAF7]" : "bg-white"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        item.featured
                          ? "bg-[#D4AF37]/15 text-[#711717]"
                          : "bg-[#541215]/5 text-[#711717]"
                      }`}
                    >
                      <BadgeIndianRupee size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-[Marcellus] text-[20px] text-[#541215]">
                        {item.category}
                      </h3>

                      {item.featured && (
                        <span className="font-[Poppins] text-[8px] font-semibold tracking-[0.12em] text-[#D4AF37] uppercase">
                          Premium
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#541215]/8 bg-white px-4 py-3">
                    <p className="font-[Poppins] text-[8px] font-semibold tracking-[0.15em] text-[#541215]/45 uppercase">
                      Sq. Ft. Rate
                    </p>

                    <p className="mt-1 font-[Poppins] text-[15px] font-semibold text-[#711717]">
                      {item.sqftRate}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#541215]/8 bg-white px-4 py-3">
                    <p className="font-[Poppins] text-[8px] font-semibold tracking-[0.15em] text-[#541215]/45 uppercase">
                      Cent Rate
                    </p>

                    <p className="mt-1 font-[Poppins] text-[15px] font-semibold text-[#541215]">
                      {item.centRate}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mt-6 px-5 py-5 sm:px-7 sm:py-6"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-[#541215]/15 bg-white p-1 sm:h-18 sm:w-18">
              <Image
                src="/images/QR.png"
                alt="RERA Registration QR Code"
                fill
                sizes="72px"
                className="object-contain"
              />
            </div>

            {/* RERA Information */}
            <div className="min-w-0">
              <p className="font-[Poppins] text-[11px] leading-6 text-[#541215] sm:text-[13px] sm:leading-7">
                <span className="font-semibold">RERA No:</span>{" "}
                <span className="break-all">{reraNumber}</span>
              </p>

              <p className="mt-1 font-[Poppins] text-[11px] leading-6 text-[#541215] sm:text-[13px] sm:leading-7">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://rera.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#711717] transition-colors hover:text-[#541215] hover:underline"
                >
                  RERA.TN.GOV.IN
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-center font-[Poppins] text-[9px] leading-5 text-[#541215]/40 sm:text-[10px]"
        >
          * Prices shown are indicative and subject to change. Please contact
          our sales team for the latest pricing and availability.
        </motion.p>
      </div>
    </section>
  );
}
