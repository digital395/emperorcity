"use client";

import { motion } from "framer-motion";
import { amenities } from "@/data/amenities";

const easeInOut = [0.42, 0, 0.58, 1] as const;

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.1,
      ease: easeInOut,
    },
  }),
};

function AmenityGrid({ items }: { items: typeof amenities }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="w-full"
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-20 xl:gap-x-10">
        {items.map((amenity) => (
          <motion.div
            key={amenity.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: easeInOut,
                },
              },
            }}
            whileHover={{
              y: -4,
            }}
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-25 w-25 items-center justify-center transition-transform duration-500 group-hover:scale-105 sm:h-28.75 sm:w-28.75 lg:h-31.25 lg:w-31.25">
              <img
                src={amenity.icon}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="mt-5 max-w-45 font-[Marcellus] text-[17px] leading-[1.3] text-[#541215] transition-colors duration-300 group-hover:text-[#711717] sm:mt-6 sm:text-[19px] lg:text-[20px]">
              {amenity.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectAmenities() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 xl:py-28">
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
        className="pointer-events-none absolute top-20 -left-40 h-80 w-80 rounded-full bg-[#D4AF37]/[0.035] blur-3xl"
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
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#541215]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-330 px-2">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              ease: easeInOut,
            }}
            className="pt-2"
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
                  duration: 0.8,
                  ease: easeInOut,
                }}
                className="h-px bg-[#D4AF37]"
              />

              <p className="font-[Poppins] text-[12px] font-semibold tracking-[0.28em] text-[#541215]/65 uppercase">
                FEATURES
              </p>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 1,
                ease: easeInOut,
              }}
              className="max-w-full font-[Marcellus] text-[38px] leading-[1.08] tracking-[-0.015em] text-[#541215] sm:text-[46px] md:text-[52px] lg:text-[56px]"
            >
              DESIGNED FOR BETTER{" "}
              <span className="text-[#711717]">EVERYDAY LIVING</span>
            </motion.h2>

            <motion.p
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: easeInOut,
              }}
              className="mt-4 max-w-180 font-[Poppins] text-[12px] leading-6 font-normal text-[#541215]/60 sm:mt-5 sm:text-[13px] sm:leading-7 md:text-[14px]"
            >
              Everything at Emperor City is planned to make everyday life more
              convenient, secure and comfortable.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              whileInView={{
                opacity: 1,
                width: "auto",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: easeInOut,
              }}
              className="mt-5 flex items-center gap-2 sm:mt-6"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 56,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: easeInOut,
                }}
                className="h-0.5 bg-[#D4AF37]"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <AmenityGrid items={amenities} />
        </div>
      </div>
    </section>
  );
}
