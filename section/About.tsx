"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Popup from "@/components/popup";
import EnquiryForm from "@/components/enquiryform";

const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function About() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("Site Visit Enquiry");

  const openSiteVisitForm = () => {
    setFormType("Book a Site Visit");
    setOpen(true);
  };

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-7xl px-1 pt-4 sm:px-2 sm:pt-6 md:px-3 md:pt-7 lg:px-2 lg:pt-8">
          <div className="relative min-h-77.5 overflow-hidden bg-[#6f1114] sm:min-h-82.5 md:h-87.5 md:min-h-0 lg:h-95">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: easeInOut,
              }}
              className="relative z-20 flex h-full w-[72%] flex-col justify-center pr-2 pl-4 sm:w-[66%] sm:pr-4 sm:pl-6 md:w-[58%] md:pl-8 lg:w-[58%] lg:pl-8"
            >
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "3.5rem" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: easeInOut,
                }}
                className="mb-3 h-0.5 w-9 bg-[#F1D77A] sm:mb-4 sm:w-12 md:mb-5 md:w-14"
              />

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: easeInOut,
                }}
                className="max-w-145 font-[Marcellus] text-[20px] leading-tight tracking-[-0.01em] text-[#f2b51d] sm:text-[25px] sm:leading-[1.28] md:text-[36px] lg:text-[42px]"
              >
                THIS ISN’T JUST A PLOT.
                <br />
                IT’S THE START OF TIRUNELVELI’S NEXT BIG ADDRESS.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: easeInOut,
                }}
              >
                <button
                  type="button"
                  onClick={openSiteVisitForm}
                  className="mt-5 flex h-9 w-35 items-center justify-center border border-[#D4AF37]/30 bg-white font-[Poppins] text-[9px] font-semibold tracking-[0.08em] text-[#541215] uppercase shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F1D77A] sm:mt-6 sm:w-36.25 sm:text-[10px]"
                >
                  BOOK A SITE VISIT
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease: easeInOut,
              }}
              className="absolute -right-20 -bottom-1 h-43.75 w-87.5 rounded-t-full bg-[#f5b51b] sm:-right-8.75 sm:h-56.25 sm:w-117.5 md:-right-6.25 md:h-67.5 md:w-140 lg:h-77.5 lg:w-162.5"
            />

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 1.05,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="absolute -right-8.75 bottom-0 z-20 h-51.25 w-68.75 sm:-right-2.5 sm:h-65 sm:w-87.5 md:right-0 md:h-80 md:w-112.5 lg:h-91.25 lg:w-130"
            >
              <Image
                src="/images/family.webp"
                alt="Family"
                fill
                priority
                sizes="
                (max-width: 640px) 275px,
                (max-width: 768px) 350px,
                (max-width: 1024px) 450px,
                520px
              "
                className="object-contain object-bottom"
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[82%] bg-linear-to-r from-[#6f1114] via-[#6f1114]/95 to-transparent sm:w-[75%] md:hidden" />
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 py-10 sm:px-2 sm:py-12 md:grid-cols-[130px_1fr] md:gap-8 md:px-1 md:py-16 lg:grid-cols-[150px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: easeInOut,
            }}
            className="flex items-start gap-3 pt-1"
          >
            <span className="mt-1 h-5 w-0.5 rounded-full bg-[#D4AF37]" />

            <p className="font-[Poppins] text-[9px] font-semibold tracking-[0.14em] text-[#541215]/70 uppercase sm:text-[10px] md:text-[11px]">
              EMPEROR CITY
            </p>
          </motion.div>

          <div className="w-full min-w-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: easeInOut,
              }}
              className="w-full font-[Marcellus] text-[26px] leading-[1.12] tracking-[-0.015em] text-[#541215] sm:text-[38px] md:text-[48px] md:whitespace-nowrap lg:text-[56px] xl:text-[60px]"
            >
              Tirunelveli’s Biggest{" "}
              <span className="text-[#711717]">Integrated Township</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="mt-4 flex items-center gap-3 sm:mt-5 md:mt-6"
            >
              <span className="h-px w-10 bg-[#D4AF37] sm:w-12 md:w-16" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: easeInOut,
              }}
              className="mt-5 max-w-262.5 font-[Poppins] text-[12px] leading-[1.75] font-normal text-[#666666] sm:mt-6 sm:text-[13px] sm:leading-[1.85] md:text-[14px] md:leading-[1.9] lg:text-[15px]"
            >
              A 70-acre integrated community bringing together premium plots,
              villas, apartments and commercial spaces, designed for better
              living and a stronger future.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: easeInOut,
              }}
              className="mt-4 max-w-250 font-[Poppins] text-[12px] leading-[1.75] font-medium text-[#541215] sm:mt-5 sm:text-[13px] sm:leading-[1.85] md:text-[14px] md:leading-[1.9] lg:text-[15px]"
            >
              Plots at Emperor City start from{" "}
              <span className="font-semibold text-[#711717]">
                ₹9.50 Lakhs per cent
              </span>
              , with plot sizes starting from{" "}
              <span className="font-semibold text-[#711717]">700 Sq.Ft.</span>
            </motion.p>
          </div>
        </div>
      </section>
      <Popup isOpen={open} onClose={() => setOpen(false)} title="Enquiry Form">
        <EnquiryForm isDownload={false} formtype={formType} />
      </Popup>
    </>
  );
}
