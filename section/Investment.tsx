"use client";

import { ArrowUpRight, MapPinned, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Popup from "@/components/popup";
import EnquiryForm from "@/components/enquiryform";

export default function InvestmentSection() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("Investment Enquiry");

  const openInvestmentForm = () => {
    setFormType("Investment Enquiry");
    setOpen(true);
  };
  const ease = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 22,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 18,
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
  return (
    <>
      <section
        id="investment"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-32"
      >
        <div className="pointer-events-none absolute top-10 -right-40 h-112.5 w-112.5 rounded-full bg-[#D4AF37]/4 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 -left-40 h-105 w-105 rounded-full bg-[#541215]/2.5 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-312.5 px-5 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 xl:gap-28"
          >
            <motion.div variants={itemVariants}>
              <p className="mb-5 font-[Poppins] text-[10px] font-semibold tracking-[0.2em] text-[#541215]/40 uppercase">
                Emperor City · Tirunelveli
              </p>

              <h2 className="font-[Marcellus] text-[42px] leading-[1.08] tracking-tight text-[#541215] sm:text-5xl md:text-[58px] lg:text-[60px] xl:text-[70px]">
                Buy Today.
                <br />
                <span className="text-[#711717]">Build Tomorrow.</span>
                <br />
                <span className="text-[#541215]/45">
                  Grow With Tirunelveli.
                </span>
              </h2>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-16 bg-[#D4AF37]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
                <span className="h-px w-8 bg-[#D4AF37]/40" />
              </div>
            </motion.div>

            <motion.div
              variants={rightContentVariants}
              className="relative lg:border-l lg:border-[#541215]/10 lg:pl-12 xl:pl-16"
            >
              <div className="absolute top-0 -left-px hidden h-20 w-px bg-linear-to-b from-[#D4AF37] to-transparent lg:block" />

              <p className="max-w-155 font-[Poppins] text-[15px] leading-8 text-[#541215]/65 sm:text-base sm:leading-9 lg:text-[16px] xl:text-[17px]">
                With its strategic location, large-scale development, bigger
                plot options and upcoming connectivity,
                <span className="font-semibold text-[#711717]">
                  {" "}
                  Emperor City{" "}
                </span>
                is planned to offer both a place to build your home and an
                opportunity to invest in Tirunelveli&apos;s future.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    transition: {
                      duration: 0.3,
                      ease,
                    },
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-[#541215]/10 bg-[#541215]/2.5 px-4 py-4 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.035]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-white text-[#711717]">
                    <MapPinned size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="font-[Poppins] text-[9px] font-semibold tracking-[0.16em] text-[#541215]/40 uppercase">
                      Advantage
                    </p>

                    <p className="mt-0.5 font-[Marcellus] text-[15px] text-[#541215]">
                      Strategic Location
                    </p>
                  </div>
                </motion.div>

                <div className="flex items-center gap-4 rounded-2xl border border-[#541215]/10 bg-[#541215]/2.5 px-4 py-4 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.035]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-white text-[#711717]">
                    <TrendingUp size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="font-[Poppins] text-[9px] font-semibold tracking-[0.16em] text-[#541215]/40 uppercase">
                      Advantage
                    </p>

                    <p className="mt-0.5 font-[Marcellus] text-[15px] text-[#541215]">
                      Future Potential
                    </p>
                  </div>
                </div>
              </div>

              <motion.div variants={buttonVariants} className="mt-9">
                <button
                  type="button"
                  onClick={openInvestmentForm}
                  className="group inline-flex items-center gap-4 rounded-xl border border-[#D4AF37]/60 bg-linear-to-r from-[#4B1012] via-[#711717] to-[#541215] px-7 py-4 font-[Poppins] text-[11px] font-semibold tracking-[0.14em] text-[#F1D77A] uppercase shadow-[0_12px_35px_rgba(84,18,21,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F1D77A] hover:shadow-[0_18px_45px_rgba(84,18,21,0.22)] active:scale-[0.98]"
                >
                  <span>Explore The Opportunity</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Popup isOpen={open} onClose={() => setOpen(false)} title="Enquiry Form">
        <EnquiryForm isDownload={false} formtype={formType} />
      </Popup>
    </>
  );
}
