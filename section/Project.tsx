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
              PROJECT INTRODUCTION
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
              A BIGGER SPACE{" "}
              <span className="text-[#711717]">FOR A BIGGER FUTURE.</span>
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

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-[350px_1fr] md:gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">
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
            className="w-full"
          >
            <div className="max-w-200">
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: easeInOut,
              }}
              className="mt-12 sm:mt-14"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 32,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: easeInOut,
                  }}
                  className="h-px bg-[#D4AF37]"
                />

                <p className="font-[Poppins] text-[10px] font-semibold tracking-[0.16em] text-[#541215]/70 uppercase sm:text-[11px]">
                  KEY HIGHLIGHTS
                </p>
              </div>

              <motion.h3
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
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: easeInOut,
                }}
                className="mt-3 max-w-162.5 font-[Marcellus] text-[30px] leading-[1.15] text-[#541215] sm:text-[34px] md:text-[38px]"
              >
                WHAT MAKES EMPEROR CITY SPECIAL
              </motion.h3>
            </motion.div>

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
                delay: 0.2,
                ease: easeInOut,
              }}
              className="mt-7 overflow-hidden rounded-[18px] border border-[#541215]/8 bg-white/80 shadow-[0_12px_40px_rgba(43,9,11,0.05)] sm:mt-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.number}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: easeInOut,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(84,18,21,0.025)",
                  }}
                  className="group grid grid-cols-[42px_1fr] gap-3 border-b border-[#541215]/8 px-4 py-5 last:border-b-0 sm:grid-cols-[50px_1fr] sm:gap-4 sm:px-5 sm:py-6 md:grid-cols-[55px_190px_1fr] md:gap-5 md:px-6"
                >
                  <div className="flex items-start pt-0.5">
                    <motion.span
                      whileHover={{
                        x: 5,
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: easeInOut,
                      }}
                      className="font-[Marcellus] text-[20px] leading-none text-[#D4AF37] sm:text-[23px] md:text-[24px]"
                    >
                      {highlight.number}
                    </motion.span>
                  </div>

                  <div className="min-w-0">
                    <motion.h4
                      whileHover={{
                        x: 3,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: easeInOut,
                      }}
                      className="font-[Poppins] text-[12px] leading-[1.45] font-semibold text-[#2B090B] sm:text-[13px] md:text-[14px]"
                    >
                      {highlight.title}
                    </motion.h4>

                    <p className="mt-1.5 font-[Poppins] text-[10px] leading-[1.65] font-normal text-[#777] sm:text-[11px] md:hidden">
                      {highlight.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <p className="font-[Poppins] text-[11px] leading-[1.7] font-normal text-[#777] lg:text-[12px]">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
