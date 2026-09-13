"use client";

import {
  Clock3,
  GraduationCap,
  HeartPulse,
  MapPin,
  Route,
} from "lucide-react";
import { motion } from "framer-motion";

const nearbyLocations = [
  { name: "NH-44", time: "1 min" },
  { name: "Samathanapuram Bus Stand", time: "4 mins" },
  { name: "Shantinagar Bus Stand", time: "5 mins" },
  { name: "Palayamkottai Bus Stand", time: "5 mins" },
  { name: "Melapalayam Railway Station", time: "8 mins" },
  { name: "Tirunelveli Junction", time: "11 mins" },
  { name: "Tirunelveli Airport", time: "20 mins" },
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
      className="
        relative
        overflow-hidden
        bg-[#FBFAF7]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >


      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-130
          w-130
          rounded-full
          bg-[#D4AF37]/5.5
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-125
          w-125
          rounded-full
          bg-[#541215]/2.5
          blur-[150px]
        "
      />
    
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
        "
      >

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  className="
    relative
    grid
    grid-cols-1
    gap-8
    border-b
    border-[#541215]/10
    pb-12
    md:gap-12
    lg:grid-cols-[1.1fr_0.9fr]
    lg:items-end
    lg:pb-14
  "
>
<motion.div variants={headerVariants}>
        <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-[#D4AF37]" />

      <span
        className="
          font-[Poppins]
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[#711717]
          sm:text-[10px]
        "
      >
        Location & Connectivity
      </span>
    </div>

    <h2
      className="
        max-w-180
        font-[Marcellus]
        text-[42px]
        leading-[1.02]
        tracking-tight
        text-[#541215]
        sm:text-[52px]

      "
    >
      Connected To Where
      <br />
      <span className="text-[#711717]">
        Life Takes You.
      </span>
    </h2>
  </motion.div>

<motion.div
  variants={contentVariants}
  className="relative lg:pb-1"
>
        <div
      className="
        absolute
        -left-5
        top-1
        hidden
        h-full
        w-px
        bg-linear-to-b
        from-[#D4AF37]
        via-[#D4AF37]/40
        to-transparent
        lg:block
      "
    />

    <p
      className="
        max-w-130
        font-[Poppins]
        text-[13px]
        leading-7
        text-[#541215]/60
        sm:text-[14px]
        sm:leading-8
        lg:text-[15px]
      "
    >
      Located at{" "}
      <span className="font-semibold text-[#711717]">
        VM Chatram, Palayamkottai Taluk,
        Tirunelveli District - 627011
      </span>
      , Emperor City keeps you connected to key parts
      of Tirunelveli while offering the advantage of a
      developing location.
    </p>

    <div className="mt-6 flex items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-[#D4AF37]/40
          bg-white
          text-[#711717]
          shadow-[0_6px_20px_rgba(84,18,21,0.06)]
        "
      >
        <MapPin size={16} strokeWidth={1.5} />
      </div>

      <div>
        <p
          className="
            font-[Poppins]
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#541215]/40
          "
        >
          Project Location
        </p>

        <p
          className="
            mt-0.5
            font-[Poppins]
            text-[11px]
            font-medium
            text-[#541215]
          "
        >
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
  viewport={{ once: true, amount: 0.15 }}
  className="
    mt-16
    grid grid-cols-1 gap-6
    sm:mt-20
    lg:grid-cols-3
    lg:gap-7
  "
>
 
<motion.div
  variants={cardVariants}
  whileHover={{
    y: -8,
    transition: {
      duration: 0.35,
      ease,
    },
  }}
    className="
      group relative
      overflow-hidden
      rounded-[28px]
      border border-[#541215]/8
      bg-white
      p-7
      shadow-[0_15px_50px_rgba(43,9,11,0.045)]
      transition-all duration-500
      hover:-translate-y-2
      hover:border-[#D4AF37]/35
      hover:shadow-[0_25px_70px_rgba(43,9,11,0.09)]
      sm:p-8
      lg:p-9
    "
  >
    <div
      className="
        absolute left-0 top-0
        h-0.75 w-20
        bg-[#D4AF37]
      "
    />
    <span
      className="
        pointer-events-none
        absolute right-5 top-3
        font-[Marcellus]
        text-[90px]
        leading-none
        text-[#541215]/4
      "
    >
      01
    </span>

    <div className="relative">
      <div
        className="
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          bg-[#541215]
          text-[#F1D77A]
          shadow-[0_10px_25px_rgba(84,18,21,0.16)]
          transition-transform duration-500
          group-hover:scale-105
        "
      >
        <MapPin size={22} strokeWidth={1.5} />
      </div>

      <div className="mt-7">
        <p
          className="
            font-[Poppins]
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#D4AF37]
          "
        >
          Easy Access
        </p>

        <h3
          className="
            mt-2
            font-[Marcellus]
            text-[28px]
            leading-tight
            text-[#541215]
          "
        >
          Nearby Locations
        </h3>
      </div>

      <div className="my-7 h-px bg-[#541215]/[0.07]" />

      <div>
        {nearbyLocations.map((location, index) => (
          <div
            key={location.name}
            className="
              group/row
              flex items-center justify-between
              gap-4
              border-b border-[#541215]/5.5
              py-3.5
              last:border-0
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="
                  flex h-5 w-5 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#541215]/[0.035]
                  font-[Poppins]
                  text-[8px]
                  font-semibold
                  text-[#711717]/55
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  truncate
                  font-[Poppins]
                  text-[11px]
                  font-medium
                  text-[#541215]/65
                  sm:text-xs
                "
              >
                {location.name}
              </span>
            </div>

            <span
              className="
                flex shrink-0
                items-center gap-1.5
                font-[Poppins]
                text-[10px]
                font-semibold
                text-[#711717]
              "
            >
              <Clock3
                size={11}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />
              {location.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>

<motion.div
  variants={cardVariants}
  whileHover={{
    y: -8,
    transition: {
      duration: 0.35,
      ease,
    },
  }}
      className="
      group relative
      overflow-hidden
      rounded-[28px]
      border border-[#541215]/8
      bg-[#F8F6F1]
      p-7
      shadow-[0_15px_50px_rgba(43,9,11,0.04)]
      transition-all duration-500
      hover:-translate-y-2
      hover:border-[#D4AF37]/35
      hover:shadow-[0_25px_70px_rgba(43,9,11,0.09)]
      sm:p-8
      lg:p-9
    "
  >
    <div
      className="
        pointer-events-none
        absolute right-0 top-0
        h-24 w-24
        border-b border-l
        border-[#D4AF37]/20
      "
    />

    <span
      className="
        pointer-events-none
        absolute right-5 top-3
        font-[Marcellus]
        text-[90px]
        leading-none
        text-[#541215]/2.5
      "
    >
      02
    </span>

    <div className="relative flex h-full flex-col">
      <div
        className="
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-[#D4AF37]/35
          bg-white
          text-[#711717]
          shadow-[0_8px_25px_rgba(43,9,11,0.05)]
          transition-all duration-500
          group-hover:border-[#D4AF37]/70
        "
      >
        <GraduationCap size={23} strokeWidth={1.5} />
      </div>

      <div className="mt-7">
        <p
          className="
            font-[Poppins]
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#D4AF37]
          "
        >
          Everyday Convenience
        </p>

        <h3
          className="
            mt-2
            font-[Marcellus]
            text-[28px]
            leading-tight
            text-[#541215]
          "
        >
          Schools & Healthcare
        </h3>
      </div>

      <div className="my-7 h-px bg-[#541215]/[0.07]" />

      <p
        className="
          font-[Poppins]
          text-[13px]
          leading-7
          text-[#541215]/60
          sm:text-sm
          sm:leading-8
        "
      >
        The project is also conveniently located near established
        educational and healthcare destinations, including{" "}
        <span className="font-semibold text-[#711717]">
          St. Antony&apos;s Public School
        </span>
        ,{" "}
        <span className="font-semibold text-[#711717]">
          Sri Jayendra Swamigal Silver Jubilee School
        </span>{" "}
        and{" "}
        <span className="font-semibold text-[#711717]">
          Tirunelveli Medical College Hospital.
        </span>
      </p>

      <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
        <div
          className="
            rounded-2xl
            border border-[#541215]/[0.07]
            bg-white/70
            p-4
          "
        >
          <GraduationCap
            size={17}
            strokeWidth={1.4}
            className="text-[#D4AF37]"
          />

          <p
            className="
              mt-3
              font-[Poppins]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#541215]/45
            "
          >
            Education
          </p>

          <p
            className="
              mt-1
              font-[Poppins]
              text-[10px]
              font-medium
              text-[#541215]
            "
          >
            Nearby Schools
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border border-[#541215]/[0.07]
            bg-white/70
            p-4
          "
        >
          <HeartPulse
            size={17}
            strokeWidth={1.4}
            className="text-[#D4AF37]"
          />

          <p
            className="
              mt-3
              font-[Poppins]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#541215]/45
            "
          >
            Healthcare
          </p>

          <p
            className="
              mt-1
              font-[Poppins]
              text-[10px]
              font-medium
              text-[#541215]
            "
          >
            Medical Facilities
          </p>
        </div>
      </div>
    </div>
  </motion.div>

<motion.div
  variants={cardVariants}
  whileHover={{
    y: -8,
    transition: {
      duration: 0.35,
      ease,
    },
  }}    className="
      group relative
      overflow-hidden
      rounded-[28px]
      border border-[#541215]/8
      bg-white
      p-7
      shadow-[0_15px_50px_rgba(43,9,11,0.045)]
      transition-all duration-500
      hover:-translate-y-2
      hover:border-[#D4AF37]/35
      hover:shadow-[0_25px_70px_rgba(43,9,11,0.09)]
      sm:p-8
      lg:p-9
    "
  >
    <div
      className="
        pointer-events-none
        absolute right-0 top-0
        h-32 w-32
        border-b border-l
        border-[#D4AF37]/15
      "
    />

    <div
      className="
        pointer-events-none
        absolute bottom-0 right-0
        h-44 w-44
        rounded-full
        bg-[#D4AF37]/4.5
        blur-[70px]
      "
    />

    <span
      className="
        pointer-events-none
        absolute right-5 top-3
        font-[Marcellus]
        text-[90px]
        leading-none
        text-[#541215]/4
      "
    >
      03
    </span>

    <div className="relative flex h-full flex-col">
      <div
        className="
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-[#D4AF37]/40
          bg-[#FCFAF7]
          text-[#711717]
          shadow-[0_8px_25px_rgba(43,9,11,0.05)]
          transition-all duration-500
          group-hover:bg-[#541215]
          group-hover:text-[#F1D77A]
        "
      >
        <Route size={23} strokeWidth={1.5} />
      </div>

      <div className="mt-7">
        <p
          className="
            font-[Poppins]
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#D4AF37]
          "
        >
          Looking Ahead
        </p>

        <h3
          className="
            mt-2
            font-[Marcellus]
            text-[28px]
            leading-tight
            text-[#541215]
          "
        >
          Future Connectivity
        </h3>
      </div>

      <div className="my-7 h-px bg-[#541215]/[0.07]" />

      <p
        className="
          font-[Poppins]
          text-[13px]
          leading-7
          text-[#541215]/60
          sm:text-sm
          sm:leading-8
        "
      >
        An upcoming{" "}
        <span className="font-semibold text-[#711717]">
          60-ft internal road planned towards KTC Nagar
        </span>{" "}
        adds another layer of connectivity and future growth potential
        to the location.
      </p>

      <div
        className="
          relative mt-auto
          overflow-hidden
          rounded-2xl
          border border-[#541215]/8
          bg-[#F8F6F1]
          px-5 py-5
        "
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p
              className="
                font-[Poppins]
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#541215]/40
              "
            >
              Planned Road
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <span
                className="
                  font-[Marcellus]
                  text-[38px]
                  leading-none
                  text-[#541215]
                "
              >
                60
              </span>

              <span
                className="
                  font-[Poppins]
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#711717]
                "
              >
                FT
              </span>
            </div>
          </div>

          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#D4AF37]/30
              bg-white
            "
          >
            <Route
              size={16}
              strokeWidth={1.4}
              className="text-[#D4AF37]"
            />
          </div>
        </div>

        <div className="mt-4 h-px bg-[#541215]/[0.07]" />

        <p
          className="
            mt-3
            font-[Poppins]
            text-[9px]
            font-medium
            uppercase
            tracking-[0.13em]
            text-[#541215]/45
          "
        >
          Towards KTC Nagar
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}
