"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/gallery";

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export default function ProjectVision() {

const [imageOffset, setImageOffset] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setImageOffset((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

const getImage = (index: number) => {
  return images[(index + imageOffset) % images.length];
};

const handleImageClick = (index: number) => {
  setImageOffset((prev) => (prev + index) % images.length);
};

  return (
    <section
      id="gallery"
      className="
        relative
        w-full
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
          -right-40
          top-0
          h-125
          w-125
          rounded-full
          bg-[#D4AF37]/4.5
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-105
          w-105
          rounded-full
          bg-[#541215]/2.5
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
          xl:px-0
        "
      >
        
<motion.div
  variants={itemVariants}
  className="flex flex-col items-center text-center"
>
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
        Project Gallery
      </span>
    </div>
  <h2
    className="
      max-w-full
      font-[Marcellus]
      text-[38px]
      leading-[1.08]
      text-[#541215]
      sm:text-[46px]
      md:text-[52px]
    "
  >
    SEE THE FUTURE{" "}
    <span className="text-[#711717]">
      OF TIRUNELVELI TAKE SHAPE.
    </span>
  </h2>

  <p
    className="
      mt-5
      max-w-162.5
      font-[Poppins]
      text-[12px]
      leading-6
      text-[#541215]/60
      sm:mt-6
      sm:text-[13px]
      sm:leading-7
      md:text-[14px]
    "
  >
    Explore the spaces, surroundings and lifestyle planned at Emperor City.
  </p>
</motion.div>

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={containerVariants}
  className="
    mt-10
    flex
    gap-3
    overflow-x-auto
    overscroll-x-contain
    px-1
    pb-4
    snap-x
    snap-mandatory
    [-ms-overflow-style:none]
    scrollbar-none
    [&::-webkit-scrollbar]:hidden
    sm:mt-14
    sm:gap-4
    lg:hidden
  "
>
  {images.map((image, index) => (
    <motion.div
      key={`${image.src}-${index}`}
      variants={imageVariants}
      className="
        group
        relative
        h-75
        w-[78vw]
        shrink-0
        snap-center
        overflow-hidden
        rounded-[22px]
        border
        border-[#D4AF37]/30
        bg-[#541215]
        shadow-[0_18px_45px_rgba(43,9,11,0.12)]
        sm:h-95
        sm:w-75
        sm:rounded-[22px]
      "
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={index === 0}
        sizes="(max-width: 640px) 78vw, 300px"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-t
          from-[#2B090B]/45
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-4
          left-4
          rounded-full
          border
          border-[#F1D77A]/30
          bg-[#541215]/80
          px-3
          py-1.5
          backdrop-blur-md
        "
      >
        <span
          className="
            font-[Poppins]
            text-[9px]
            font-semibold
            tracking-[0.12em]
            text-[#F1D77A]
          "
        >
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  ))}
</motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="
            relative
            mx-auto
            mt-14
            hidden
            h-120
            w-full
            max-w-295
            lg:block
            xl:mt-16
            xl:h-130
          "
        >
          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.35, ease },
            }}
            onClick={() => handleImageClick(0)}
            className="
              group
              absolute
              left-0
              top-19.5
              z-10
              h-82.5
              w-52.5
              overflow-hidden
              rounded-[22px]
              border
              border-[#541215]/10
              bg-white
              p-1
              shadow-[0_15px_45px_rgba(43,9,11,0.12)]
              xl:top-21.25
              xl:h-87.5
              xl:w-56.25
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]" >
              <Image
               src={getImage(0).src}
alt={getImage(0).alt}
                fill
                sizes="225px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.35, ease },
            }}
            onClick={() => handleImageClick(2)}
            className="
              group
              absolute
              left-38.75
              top-7.5
              z-20
              h-102.5
              w-55
              overflow-hidden
              rounded-[22px]
              border
              border-[#541215]/10
              bg-white
              p-1
              shadow-[0_18px_50px_rgba(43,9,11,0.14)]
              xl:left-43.75
              xl:top-8.75
              xl:h-107.5
              xl:w-58.75
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src={getImage(1).src}
                alt={getImage(1).alt}
                fill
                sizes="235px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.015,
              transition: { duration: 0.4, ease },
            }}
            onClick={() => handleImageClick(2)}
            className="
              group
              absolute
              left-1/2
              top-0
              z-40
              h-115
              w-115
              -translate-x-1/2
              overflow-hidden
              rounded-[28px]
              border
              border-[#D4AF37]/50
              bg-white
              p-1.5
              shadow-[0_25px_70px_rgba(43,9,11,0.20)]
              xl:h-125
              xl:w-125
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[22px]">
              <Image
                src={getImage(2).src}
                alt={getImage(2).alt}
                fill
                priority
                sizes="500px"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#2B090B]/35
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-[#F1D77A]/35
                  bg-[#541215]/80
                  px-5
                  py-2
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    font-[Poppins]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#F1D77A]
                  "
                >
                  Emperor City
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.35, ease },
            }}
            onClick={() => handleImageClick(3)}
            className="
              group
              absolute
              right-38.75
              top-7.5
              z-20
              h-102.5
              w-55
              overflow-hidden
              rounded-[22px]
              border
              border-[#541215]/10
              bg-white
              p-1
              shadow-[0_18px_50px_rgba(43,9,11,0.14)]
              xl:right-43.75
              xl:top-8.75
              xl:h-107.5
              xl:w-58.75
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src={getImage(3).src}
                alt={getImage(3).alt}
                fill
                sizes="235px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.35, ease },
            }}
            onClick={() => handleImageClick(4)}
            className="
              group
              absolute
              right-0
              top-19.5
              z-10
              h-82.5
              w-52.5
              overflow-hidden
              rounded-[22px]
              border
              border-[#541215]/10
              bg-white
              p-1
              shadow-[0_15px_45px_rgba(43,9,11,0.12)]
              xl:right-0
              xl:top-21.25
              xl:h-87.5
              xl:w-56.25
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src={getImage(4).src}
                alt={getImage(4).alt}
                fill
                sizes="225px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}