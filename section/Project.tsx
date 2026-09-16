"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export default function ProjectIntroduction() {
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
          delay: 0.2,
          ease: easeInOut,
        }}
        className="pointer-events-none absolute -right-32 bottom-10 h-105 w-105 rounded-full bg-[#541215]/[0.035] blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-3 pb-2 md:pb-8">
        <div className="mt-4 grid grid-cols-1 items-center gap-12 md:mt-5 md:grid-cols-[350px_1fr] md:gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl border border-[#D4AF37]/35"
            />

            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.8,
                ease: easeInOut,
              }}
              className="relative h-92.5 w-full overflow-hidden rounded-[22px] bg-[#541215] shadow-[0_20px_55px_rgba(43,9,11,0.14)] sm:h-107.5 md:h-115 lg:h-125"
            >
              <motion.div
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.4,
                  ease: easeInOut,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/project.webp"
                  alt="Emperor City"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-[#2B090B]/75 via-[#2B090B]/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#541215]/40 to-transparent" />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.8,
                  delay: 0.5,
                  ease: easeInOut,
                }}
                className="absolute bottom-7 left-7"
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 40,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: easeInOut,
                  }}
                  className="mb-3 h-px bg-[#D4AF37]"
                />

                <p className="font-[Poppins] text-[12px] leading-normal font-medium tracking-[0.12em] text-white uppercase sm:text-[13px]">
                  EMPEROR CITY
                  <br />
                  <span className="text-[#F1D77A]">TIRUNELVELI</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="flex w-full items-center"
          >
            <div className="max-w-200">
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
                A BIGGER SPACE{" "}
                <span className="text-[#711717]">FOR A BIGGER FUTURE.</span>
              </motion.h2>
              <br />
              <motion.p
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  ease: easeInOut,
                }}
                className="font-[Poppins] text-[13px] leading-[1.9] font-normal text-[#555] sm:text-[14px] lg:text-[15px]"
              >
                Emperor City is a thoughtfully planned 70-acre integrated
                township at VM Chatram, Palayamkottai, Tirunelveli. With premium
                residential plots, villas, apartments and commercial spaces, it
                brings everything you need for a well-connected and future-ready
                community.
              </motion.p>

              <motion.p
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: easeInOut,
                }}
                className="mt-5 font-[Poppins] text-[13px] leading-[1.9] font-normal text-[#555] sm:text-[14px] lg:text-[15px]"
              >
                Whether you are planning your dream home or looking for a
                promising investment, Emperor City gives you the space to build
                your future your way.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
