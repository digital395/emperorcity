"use client";

import React from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactElement;
}

const Popup: React.FC<CommonModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed
            inset-0
            z-9999
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-[#2B090B]/75
            px-4
            py-6
            backdrop-blur-md
            sm:px-6
          "
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-lg
              overflow-hidden
              rounded-[28px]
              border
              border-[#D4AF37]/40
              bg-white
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            "
          >

            <div
              className="
                relative
                overflow-hidden
                bg-linear-to-br
                from-[#4B1012]
                via-[#711717]
                to-[#541215]
                px-6
                pb-6
                pt-7
                text-center
                sm:px-8
                sm:pt-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-40
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#D4AF37]/15
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#D4AF37]/20
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#D4AF37]/10
                  blur-2xl
                "
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/10
                  text-white/80
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:border-[#D4AF37]/70
                  hover:bg-[#D4AF37]
                  hover:text-[#4B1012]
                  sm:right-5
                  sm:top-5
                "
              >
                <FiX size={19} />
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="relative flex justify-center"
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-20
                    w-44
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#D4AF37]/10
                    blur-2xl
                  "
                />

                <Image
                  src="/images/logos/emperor-city.png"
                  alt="Emperor City"
                  width={180}
                  height={70}
                  priority
                  className="
                    relative
                    h-auto
                    w-32
                    object-contain
                    drop-shadow-[0_6px_15px_rgba(0,0,0,0.3)]
                    sm:w-36
                  "
                />
              </motion.div>

              <div
                className="
                  mx-auto
                  mt-4
                  h-0.5
                  w-16
                  rounded-full
                  bg-linear-to-r
                  from-transparent
                  via-[#F1D77A]
                  to-transparent
                  shadow-[0_0_10px_rgba(212,175,55,0.5)]
                "
              />

              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="
                    relative
                    mt-4
                    font-[Poppins]
                    text-base
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#F1D77A]
                    sm:text-lg
                  "
                >
                  {title}
                </motion.h2>
              )}
            </div>

            <div
              className="
                relative
                bg-linear-to-b
                from-white
                to-[#fffdf8]
                px-5
                py-6
                sm:px-8
                sm:py-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-0.5
                  w-24
                  -translate-x-1/2
                  bg-linear-to-r
                  from-transparent
                  via-[#D4AF37]/50
                  to-transparent
                "
              />

              {children}
            </div>

            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-0.75
                w-32
                -translate-x-1/2
                rounded-t-full
                bg-linear-to-r
                from-transparent
                via-[#D4AF37]
                to-transparent
                shadow-[0_0_12px_rgba(212,175,55,0.5)]
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;