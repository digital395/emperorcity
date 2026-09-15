"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, contactNav } from "@/data/nav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "border-b border-[#D4AF37]/25 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      } `}
    >
      <nav className="mx-auto flex h-18 w-full max-w-350 items-center px-4 sm:h-20.5 sm:px-6 md:h-22.5 md:px-10 lg:h-23.75 lg:px-14">
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-4">
          <Link href="/" onClick={handleNavClick} className="flex items-center">
            <Image
              src="/images/logos/emperor-city.png"
              alt="Emperor City"
              width={160}
              height={120}
              priority
              className="h-15 w-auto object-contain sm:h-18.75 md:h-22.5 lg:h-27.5"
            />
          </Link>

          <div className="h-8 w-px bg-linear-to-b from-transparent via-[#D4AF37]/70 to-transparent sm:h-11" />

          <Link href="/" onClick={handleNavClick} className="flex items-center">
            <Image
              src="/images/logos/happy-homes.png"
              alt="Happy Homes"
              width={100}
              height={80}
              priority
              className="h-9.5 w-auto object-contain sm:h-12.5 md:h-15 lg:h-17.5"
            />
          </Link>
        </div>

        <div className="ml-auto hidden items-center gap-7 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="font-[Poppins] text-[15px] font-semibold tracking-wide whitespace-nowrap text-[#2B090B] transition-all duration-300 hover:text-[#D4AF37]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={contactNav.href}
            onClick={handleNavClick}
            className="relative flex h-10.5 w-31.25 items-center justify-center overflow-hidden rounded-lg border border-[#D4AF37]/60 bg-linear-to-r from-[#4B1012] via-[#711717] to-[#541215] font-[Poppins] text-[12px] font-semibold tracking-wide text-[#F1D77A] uppercase shadow-[0_6px_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F1D77A] hover:text-white hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
          >
            <span className="relative z-10">{contactNav.label}</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/50 bg-[#541215]/90 text-[#F1D77A] shadow-[0_5px_20px_rgba(43,9,11,0.3)] backdrop-blur-md transition-all duration-300 hover:border-[#F1D77A] hover:bg-[#711717] active:scale-95 lg:hidden"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      <div
        onClick={handleNavClick}
        className={`fixed inset-0 z-999 bg-[#1A0506]/60 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } `}
      />

      <aside
        className={`fixed top-0 right-0 z-9999 flex h-dvh w-[88%] max-w-97.5 flex-col overflow-hidden border-l border-[#D4AF37]/25 bg-linear-to-b from-[#541215] via-[#3A0C0F] to-[#250709] shadow-[-20px_0_70px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#711717]/40 blur-[90px]" />

        <div className="relative flex shrink-0 items-center justify-between border-b border-[#D4AF37]/20 px-5 py-5 sm:px-7 sm:py-6">
          <Link href="/" onClick={handleNavClick} className="flex items-center">
            <Image
              src="/images/logos/emperor-city.png"
              alt="Emperor City"
              width={120}
              height={90}
              className="h-13 w-auto object-contain sm:h-15"
            />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={handleNavClick}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/5 text-[#F1D77A] backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:border-[#F1D77A] hover:bg-[#711717]"
          >
            <X size={20} strokeWidth={1.6} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-7 sm:px-7 sm:py-8">
          <div className="mb-7">
            <p className="mb-2 font-[Poppins] text-[9px] font-semibold tracking-[0.3em] text-[#D4AF37]/70 uppercase">
              Explore
            </p>

            <h2 className="font-[Poppins] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Discover Emperor City
            </h2>

            <div className="mt-4 h-px w-16 bg-linear-to-r from-[#D4AF37] to-transparent" />
          </div>

          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="group relative flex min-h-14.5 items-center overflow-hidden rounded-xl border border-transparent px-3 transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-white/6"
              >
                <span className="absolute top-1/2 left-0 h-0 w-0.5 -translate-y-1/2 bg-[#D4AF37] transition-all duration-300 group-hover:h-8" />

                <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#2B090B]/50 font-[Poppins] text-[9px] font-semibold text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#711717]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-[Poppins] text-[15px] font-medium tracking-wide text-white/90 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F1D77A] sm:text-[16px]">
                  {item.label}
                </span>

                <span className="mr-1 ml-auto translate-x-2 text-lg font-light text-[#D4AF37] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <div className="mb-5 h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

            <Link
              href={contactNav.href}
              onClick={handleNavClick}
              className="group relative flex h-13.5 w-full items-center justify-center overflow-hidden rounded-xl border border-[#D4AF37]/60 bg-linear-to-r from-[#4B1012] via-[#711717] to-[#541215] font-[Poppins] text-[12px] font-semibold tracking-[0.16em] text-[#F1D77A] uppercase shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#F1D77A] hover:text-white hover:shadow-[0_12px_40px_rgba(212,175,55,0.18)] active:scale-[0.98]"
            >
              <span className="relative z-10">{contactNav.label}</span>

              <span className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/10 transition-all duration-700 group-hover:left-[120%]" />
            </Link>

            <div className="flex items-center justify-center gap-3 pt-6 pb-2">
              <span className="h-px w-10 bg-[#D4AF37]/20" />

              <span className="font-[Poppins] text-[8px] font-medium tracking-[0.28em] text-[#D4AF37]/50 uppercase">
                Premium Living
              </span>

              <span className="h-px w-10 bg-[#D4AF37]/20" />
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
