"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 20000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="md :px-14 relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2B090B] px-7 py-10 pt-10 pb-16 sm:px-10 sm:pt-12 sm:pb-18 md:pt-14 md:pb-20">
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A1A15]/25 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",

          repeat: Infinity,
        }}
      />

      <motion.div
        className="pointer-events-none absolute top-10 -right-20 h-70 w-70 rounded-full bg-[#D4AF37]/10 blur-[100px]"
        animate={{
          y: [0, 30, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full max-w-xl translate-y-6 sm:translate-y-8 md:translate-y-10"
      >
        <div className="absolute -inset-px rounded-[30px] bg-linear-to-br from-[#D4AF37]/70 via-[#7A1A15]/30 to-[#D4AF37]/30 opacity-70 blur-[1px]" />

        <div className="relative overflow-hidden rounded-[30px] border border-[#D4AF37]/30 bg-linear-to-b from-[#541215] to-[#3A0C0F] px-7 py-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-12 md:px-14 md:py-14">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 90, opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="absolute top-0 left-1/2 h-0.75 -translate-x-1/2 rounded-b-full bg-linear-to-r from-[#D4AF37] via-[#F1D77A] to-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.7)]"
          />

          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#7A1A15]/20 blur-3xl" />

          <motion.div
            initial={{
              opacity: 0,
              y: -25,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: [0, -8, 0, 6, 0],
              scale: 1,
            }}
            transition={{
              opacity: {
                delay: 0.15,
                duration: 0.5,
              },
              scale: {
                delay: 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 160,
                damping: 14,
              },
              y: {
                delay: 0.8,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative mb-7 flex justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-2xl"
            />

            <Image
              src="/images/logos/emperor-city.png"
              alt="Emperor City"
              width={190}
              height={80}
              priority
              className="relative h-auto w-41.25 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] sm:w-46.25"
            />
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="relative mb-4 font-[Poppins] text-4xl font-extrabold tracking-tight text-[#F1D77A] sm:text-5xl"
          >
            Thank You!
          </motion.h1>

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 70,
              opacity: 1,
            }}
            transition={{
              delay: 0.75,
              duration: 0.5,
            }}
            className="mx-auto mb-7 h-0.5 rounded-full bg-linear-to-r from-[#D4AF37] via-[#F1D77A] to-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.6,
            }}
            className="relative mx-auto max-w-md font-[Poppins] text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
          >
            Thank you for your interest in{" "}
            <span className="font-semibold text-[#F1D77A]">Emperor City</span>.
            Our sales team will get in touch with you shortly to help you take
            the next step toward owning your dream plot.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.6,
            }}
            className="mt-9"
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-linear-to-r from-[#D4AF37] to-[#F1D77A] px-9 py-3.5 font-[Poppins] text-sm font-semibold tracking-wide text-[#4B1012] uppercase shadow-[0_8px_25px_rgba(212,175,55,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(212,175,55,0.35)]"
            >
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 0.5,
            }}
            className="mt-7 font-[Poppins] text-[10px] tracking-[0.12em] text-white/35 uppercase"
          >
            You will be redirected to the home page shortly
          </motion.div>

          <div className="absolute bottom-0 left-1/2 h-0.5 w-32 -translate-x-1/2 rounded-t-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </div>
      </motion.div>
    </main>
  );
}
