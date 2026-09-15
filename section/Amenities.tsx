"use client";

import {
  Route,
  Waves,
  LockKeyhole,
  ShieldCheck,
  Lightbulb,
  Droplets,
  Trees,
  Building2,
} from "lucide-react";

import { motion } from "framer-motion";

const amenities = [
  {
    title: "Grand Clubhouse",
    icon: Building2,
  },
  {
    title: "Swimming Pool",
    icon: Waves,
  },
  {
    title: "Blacktop Roads",
    icon: Route,
  },
  {
    title: "Gated Community",
    icon: LockKeyhole,
  },
  {
    title: "24/7 Security",
    icon: ShieldCheck,
  },
  {
    title: "Solar Street Lights",
    icon: Lightbulb,
  },
  {
    title: "Quality Ground Water",
    icon: Droplets,
  },
  {
    title: "Avenue Trees",
    icon: Trees,
  },
];

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

function AmenityRow({
  items,
}: {
  items: typeof amenities;
}) {
  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        grid
        w-full
        grid-cols-2
        overflow-hidden
        rounded-2xl
        border
        border-[#541215]/8
        bg-[#FBFAF7]/70
        px-1
        py-1
        shadow-[0_8px_30px_rgba(43,9,11,0.035)]
        sm:px-2
        sm:py-2
        lg:flex
        lg:items-center
        lg:justify-center
      "
    >
      {items.map((amenity, index) => {
        const Icon = amenity.icon;

        return (
          <motion.div
            key={amenity.title}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="
              group
              flex
              min-h-18
              items-center
              border-b
              border-[#541215]/8
              px-2
              py-2
              last:border-b-0
              sm:min-h-19
              sm:px-3
              lg:h-16
              lg:min-h-0
              lg:flex-1
              lg:border-b-0
              lg:px-0
              lg:py-0
            "
          >
            <motion.div
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
              className="
                flex
                w-full
                items-center
                gap-2.5
                px-2
                sm:gap-3
                sm:px-3
                lg:gap-4
                lg:px-5
                xl:px-7
              "
            >

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: -4,
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  bg-[#541215]/4
                  text-[#541215]
                  sm:h-10
                  sm:w-10
                "
              >
                <Icon
                  size={17}
                  strokeWidth={1.7}
                  className="
                    sm:h-4.75
                    sm:w-4.75
                  "
                />
              </motion.div>

              <motion.span
                whileHover={{
                  color: "#541215",
                }}
                transition={{
                  duration: 0.4,
                  ease: easeInOut,
                }}
                className="
                  whitespace-normal
                  font-[Poppins]
                  text-[11px]
                  font-medium
                  leading-4
                  tracking-[0.01em]
                  text-[#252525]
                  sm:text-[12px]
                  lg:whitespace-nowrap
                  lg:text-[14px]
                "
              >
                {amenity.title}
              </motion.span>
            </motion.div>

            {index !== items.length - 1 && (
              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: easeInOut,
                }}
                className="
                  hidden
                  h-9.5
                  w-px
                  shrink-0
                  bg-[#541215]/10
                  lg:block
                "
              />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function ProjectAmenities() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        xl:py-28
      "
    >
     
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
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#D4AF37]/[0.035]
          blur-3xl
        "
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
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-[#541215]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-330
          px-2
        "
      >
        
        <div
          className="
            grid
            grid-cols-1
            gap-1
            md:grid-cols-[180px_1fr]
            lg:grid-cols-[210px_1fr]
          "
        >
         
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

              <p
                className="
                  font-[Poppins]
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#541215]/65
                "
              >
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
              className="
                max-w-full
                font-[Marcellus]
                text-[38px]
                leading-[1.08]
                tracking-[-0.015em]
                text-[#541215]
                sm:text-[46px]
                md:text-[52px]
                lg:text-[56px]
              "
            >
              DESIGNED FOR BETTER{" "}
              <span className="text-[#711717]">
                EVERYDAY LIVING
              </span>
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
              className="
                mt-4
                max-w-180
                font-[Poppins]
                text-[12px]
                font-normal
                leading-6
                text-[#541215]/60
                sm:mt-5
                sm:text-[13px]
                sm:leading-7
                md:text-[14px]
              "
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
              className="
                mt-5
                flex
                items-center
                gap-2
                sm:mt-6
              "
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

        <div
          className="
            mt-14
            space-y-5
            lg:mt-16
          "
        >
          <AmenityRow items={amenities.slice(0, 4)} />
          <AmenityRow items={amenities.slice(4, 8)} />
        </div>
      </div>
    </section>
  );
}