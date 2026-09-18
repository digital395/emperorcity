"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { highlights } from "@/data/project";

const easeInOut = [0.42, 0, 0.58, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeInOut,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeInOut,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeInOut,
    },
  },
};

export default function TopReason() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBFAF7]">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease: easeInOut,
        }}
        className="pointer-events-none absolute top-20 -left-32 h-95 w-95 rounded-full bg-[#D4AF37]/4.5 blur-[100px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: easeInOut,
        }}
        className="pointer-events-none absolute -right-32 bottom-10 h-105 w-105 rounded-full bg-[#541215]/[0.035] blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-3 py-16">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[200px_1fr]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="flex items-start gap-3 pt-2"
          >
            <motion.span
              initial={{
                height: 0,
              }}
              whileInView={{
                height: 20,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease: easeInOut,
              }}
              className="mt-0.75 w-0.5 rounded-full bg-[#D4AF37]"
            />

            <p className="font-[Poppins] text-[10px] font-semibold tracking-[0.16em] text-[#541215]/70 uppercase sm:text-[11px]">
              KEY HIGHLIGHTS
            </p>
          </motion.div>

          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              className="max-w-250 font-[Marcellus] text-[40px] leading-[1.08] tracking-[-0.015em] text-[#541215] sm:text-[48px] md:text-[52px]"
            >
              WHAT MAKES{"  "}
              <span className="text-[#711717]">EMPEROR CITY SPECIAL</span>
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="mt-5 flex items-center gap-3"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 48,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: easeInOut,
                }}
                className="h-px bg-[#D4AF37]"
              />

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  ease: easeInOut,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"
              />
            </motion.div>
          </div>
        </div>

<div className="mt-12 md:mt-16">
  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    transition={{
      duration: 0.9,
      ease: easeInOut,
    }}
    className="overflow-hidden rounded-[18px] border border-[#541215]/8 bg-white/80 shadow-[0_12px_40px_rgba(43,9,11,0.05)]"
  >
    {highlights.map((highlight, index) => (
      <motion.div
        key={highlight.number}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.65,
          delay: index * 0.08,
          ease: easeInOut,
        }}
        whileHover={{
          backgroundColor: "rgba(84,18,21,0.025)",
        }}
        className="group grid grid-cols-[42px_1fr] gap-3 border-b border-[#541215]/8 px-4 py-5 last:border-b-0 sm:grid-cols-[50px_1fr] sm:gap-4 sm:px-5 sm:py-6 md:grid-cols-[60px_260px_1fr] md:gap-5 md:px-7 md:py-7"
      >
        {/* NUMBER */}
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
          }}
          className="flex items-start"
        >
          <span className="font-[Marcellus] text-[18px] text-[#D4AF37] sm:text-[20px] md:text-[22px]">
            {highlight.number}
          </span>
        </motion.div>

        {/* TITLE */}
        <div className="min-w-0">
          <motion.h4
            whileHover={{
              x: 3,
            }}
            transition={{
              duration: 0.4,
              ease: easeInOut,
            }}
            className="font-[Poppins] text-[12px] leading-[1.45] font-semibold text-[#2B090B] sm:text-[13px] md:text-[14px] lg:text-[15px]"
          >
            {highlight.title}
          </motion.h4>

          {/* MOBILE DESCRIPTION */}
          <p className="mt-2 font-[Poppins] text-[10px] leading-[1.7] font-normal text-[#777] sm:text-[11px] md:hidden">
            {highlight.description}
          </p>
        </div>

        {/* DESKTOP DESCRIPTION */}
        <div className="hidden md:block">
          <p className="font-[Poppins] text-[11px] leading-[1.75] font-normal text-[#777] lg:text-[12px]">
            {highlight.description}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>

      </div>
    </section>
  );
}
