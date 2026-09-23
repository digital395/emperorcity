"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Popup from "@/components/popup";
import EnquiryForm from "@/components/enquiryform";

import { isLeadValid, saveLeadVerification } from "@/utils/LeadVerification";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SpaceForMore() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("Explore Emperor City");
  const [leadValid, setLeadValid] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      name: "Phase 1",
      image: "/images/layout/phase-1.webp",
      alt: "Emperor City Phase 1 Master Plan",
    },
    {
      name: "Phase 2",
      image: "/images/layout/phase-2.jpeg",
      alt: "Emperor City Phase 2 Master Plan",
    },
  ];

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
            {/* IMAGE / PHASE CAROUSEL */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="mb-5 flex items-center justify-center gap-2 sm:justify-center">
                {phases.map((phase, index) => (
                  <button
                    key={phase.name}
                    type="button"
                    onClick={() => setActivePhase(index)}
                    className={`relative px-5 py-2.5 font-[Poppins] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 sm:px-7 sm:text-[11px] ${
                      activePhase === index
                        ? "bg-[#F1D77A] text-[#541215]"
                        : "border border-[#D4AF37]/35 bg-white/5 text-white/60 hover:border-[#D4AF37]/60 hover:text-white"
                    } `}
                  >
                    {phase.name}
                    {activePhase === index && (
                      <motion.span
                        layoutId="activePhase"
                        className="absolute right-0 -bottom-px left-0 h-0.5 bg-[#D4AF37]"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                  className="relative"
                >
                  <Image
                    src={phases[activePhase].image}
                    alt={phases[activePhase].alt}
                    width={900}
                    height={900}
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className={`h-auto w-full object-cover transition-all duration-700 ${
                      leadValid ? "blur-0 scale-100" : "scale-105 blur-md"
                    }`}
                  />

                  {/* Locked overlay */}
                  {!leadValid && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#541215]/45 backdrop-blur-[1px]">
                      <motion.button
                        type="button"
                        onClick={openExploreForm}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          ease,
                        }}
                        className="group flex h-12 items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/70 bg-[#F1D77A] px-6 font-[Poppins] text-[10px] font-semibold tracking-[0.12em] text-[#541215] uppercase shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(212,175,55,0.25)] sm:h-13 sm:px-8 sm:text-[11px]"
                      >
                        Explore Emperor City
                        <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </motion.button>
                    </div>
                  )}

                  {/* Valid image overlay */}
                  {leadValid && (
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#541215]/20 via-transparent to-transparent" />
                  )}
                </motion.div>
              </div>

              {/* Carousel dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {phases.map((phase, index) => (
                  <button
                    key={phase.name}
                    type="button"
                    onClick={() => setActivePhase(index)}
                    aria-label={`View ${phase.name}`}
                    className="p-1"
                  >
                    <motion.span
                      animate={{
                        width: activePhase === index ? 28 : 7,
                        opacity: activePhase === index ? 1 : 0.4,
                      }}
                      transition={{
                        duration: 0.3,
                        ease,
                      }}
                      className="block h-1 rounded-full bg-[#D4AF37]"
                    />
                  </button>
                ))}
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
