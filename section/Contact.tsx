"use client";

import EnquiryForm from "@/components/enquiryform";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
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

  const contactItemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease,
      },
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.25,
        ease,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-162.5 w-full overflow-hidden"
    >

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/images/contact.webp')",
        }}
      />

      <div className="absolute inset-0 bg-[#2B090B]/30" />

      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#2B090B]/75
          via-[#541215]/35
          to-[#2B090B]/20
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-linear-to-t
          from-[#2B090B]/95
          via-[#2B090B]/45
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-30
          top-[15%]
          h-75
          w-75
          rounded-full
          bg-[#D4AF37]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-25
          -bottom-25
          h-87.5
          w-87.5
          rounded-full
          bg-[#D4AF37]/10
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-162.5
          w-full
          max-w-300
          items-center
          px-5
          py-12

          sm:px-8
          md:px-10
          lg:px-12
          xl:px-0
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10

            lg:grid-cols-[1fr_0.95fr]
            lg:gap-14

            xl:grid-cols-[1fr_0.9fr]
            xl:gap-20
          "
        >


<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  className="
    flex
    flex-col
    justify-center
    lg:pr-8
  "
>
            <motion.div
  variants={itemVariants}
  className="mb-5 flex items-center gap-3"
>
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span
                className="
                  font-[Poppins]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#F1D77A]
                "
              >
                Get In Touch
              </span>
            </motion.div>

<motion.h2
  variants={itemVariants}
                className="
                max-w-150
                font-[Marcellus]
                text-[36px]
                font-normal
                leading-[1.12]
                tracking-tight
                text-white

                sm:text-[43px]

                md:text-[48px]

                lg:text-[50px]

                xl:text-[46px]
              "
            >
YOUR FUTURE HOME  
              <br />
              <span className="text-[#F1D77A]">
               STARTS WITH THE RIGHT PLOT.
              </span>
            </motion.h2>

<motion.p
  variants={itemVariants}              className="
                mt-5
                max-w-125
                font-[Poppins]
                text-[13px]
                leading-7
                text-white/75

                sm:text-[14px]
              "
            >
              Looking for the perfect place to build your
              dream home or make a smart property
              investment?
            </motion.p>

            <motion.div
  variants={itemVariants}
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-8
                  w-0.5
                  bg-linear-to-b
                  from-[#F1D77A]
                  to-[#D4AF37]/20
                "
              />

              <p
                className="
                  max-w-117.5
                  font-[Poppins]
                  text-[13px]
                  font-semibold
                  leading-6
                  text-[#F1D77A]

                  sm:text-[14px]
                "
              >
                Take the first step towards owning your
                space at Emperor City.
              </p>
            </motion.div>

<motion.div
  variants={itemVariants}
  className="mt-7"
>
  <motion.h2
    variants={itemVariants}
    whileHover={{
      x: 4,
      transition: {
      duration: 0.3,
      ease,
    },
  }}
  className="
    group
    inline-flex
    items-center
    gap-3
    font-[Marcellus]
    text-2xl
    font-normal
    tracking-wide
    text-white
    transition-all
    duration-300
    sm:text-3xl
  "
>
  <span>
    Book Your{" "}
    <span className="text-[#F1D77A]">
      Site Visit
    </span>
  </span>
</motion.h2>
</motion.div>


     <motion.div
  variants={containerVariants}
  className="
    mt-9
    grid
    grid-cols-1
    gap-5
    sm:grid-cols-2
  "
>
              <motion.a
  variants={contactItemVariants}
  whileHover={{
    y: -3,
    transition: {
      duration: 0.3,
      ease,
    },
  }}
  href="tel:7823988988"
  className="group flex items-center gap-3"
>
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/40
                    bg-[#541215]/75
                    text-[#F1D77A]
                    shadow-[0_5px_20px_rgba(0,0,0,0.2)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-[#D4AF37]
                    group-hover:bg-[#711717]
                  "
                >
                  <Phone size={17} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="
                      font-[Poppins]
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D4AF37]/80
                    "
                  >
                    Call Us
                  </p>

                  <p
                    className="
                      mt-1
                      font-[Poppins]
                      text-[13px]
                      font-medium
                      text-white
                      transition-colors
                      group-hover:text-[#F1D77A]
                    "
                  >
                    78239 88988
                  </p>
                </div>
              </motion.a>

<motion.div
  variants={contactItemVariants}
  whileHover={{
    y: -3,
    transition: {
      duration: 0.3,
      ease,
    },
  }}
  className="group flex items-center gap-3"
>                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/40
                    bg-[#541215]/75
                    text-[#F1D77A]
                    shadow-[0_5px_20px_rgba(0,0,0,0.2)]
                    backdrop-blur-md
                  "
                >
                  <MapPin size={17} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="
                      font-[Poppins]
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D4AF37]/80
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1
                      max-w-62.5
                      font-[Poppins]
                      text-[12px]
                      leading-5
                      text-white
                    "
                  >
                    VM Chatram, Palayamkottai,
                    <br />
                    Tirunelveli – 627011
                  </p>
                </div>
              </motion.div>
            </motion.div>

<motion.p
  variants={itemVariants}              className="
                mt-7
                max-w-117.5
                font-[Poppins]
                text-[9px]
                leading-5
                text-white/40

                sm:text-[10px]
              "
            >
              Terms &amp; conditions apply. Price and
              availability are subject to change.
            </motion.p>
          </motion.div>

          <motion.div
  id="appointment"
  variants={formVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="
    relative
    w-full
    lg:ml-auto
    lg:max-w-117.5
  "
>
            <div
              className="
                absolute
                -inset-2
                rounded-[30px]
                bg-[#D4AF37]/15
                blur-2xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#D4AF37]/40
                bg-white/90
                p-6
                shadow-[0_25px_80px_rgba(43,9,11,0.45)]
                backdrop-blur-xl

                sm:p-7

                lg:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#D4AF37]/15
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#711717]/10
                  blur-3xl
                "
              />

              <div className="relative mb-6 text-center">
                <p
                  className="
                    font-[Poppins]
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#D4AF37]
                  "
                >
                  Emperor City
                </p>

                <h3
                  className="
                    mt-1
                    font-[Marcellus]
                    text-[29px]
                    leading-tight
                    text-[#541215]

                    sm:text-[32px]
                  "
                >
                  Take the First Step
                </h3>

                <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-[#D4AF37]" />

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-85
                    font-[Poppins]
                    text-[11px]
                    leading-5
                    text-[#541215]/65

                    sm:text-[12px]
                  "
                >
                  Share your details and let us help you
                  get closer to owning your dream plot.
                </p>
              </div>

              <div className="relative">
                <EnquiryForm
                  isDownload={false}
                  formtype="Contact Enquiry Form"
                  redirectToThankYou={true}
                />
              </div>

              <div
                className="
                  relative
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  border-t
                  border-[#541215]/10
                  pt-4
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                <span
                  className="
                    font-[Poppins]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#541215]/55
                  "
                >
                  Premium Plots • Trusted Investment
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}