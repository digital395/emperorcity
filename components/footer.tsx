import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { socialLinks } from "@/data/social";
import { quickLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#2B090B] font-[Poppins] text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#711717]/25 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-350 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="mb-12 h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

       <div
  className="
    grid grid-cols-1 gap-12
    sm:grid-cols-2
    lg:grid-cols-[1.8fr_1fr_1fr_1.25fr]
    lg:items-start
    lg:gap-12
    xl:grid-cols-[7fr_2fr_2fr_1.25fr]
    xl:gap-16
  "
>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <Link href="/" className="group flex items-center">
                <img
                  src="/images/logos/emperor-city.png"
                  alt="Emperor City"
                  className="
                    h-16.25
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                    sm:h-18.75
                    md:h-21.25
                  "
                />
              </Link>

            </div>

            <p
              className="
                mt-7
                max-w-97.5
                text-[13px]
                leading-7
                text-white/65
                sm:text-[14px]
              "
            >
              Discover a thoughtfully planned community where premium
              residential plots, modern amenities, and a better lifestyle come
              together. Your dream home starts with the right address.
            </p>

            <div className="mt-7">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]/80">
                Follow Us
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={
                        social.href !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      title={social.label}
                      className="
                        group
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/25
                        bg-white/4
                        text-[#F1D77A]
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#D4AF37]
                        hover:bg-[#D4AF37]
                        hover:text-[#2B090B]
                        hover:shadow-[0_8px_25px_rgba(212,175,55,0.2)]
                      "
                    >
                      {Icon ? (
                        <Icon size={16} strokeWidth={1.8} />
                      ) : social.label === "Threads" ? (
                        <span className="text-[14px] font-semibold">@</span>
                      ) : (
                        <span className="text-[14px] font-semibold">𝕏</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-[Marcellus] text-[20px] text-white sm:text-[21px]">
              Quick Links
            </h3>

            <div className="mt-3 h-px w-10 bg-[#D4AF37]" />

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[13px]
                      text-white/60
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[#F1D77A]
                      sm:text-[14px]
                    "
                  >
                    <span className="h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
            <h3 className="font-[Marcellus] text-[20px] text-white sm:text-[21px]">
              Contact Us
            </h3>

            <div className="mt-3 h-px w-10 bg-[#D4AF37]" />

            <div className="mt-6 space-y-5">
              <a
                href="mailto:antony@happyhomes.org.in"
                className="group flex items-start gap-3"
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/10
                    text-[#F1D77A]
                    transition-all
                    duration-300
                    group-hover:border-[#D4AF37]
                    group-hover:bg-[#D4AF37]
                    group-hover:text-[#2B090B]
                  "
                >
                  <Mail size={15} />
                </span>

                <span className="pt-1.5 text-[13px] leading-5 text-white/65 transition-colors group-hover:text-[#F1D77A] sm:text-[14px]">
                  antony@happyhomes.org.in
                </span>
              </a>

              <a
                href="tel:+917823988988"
                className="group flex items-start gap-3"
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/10
                    text-[#F1D77A]
                    transition-all
                    duration-300
                    group-hover:border-[#D4AF37]
                    group-hover:bg-[#D4AF37]
                    group-hover:text-[#2B090B]
                  "
                >
                  <Phone size={15} />
                </span>

                <span className="pt-1.5 text-[13px] text-white/65 transition-colors group-hover:text-[#F1D77A] sm:text-[14px]">
                  +91 78239 88988
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/10
                    text-[#F1D77A]
                  "
                >
                  <MapPin size={15} />
                </span>

                <p className="pt-1.5 max-w-55 text-[13px] leading-6 text-white/65 sm:text-[14px]">
                VM Chatram,  
                  <br />
                  Palayamkottai,
                  <br />
                  Tirunelveli – 627011
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent sm:mt-16" />

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            pt-7
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-[11px] tracking-wide text-white/45 sm:text-[12px]">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-[#D4AF37]">Happy Homes</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-[#D4AF37]/30" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]/50">
              Premium Living
            </span>

            <span className="h-px w-6 bg-[#D4AF37]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}