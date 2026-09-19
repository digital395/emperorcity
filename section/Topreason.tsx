"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { highlights } from "@/data/project";

const easeInOut = [0.42, 0, 0.58, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

export default function TopReason() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCards = isMobile ? 1 : 3;

  const maxIndex = Math.max(highlights.length - visibleCards, 0);

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const previous = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    setCurrent(0);
  }, [visibleCards]);

  useEffect(() => {
    if (maxIndex === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => {
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  if (!highlights.length) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute top-20 -left-40 h-100 w-100 rounded-full bg-[#D4AF37]/5 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-[#541215]/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-360 px-4 py-16 md:px-10 md:pt-5 md:pb-0">
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-5 flex items-center justify-center gap-5"
          >
            <span className="h-px w-14 bg-[#B99750]" />

            <span className="font-[Poppins] text-[10px] font-medium tracking-[0.35em] text-[#333] sm:text-[11px]">
              KEY HIGHLIGHTS
            </span>

            <span className="h-px w-14 bg-[#B99750]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[Marcellus] text-[38px] leading-[1.08] tracking-[-0.02em] text-[#2B2B2B] sm:text-[48px] lg:text-[58px]"
          >
            WHAT MAKES{" "}
            <span className="text-[#711717]">EMPEROR CITY SPECIAL</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-190 font-[Poppins] text-[13px] leading-[1.7] text-[#444] sm:text-[15px]"
          >
            More than a plotted development — a thoughtfully planned township
            designed for living, investing and growing.
          </motion.p>
        </div>

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous highlights"
            className="absolute top-1/2 left-0 z-30 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#B99750]/40 bg-white text-[#541215] shadow-[0_8px_25px_rgba(43,9,11,0.10)] transition-all duration-300 hover:bg-[#541215] hover:text-white lg:flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next highlights"
            className="absolute top-1/2 right-0 z-30 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#B99750]/40 bg-white text-[#541215] shadow-[0_8px_25px_rgba(43,9,11,0.10)] transition-all duration-300 hover:bg-[#541215] hover:text-white lg:flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>

          <div className="overflow-hidden px-1 py-3">
            <motion.div
              className="flex"
              animate={{
                x: `-${current * (100 / visibleCards)}%`,
              }}
              transition={{
                duration: 0.65,
                ease: easeInOut,
              }}
            >
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.number}
                  className="w-full shrink-0 px-2 md:w-1/3 md:px-3"
                >
                  <motion.article
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
                      duration: 0.6,
                      delay: (index % 3) * 0.08,
                    }}
                    className="group relative flex min-h-140 flex-col overflow-hidden rounded-[18px] border border-[#541215]/[0.07] bg-white shadow-[0_12px_40px_rgba(43,9,11,0.06)]"
                  >
                    <div className="relative px-6 pt-7 sm:px-7 lg:px-9 lg:pt-8">
                      <div className="font-[Marcellus] text-[64px] leading-none text-[#C7A35D] sm:text-[70px]">
                        {highlight.number}
                      </div>

                      <div className="absolute top-6 right-6 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-[#FBF7ED] sm:top-7 sm:right-7 lg:top-8 lg:right-9">
                        <Image
                          src={highlight.icon}
                          alt=""
                          width={38}
                          height={38}
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <div className="mt-5">
                        <h3 className="max-w-[320px] font-[Marcellus] text-[24px] leading-[1.15] text-[#541215] sm:text-[26px] lg:text-[28px]">
                          {highlight.title}
                        </h3>

                        <span className="mt-5 block h-0.5 w-12 bg-[#B99750]" />
                      </div>

                      <p className="mt-5 max-w-97.5 font-[Poppins] text-[13px] leading-[1.7] text-[#555] sm:text-[14px]">
                        {highlight.description}
                      </p>
                    </div>

                    <div className="mt-auto px-5 pt-2 pb-5 sm:px-6 sm:pb-6">
                      <div className="relative h-47.5 overflow-hidden rounded-xl sm:h-51.25 lg:h-55">
                        <Image
                          src={highlight.image}
                          alt={highlight.title}
                          fill
                          sizes="
                            (max-width: 767px) 90vw,
                            (max-width: 1279px) 30vw,
                            420px
                          "
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#2B090B]/25 to-transparent" />
                      </div>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B99750]/40 bg-white text-[#541215]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({
                length: maxIndex + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-7 bg-[#541215]"
                      : "w-1.5 bg-[#B99750]/50"
                  } `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B99750]/40 bg-white text-[#541215]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M9 18L15 12L9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
