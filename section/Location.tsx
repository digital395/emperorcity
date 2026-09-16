"use client";

import {
  GraduationCap,
  HeartPulse,
  BusFront,
  TrainFront,
  MapPin,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const locationCategories = [
  {
    title: "Schools",
    icon: GraduationCap,
    items: [
      "Opposite to Sri Jayendra Swamigal Silver Jubilee School",
      "1 Min drive from St. Antony's Public School (CBSE)",
      "3 Mins drive from Rose Mary Public School (CBSE)",
      "4 Mins drive from Pushpalata Vidya Mandir",
      "4 Mins drive from Pushpalata British International School",
    ],
  },
  {
    title: "Colleges",
    icon: Building2,
    items: [
      "4 Mins drive from Tirunelveli Medical College Hospital",
      "4 Mins drive from Sadakathullah Appa College",
      "6 Mins drive from Saradha College",
      "4 Mins drive from St. Xavier's College",
      "6 Mins drive from St. Xavier's College of Education",
    ],
  },
  {
    title: "Hospitals",
    icon: HeartPulse,
    items: [
      "4 Mins drive Sri Vishnupriya Multi-Speciality Hospital",
      "4 Mins drive from Venkateshwara Hospitals",
      "4 Mins drive from Tirunelveli Govt Hospital",
      "6 Mins drive from Indrani Chelladurai Mission Hospital",
      "6 Mins drive from Royal Hospital",
    ],
  },
  {
    title: "Bus Stop",
    icon: BusFront,
    items: [
      "5 Mins drive from Shantinagar bus stand",
      "4 Mins drive from Samathanapuram Bus stand",
      "5 Mins drive from Palayamkottai Bus Stand",
    ],
  },
  {
    title: "Railway Stations",
    icon: TrainFront,
    items: [
      "11 Mins drive from Tirunelveli Junction",
      "8 Mins drive from Melapalayam railway station",
    ],
  },
  {
    title: "Important Places",
    icon: MapPin,
    items: [
      "12 Mins drive from Arulmigu Nellaiyappar Temple",
      "12 Mins drive from Thamirabarani River Bridge",
    ],
  },
];

export default function LocationConnectivity() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease,
        delay: 0.15,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease,
      },
    },
  };

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#FBFAF7] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-130 w-130 rounded-full bg-[#D4AF37]/5.5 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 -left-40 h-125 w-125 rounded-full bg-[#541215]/2.5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative grid grid-cols-1 gap-8 border-b border-[#541215]/10 pb-12 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-14"
        >
          <motion.div variants={headerVariants}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="font-[Poppins] text-[9px] font-semibold tracking-[0.3em] text-[#711717] uppercase sm:text-[10px]">
                Location & Connectivity
              </span>
            </div>

            <h2 className="max-w-180 font-[Marcellus] text-[42px] leading-[1.02] tracking-tight text-[#541215] sm:text-[52px]">
              Connected To Where
              <br />
              <span className="text-[#711717]">Life Takes You.</span>
            </h2>
          </motion.div>

          <motion.div variants={contentVariants} className="relative lg:pb-1">
            <div className="absolute top-1 -left-5 hidden h-full w-px bg-linear-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent lg:block" />

            <p className="max-w-130 font-[Poppins] text-[13px] leading-7 text-[#541215]/60 sm:text-[14px] sm:leading-8 lg:text-[15px]">
              Located at{" "}
              <span className="font-semibold text-[#711717]">
                VM Chatram, Palayamkottai Taluk, Tirunelveli District - 627011
              </span>
              , Emperor City keeps you connected to key parts of Tirunelveli
              while offering the advantage of a developing location.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white text-[#711717] shadow-[0_6px_20px_rgba(84,18,21,0.06)]">
                <MapPin size={16} strokeWidth={1.5} />
              </div>

              <div>
                <p className="font-[Poppins] text-[8px] font-semibold tracking-[0.2em] text-[#541215]/40 uppercase">
                  Project Location
                </p>

                <p className="mt-0.5 font-[Poppins] text-[11px] font-medium text-[#541215]">
                  VM Chatram · Palayamkottai
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16 xl:gap-x-16"
        >
          {locationCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative"
              >
                {/* Heading */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#711717] sm:h-14 sm:w-14">
                    <Icon
                      size={category.title === "Railway Stations" ? 40 : 38}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="font-[Marcellus] text-[25px] leading-tight text-[#711717] sm:text-[28px]">
                    {category.title}
                  </h3>
                </div>

                {/* Gold divider */}
                <div className="mt-4 h-px w-12 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />

                {/* Details */}
                <ul className="mt-5 space-y-3.5">
                  {category.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-[Poppins] text-[13px] leading-[1.65] text-[#252525] sm:text-[14px]"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#541215]" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
