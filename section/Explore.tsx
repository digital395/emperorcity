"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Popup from "@/components/popup";
import EnquiryForm from "@/components/enquiryform";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SpaceForMore() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("Explore Emperor City");

  const openExploreForm = () => {
    setFormType("Explore Emperor City");
    setOpen(true);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#541215]">
        <div className="pointer-events-none absolute top-1/2 -left-32 h-105 w-105 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.07] blur-[110px]" />

        <div className="pointer-events-none absolute top-0 -right-40 h-125 w-125 rounded-full bg-[#F1D77A]/[0.035] blur-[130px]" />

        <div className="pointer-events-none absolute top-1/2 -right-5 -translate-y-1/2 font-[Marcellus] text-[220px] leading-none text-white/2.5 select-none sm:text-[300px] md:-right-2.5 md:text-[420px] lg:text-[520px]">
          70
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.5fr] md:gap-14 lg:grid-cols-[0.7fr_1.7fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#F1D77A]" />
                <span className="font-[Poppins] text-[9px] font-semibold tracking-[0.22em] text-[#F1D77A] uppercase sm:text-[10px]">
                  Emperor City
                </span>
              </div>

              <div className="mt-7">
                <span className="font-[Marcellus] text-[76px] leading-none text-[#F1D77A] sm:text-[95px] md:text-[105px] lg:text-[120px]">
                  70
                </span>

                <div className="mt-1 font-[Poppins] text-[11px] font-medium tracking-[0.22em] text-white/70 uppercase sm:text-[12px]">
                  Acres of Possibility
                </div>
              </div>

              <div className="mt-7 h-px w-24 bg-[#F1D77A]/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.1, ease }}
            >
              <p className="font-[Poppins] text-[9px] font-semibold tracking-[0.22em] text-[#F1D77A] uppercase sm:text-[10px]">
                Make Space For More
              </p>

              <h2 className="mt-4 max-w-212.5 font-[Marcellus] text-[34px] leading-[1.08] tracking-[-0.015em] text-white sm:text-[44px] md:text-[50px] lg:text-[58px]">
                A PLACE THAT GROWS
                <br />
                <span className="text-[#F1D77A]">WITH YOUR DREAMS.</span>
              </h2>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#D4AF37] sm:w-16" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              </div>

              <p className="mt-7 max-w-190 font-[Poppins] text-[13px] leading-[1.9] text-white/65 sm:text-[14px] md:text-[15px]">
                From a spacious plot to the home you have always envisioned,
                Emperor City gives you the freedom to build without compromise.
                With thoughtfully planned spaces across a 70-acre township,
                there is room for your home, your family and everything your
                future holds.
              </p>

              <div className="mt-8 grid max-w-175 grid-cols-1 border-y border-white/10 sm:grid-cols-3">
                <div className="py-4 sm:border-r sm:border-white/10 sm:pr-5">
                  <p className="font-[Marcellus] text-[20px] text-[#F1D77A]">
                    70 Acres
                  </p>
                  <p className="mt-1 font-[Poppins] text-[9px] tracking-[0.12em] text-white/45 uppercase">
                    Integrated Township
                  </p>
                </div>

                <div className="border-white/10 py-4 sm:border-r sm:px-5">
                  <p className="font-[Marcellus] text-[20px] text-[#F1D77A]">
                    More Space
                  </p>
                  <p className="mt-1 font-[Poppins] text-[9px] tracking-[0.12em] text-white/45 uppercase">
                    Freedom To Build
                  </p>
                </div>

                <div className="py-4 sm:pl-5">
                  <p className="font-[Marcellus] text-[20px] text-[#F1D77A]">
                    Your Future
                  </p>
                  <p className="mt-1 font-[Poppins] text-[9px] tracking-[0.12em] text-white/45 uppercase">
                    Built Your Way
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease,
                }}
                className="mt-8"
              >
                <button
                  type="button"
                  onClick={openExploreForm}
                  className="group flex h-11 w-43.75 items-center justify-center gap-2 border border-[#D4AF37]/60 bg-[#F1D77A] font-[Poppins] text-[10px] font-semibold tracking-[0.12em] text-[#541215] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F1D77A] hover:bg-white hover:shadow-[0_14px_35px_rgba(212,175,55,0.18)] sm:h-12 sm:w-47.5 sm:text-[11px]"
                >
                  Explore Emperor City
                  <span className="text-[14px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Popup isOpen={open} onClose={() => setOpen(false)} title="Enquiry Form">
        <EnquiryForm isDownload={false} formtype={formType} />
      </Popup>
    </>
  );
}
