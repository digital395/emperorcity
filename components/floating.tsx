"use client";

import { useEffect, useState } from "react";
import Popup from "./popup";
import EnquiryForm from "./enquiryform";

const FloatingEnquiry = () => {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("Enquiry Form");

  useEffect(() => {
    const popupShown = sessionStorage.getItem("happyHomesPopupShown");
    const leadData = localStorage.getItem("happyHomesLead");

    let hasValidLead = false;

    if (leadData) {
      const { timestamp } = JSON.parse(leadData);
      const twentyFourHours = 24 * 60 * 60 * 1000;

      hasValidLead = Date.now() - timestamp < twentyFourHours;

      if (!hasValidLead) {
        localStorage.removeItem("happyHomesLead");
      }
    }

    if (!hasValidLead && !popupShown) {
      setFormType("Popup Form");
      setOpen(true);
      sessionStorage.setItem("happyHomesPopupShown", "true");
    }
  }, []);

  const openEnquiry = () => {
    setFormType("Enquiry Form");
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openEnquiry}
        className="fixed top-1/2 -right-14.5 z-900 flex -translate-y-1/2 -rotate-90 items-center justify-center rounded-t-xl border border-[#D4AF37]/60 bg-linear-to-r from-[#4B1012] via-[#711717] to-[#541215] px-6 py-3 font-[Poppins] text-[11px] font-semibold tracking-[0.12em] text-[#F1D77A] uppercase shadow-[0_8px_30px_rgba(43,9,11,0.35)] transition-all duration-300 ease-in-out hover:-right-9.5 hover:border-[#F1D77A] hover:shadow-[0_10px_35px_rgba(212,175,55,0.3)] md:-right-16.25 md:px-7 md:py-3.5 md:text-xs md:hover:-right-10 lg:hidden"
      >
        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#F1D77A] shadow-[0_0_8px_rgba(241,215,122,0.8)]" />
        Enquire Now
      </button>

      <div className="fixed inset-x-0 bottom-5 z-900 hidden justify-center px-6 lg:flex">
        <div className="w-full max-w-275 rounded-[22px] border border-[#541215]/40 bg-white/95 p-3 shadow-[0_15px_50px_rgba(43,9,11,0.22)] backdrop-blur-xl">
          <EnquiryForm
            isDownload={false}
            formtype="Bottom Enquiry Form"
            variant="bottom"
          />
        </div>
      </div>

      <Popup isOpen={open} onClose={() => setOpen(false)} title="Enquiry Form">
        <EnquiryForm isDownload={false} formtype={formType} />
      </Popup>
    </>
  );
};

export default FloatingEnquiry;
