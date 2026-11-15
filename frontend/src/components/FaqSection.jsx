import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  // Store open state for each FAQ card index
  const [openIndex, setOpenIndex] = useState([0, 1]); // Default first two open like in the design image

  const toggleFaq = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I buy items on MujShoppers?",
      answer:
        "Browse the listings from the marketplace (you can access the marketplace by clicking on Shop or Start Exploring), select a product you like or need, and click to chat directly with the verified student seller on WhatsApp to arrange a convenient campus pickup and payment method.",
    },
    {
      question: "How do payments & handovers work?",
      answer:
        "Buyers and sellers get connected directly on Whatsapp, from which they can arrange a meet on the campus to inspect items in person and complete payment via UPI, cash, or any preferred payment method.",
    },
    {
      question: "Is it free to list and sell items?",
      answer:
        "Yes, listing products on CampusKart is 100% free for all students. There are zero commission fees or hidden charges. Everything from creating an account or purchasing a product to listing an unused item in your possession is free, we don't take any platform charges.",
    },
    {
      question: "What items can I sell on the platform?",
      answer:
        "You can sell anything that's lying around your room and is relevant to a college student. Whether it be textbooks, calculators, electronics, study chairs, cycles, hostel essentials, clothing, sports gear, or any unused item.",
    },
    {
      question: "How do I verify my student profile?",
      answer:
        "Sign up using your official outlook college email address for otp verification.",
    },
    {
      question: "Is my personal contact information safe?",
      answer:
        "Yes! Your personal details are strictly protected and only shared with verified students when initiating a purchase or sale.",
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF8F3] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-[#BDD3A7]/40">
      <div className="mx-auto max-w-6xl">

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently asked questions
            {/* Brush stroke / Underline embellishment */}
            <svg
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-3 text-[#90AD2E]/80 pointer-events-none"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8C50 3 150 2 197 9"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </h2>

          <p className="mt-5 text-xs sm:text-sm md:text-base font-medium text-slate-500 max-w-lg mx-auto leading-relaxed">
            Here are some common questions we recieve about our platform.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex.includes(index);

            return (
              <div
                key={index}
                className={`group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md ${
                  isOpen ? "border-[#90AD2E]/60 ring-2 ring-[#90AD2E]/10" : ""
                }`}
              >
                {/* Question & Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#123F1B] text-white rotate-180"
                        : "bg-slate-950 text-white group-hover:bg-[#123F1B]"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* Answer Dropdown */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
