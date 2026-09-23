"use client";

import Image from "next/image";
import { ShieldCheck, MapPinned, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/enquiryform";

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
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

  const featureVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.96,
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

  const formVariants = {
    hidden: {
      opacity: 0,
      x: 45,
      y: 20,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.15,
        ease,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/hero1.webp"
        alt="Premium plots in Tirunelveli"
        width={1567}
        height={869}
        priority
        className="h-auto w-full object-cover"
      />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[55%] w-[52%] bg-linear-to-r from-white/95 via-white/70 to-transparent mask-[radial-gradient(ellipse_at_top_left,black_0%,black_45%,transparent_80%)] blur-[2px] [-webkit-mask-image:radial-gradient(ellipse_at_top_left,black_0%,black_45%,transparent_80%)]" />

        <div className="relative mx-auto flex h-full w-full max-w-[1567px] items-start px-5 pt-24 sm:px-8 sm:pt-28 md:px-12 md:pt-32 lg:px-16 lg:pt-36 xl:px-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden w-full max-w-162.5 ml-[-10] md:block"
          >
            <motion.h1
              variants={itemVariants}
              className="bg-linear-to-r from-[#7A1A15] to-[#541215] bg-clip-text font-[Poppins] text-[23px] font-medium leading-[1.12] font-extrabold tracking-[-0.02em] text-transparent uppercase sm:text-[30px] md:text-[36px] lg:whitespace-nowrap"
            >
              Your Dream Plot Starts Here
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-3 bg-linear-to-r from-[#7A1A15] to-[#541215] bg-clip-text font-[Poppins] text-[17px] leading-tight font-medium text-transparent sm:mt-4 sm:text-[21px] md:text-[25px] "
            >
              Premium plots with clubhouse
            </motion.p>

            {/* <motion.div
              variants={itemVariants}
              className="hidden sm:mt-6 sm:flex sm:flex-nowrap sm:items-center sm:justify-start"
            >
              <motion.div
                variants={featureVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease,
                  },
                }}
                className="group flex items-center pr-3 sm:pr-4 md:pr-5"
              >
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-linear-to-br from-[#8A211A] via-[#6D1715] to-[#4B1012] shadow-[0_5px_16px_rgba(84,18,21,0.22)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_22px_rgba(84,18,21,0.3)] sm:h-13.5 sm:w-13.5 md:h-14.5 md:w-14.5 lg:h-15 lg:w-15">
                  <div className="absolute inset-1 rounded-full border border-[#D4AF37]/20" />

                  <div className="absolute inset-3 rounded-full bg-[#D4AF37]/5 blur-md" />

                  <ShieldCheck
                    size={23}
                    strokeWidth={1.5}
                    className="relative z-10 text-[#F2D477] sm:size-6.25"
                  />

                  <span className="absolute right-1.25 bottom-1.25 z-20 h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.9)]" />
                </div>

                <div className="ml-2 sm:ml-2.5">
                  <p className="font-[Poppins] text-[11px] font-bold tracking-wide text-[#7A1A15] sm:text-xs md:text-sm">
                    DTCP
                  </p>

                  <p className="mt-0.5 font-[Poppins] text-[10px] font-semibold whitespace-nowrap text-[#541215]/65 sm:text-[11px] md:text-xs">
                    Approved
                  </p>
                </div>
              </motion.div>

              <div className="hidden h-8 w-px bg-linear-to-b from-transparent via-[#D4AF37]/45 to-transparent sm:block md:h-9" />

              <motion.div
                variants={featureVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease,
                  },
                }}
                className="group flex items-center px-1 sm:px-4 md:px-5"
              >
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-linear-to-br from-[#8A211A] via-[#6D1715] to-[#4B1012] shadow-[0_5px_16px_rgba(84,18,21,0.22)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_22px_rgba(84,18,21,0.3)] sm:h-13.5 sm:w-13.5 md:h-14.5 md:w-14.5 lg:h-15 lg:w-15">
                  <div className="absolute inset-1 rounded-full border border-[#D4AF37]/20" />

                  <div className="absolute inset-3 rounded-full bg-[#D4AF37]/5 blur-md" />

                  <MapPinned
                    size={22}
                    strokeWidth={1.5}
                    className="relative z-10 text-[#F2D477] sm:size-6"
                  />

                  <span className="absolute right-1.25 bottom-1.25 z-20 h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.9)]" />
                </div>

                <div className="ml-2 sm:ml-2.5">
                  <p className="font-[Poppins] text-[11px] font-bold tracking-wide text-[#7A1A15] sm:text-xs md:text-sm">
                    Prime
                  </p>

                  <p className="mt-0.5 font-[Poppins] text-[10px] font-semibold whitespace-nowrap text-[#541215]/65 sm:text-[11px] md:text-xs">
                    Location
                  </p>
                </div>
              </motion.div>

              <div className="hidden h-8 w-px bg-linear-to-b from-transparent via-[#D4AF37]/45 to-transparent sm:block md:h-9" />

              <motion.div
                variants={featureVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease,
                  },
                }}
                className="group flex items-center px-1 sm:px-4 md:px-5"
              >
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-linear-to-br from-[#8A211A] via-[#6D1715] to-[#4B1012] shadow-[0_5px_16px_rgba(84,18,21,0.22)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_22px_rgba(84,18,21,0.3)] sm:h-13.5 sm:w-13.5 md:h-14.5 md:w-14.5 lg:h-15 lg:w-15">
                  <div className="absolute inset-1 rounded-full border border-[#D4AF37]/20" />

                  <div className="absolute inset-3 rounded-full bg-[#D4AF37]/5 blur-md" />

                  <Handshake
                    size={22}
                    strokeWidth={1.5}
                    className="relative z-10 text-[#F2D477] sm:size-6"
                  />

                  <span className="absolute right-1.25 bottom-1.25 z-20 h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.9)]" />
                </div>

                <div className="ml-2 sm:ml-2.5">
                  <p className="font-[Poppins] text-[11px] font-bold tracking-wide text-[#7A1A15] sm:text-xs md:text-sm">
                    Clear
                  </p>

                  <p className="mt-0.5 font-[Poppins] text-[10px] font-semibold whitespace-nowrap text-[#541215]/65 sm:text-[11px] md:text-xs">
                    Title
                  </p>
                </div>
              </motion.div>
            </motion.div> */}
          </motion.div>

          {/* <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-1/2 right-32 hidden w-102.5 -translate-y-1/2 lg:block xl:right-36 xl:w-115"
          >
            <div className="absolute -inset-2 rounded-[26px] bg-[#D4AF37]/15 blur-xl" />

            <div className="bg-gray/70 relative overflow-hidden rounded-3xl border border-[#D4AF37]/35 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#7A1A15]/10 blur-3xl" />

              <div className="relative mb-6 text-center">
                <h2 className="font-[Poppins] text-[30px] font-bold tracking-tight text-[#541215]">
                  Enquire Now
                </h2>

                <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-[#D4AF37]" />

                <p className="mt-3 font-[Poppins] text-[13px] leading-relaxed font-medium text-[#541215]/70">
                  Discover premium plots designed for
                  <br />
                  your dream investment.
                </p>
              </div>

              <div className="relative">
                <EnquiryForm
                  isDownload={false}
                  formtype="Hero Enquiry Form"
                  redirectToThankYou={true}
                />
              </div>

              <div className="relative mt-5 flex items-center justify-center gap-2 border-t border-[#541215]/10 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                <span className="font-[Poppins] text-[10px] font-bold tracking-[0.12em] text-[#541215]/60 uppercase">
                  Premium Plots • Trusted Investment
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
