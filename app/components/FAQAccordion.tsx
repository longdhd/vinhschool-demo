"use client";

import { useState } from "react";
import { faqItems } from "../data/faq";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={item.question}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow"
        >
          <button
            className="flex w-full items-center justify-between bg-slate-100 px-6 py-5 text-left transition hover:bg-cyan-50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            type="button"
          >
            <h3 className="flex-1 text-lg font-semibold text-slate-900">
              {item.question}
            </h3>
            <span
              className={`ml-4 text-2xl text-cyan-700 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="border-t border-slate-200 bg-cyan-950 px-6 py-6 text-cyan-100">
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
