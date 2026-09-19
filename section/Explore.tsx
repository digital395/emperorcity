"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Popup from "@/components/popup";
import EnquiryForm from "@/components/enquiryform";

import { isLeadValid, saveLeadVerification } from "@/utils/LeadVerification";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SpaceForMore() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("Explore Emperor City");
  const [leadValid, setLeadValid] = useState(false);

  // Check lead when component loads
  useEffect(() => {
    setLeadValid(isLeadValid());
  }, []);

  const openExploreForm = () => {
    setFormType("Explore Emperor City");
    setOpen(true);
  };

  // Call this after successful form submission
  const handleFormSuccess = () => {
    saveLeadVerification();
    setLeadValid(true);
    setOpen(false);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#541215]">
        {/* Background accents */}
        <div className="pointer-events-none absolute top-1/2 -left-32 h-105 w-105 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.07] blur-[110px]" />

        <div className="pointer-events-none absolute top-0 -right-40 h-125 w-125 rounded-full bg-[#F1D77A]/[0.035] blur-[130px]" />

        <div className="relative mx-auto w-full max-w-full px-5 py-10 sm:px-7 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.05fr_1.35fr] md:gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:gap-14">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/layout.webp"
                  alt="Emperor City - Master Plan"
                  width={900}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className={`h-auto w-full object-cover transition-all duration-700 ${
                    leadValid ? "blur-0 scale-100" : "scale-105 blur-md"
                  }`}
                />

                {/* Dark overlay when lead is not valid */}
                {!leadValid && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#541215]/45 backdrop-blur-[1px]">
                    <motion.button
                      type="button"
                      onClick={openExploreForm}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="group flex h-12 items-center justify-center gap-2 border rounded-xl border-[#D4AF37]/70 bg-[#F1D77A] px-6 font-[Poppins] text-[10px] font-semibold tracking-[0.12em] text-[#541215] uppercase shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(212,175,55,0.25)] sm:h-13 sm:px-8 sm:text-[11px]"
                    >
                      Explore Emperor City
                      <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.button>
                  </div>
                )}

                {/* Subtle overlay for valid image */}
                {leadValid && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#541215]/20 via-transparent to-transparent" />
                )}
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.1, ease }}
            >
              <h2 className="mt-4 max-w-212.5 font-[Marcellus] text-[34px] leading-[1.08] tracking-[-0.015em] text-white sm:text-[44px] md:text-[50px] lg:text-[58px]">
                EXPLORE THE EMPEROR CITY{" "}
                <span className="text-[#F1D77A]">MASTER PLAN</span>
              </h2>

              <p className="mt-7 max-w-190 font-[Poppins] text-[13px] leading-[1.9] text-white/65 sm:text-[14px] md:text-[15px]">
                Designed to bring convenience, connectivity and community
                together, the master layout features clearly planned
                residential, villa and commercial zones, supported by essential
                amenities and a well-connected road network.
              </p>

  
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM POPUP */}
      <Popup isOpen={open} onClose={() => setOpen(false)} title="Enquiry Form">
        <EnquiryForm
          isDownload={false}
          formtype={formType}
          onSuccess={handleFormSuccess}
        />
      </Popup>
    </>
  );
}
