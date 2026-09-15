"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getLeadSource } from "@/lib/getleadsource";

interface EnquiryFormProps {
  isDownload?: boolean;
  formtype?: string;
  onSuccess?: () => void;
  redirectToThankYou?: boolean;
  variant?: "default" | "bottom";
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  isDownload = false,
  formtype = "Enquiry Form",
  onSuccess,
  redirectToThankYou = true,
  variant = "default",
}) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agree: false,
    formtype,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitted(true);
    if (!isFormValid) {
      return;
    }

    setLoading(true);
    const leadSource = getLeadSource();
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          leadSource,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      if (isDownload) {
        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.download = "Happy-Homes-Brochure.pdf";
        link.click();
      }
      localStorage.setItem(
        "happyHomesLead",
        JSON.stringify({
          submitted: true,
          timestamp: Date.now(),
        }),
      );

      onSuccess?.();

      if (redirectToThankYou) {
        router.push("/thank-you");
      }
      setSubmitted(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        agree: false,
        formtype,
      });
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };
  const isPhoneValid = /^\d{10}$/.test(formData.phone);

  const isEmailValid =
    formData.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const isFormValid =
    formData.name.trim() !== "" &&
    isPhoneValid &&
    isEmailValid &&
    formData.agree;

  if (variant === "bottom") {
    return (
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-350 items-center gap-3 px-6 py-3"
        >
          <div className="flex-1">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                setFormData({ ...formData, name: value });
              }}
              className="h-11 w-full rounded-lg border border-[#541215]/15 bg-white/80 px-4 font-[Poppins] text-sm text-[#541215] shadow-sm transition-all duration-200 outline-none placeholder:text-[#541215]/45 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          <div className="flex-1">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              maxLength={10}
              pattern="[0-9]{10}"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData({ ...formData, phone: value });
              }}
              className="h-11 w-full rounded-lg border border-[#541215]/15 bg-white/80 px-4 font-[Poppins] text-sm text-[#541215] shadow-sm transition-all duration-200 outline-none placeholder:text-[#541215]/45 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border border-[#541215]/15 bg-white/80 px-4 font-[Poppins] text-sm text-[#541215] shadow-sm transition-all duration-200 outline-none placeholder:text-[#541215]/45 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`h-11 shrink-0 rounded-lg px-8 font-[Poppins] text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
              loading || !isFormValid
                ? "cursor-not-allowed bg-[#7A1A15]/40 text-white/70"
                : "bg-linear-to-r from-[#4B1012] via-[#711717] to-[#541215] text-[#F1D77A] shadow-[0_6px_20px_rgba(84,18,21,0.22)] hover:-translate-y-0.5 hover:border-[#F1D77A] hover:text-white hover:shadow-[0_10px_28px_rgba(212,175,55,0.2)]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          required
          value={formData.name}
          onChange={(e) => {
            const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
            setFormData({ ...formData, name: value });
          }}
          className="w-full rounded-xl border border-[#541215]/20 bg-white/70 px-4 py-3.5 font-[Poppins] text-sm text-[#541215] shadow-sm transition-all duration-200 outline-none placeholder:text-[#541215]/50 focus:border-[#D4AF37] focus:bg-white/90 focus:ring-2 focus:ring-[#D4AF37]/20"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          required
          value={formData.phone}
          maxLength={10}
          pattern="[0-9]{10}"
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 10);
            setFormData({ ...formData, phone: value });
          }}
          className="w-full rounded-xl border border-[#541215]/20 bg-white/70 px-4 py-3.5 font-[Poppins] text-sm text-[#541215] shadow-sm transition-all duration-200 outline-none placeholder:text-[#541215]/50 focus:border-[#D4AF37] focus:bg-white/90 focus:ring-2 focus:ring-[#D4AF37]/20"
        />

        {formData.phone.length > 0 && !isPhoneValid && (
          <p className="mt-1 font-[Poppins] text-xs text-[#8A211A]">
            Please enter a valid 10-digit mobile number.
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#541215]/20 bg-white/70 px-4 py-3.5 font-[Poppins] text-sm text-[#541215] shadow-sm transition-all duration-200 outline-none placeholder:text-[#541215]/50 focus:border-[#D4AF37] focus:bg-white/90 focus:ring-2 focus:ring-[#D4AF37]/20"
        />

        {formData.email !== "" && !isEmailValid && (
          <p className="mt-1 font-[Poppins] text-xs text-[#8A211A]">
            Please enter a valid email address.
          </p>
        )}

        <label className="flex items-start gap-2.5 rounded-lg border border-[#541215]/10 bg-white/30 p-3 font-[Poppins] text-[11px] leading-relaxed text-[#541215]/75">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#711717]"
          />

          <span>
            I authorize Emperor City to contact me via Email / SMS / WhatsApp /
            Call. This will override DND / NDNC.
          </span>
        </label>

        {submitted && !formData.agree && (
          <p className="mt-1 font-[Poppins] text-xs text-[#8A211A]">
            Please accept the authorization to continue.
          </p>
        )}

        <div className="pt-1">
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full rounded-xl py-3.5 font-[Poppins] text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 ${
              loading || !isFormValid
                ? `cursor-not-allowed bg-[#7A1A15]/40 text-white/70`
                : `bg-linear-to-r from-[#4B1012] via-[#711717] to-[#541215] text-[#F1D77A] shadow-[0_8px_25px_rgba(84,18,21,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(84,18,21,0.35)]`
            } `}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
