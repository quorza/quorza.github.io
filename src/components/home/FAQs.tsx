"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import faqsData from "@/data/homeFAQs.json";

type FAQ = {
  question: string;
  answer: string;
};

const faqs = faqsData as FAQ[];

export default function FAQs() {
  // Expand the first FAQ by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden border-y border-[#e5efff] bg-gradient-to-br from-[#f2f7ff] via-[#edf5ff] to-[#f8fbff]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 px-4 py-8 sm:px-6 sm:py-10 md:gap-7 lg:min-h-[340px] lg:grid-cols-[1.4fr_0.9fr] lg:gap-8 lg:px-8 lg:py-8 xl:grid-cols-[1.45fr_0.85fr]">
        {/* FAQ heading and accordion */}
        <div className="relative z-10 w-full min-w-0">
          <div className="mb-4 sm:mb-5">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2870f5] sm:text-xs">
              <span
                aria-hidden="true"
                className="h-[3px] w-5 rounded-full bg-[#2870f5]"
              />
              Frequently Asked Questions
            </p>

            <h2
              id="faq-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-[#102653] sm:text-3xl lg:text-[34px]"
            >
              Got questions? We’ve got answers.
            </h2>

            <p className="mt-2 text-sm leading-5 text-slate-600 sm:text-base">
              Find quick answers to common questions about our courses and
              exams.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <article
                  key={`${faq.question}-${index}`}
                  className={`overflow-hidden rounded-lg border bg-white transition-colors duration-200 ${
                    isOpen
                      ? "border-[#e0ebfb]"
                      : "border-[#e7eef9] hover:border-blue-200"
                  }`}
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex min-h-[44px] w-full items-center justify-between gap-4 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2870f5] sm:px-5"
                    >
                      <span className="text-[13px] font-bold leading-5 text-[#102653] sm:text-sm">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={19}
                        aria-hidden="true"
                        className={`shrink-0 text-[#2870f5] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className="px-4 pb-3 sm:px-5 sm:pb-4"
                    >
                      <p className="whitespace-pre-line text-[13px] leading-[1.65] text-slate-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Right-side FAQ illustration */}
        <div className="relative mx-auto w-full max-w-[440px] lg:h-full lg:min-h-[290px] lg:max-w-none">
          <div className="relative aspect-[5/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
            {/* Soft decorative background */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[8%] h-[72%] w-[78%] rounded-t-full bg-[#dceaff]/60"
            />

            <Image
              src="/img/faq-banner.webp"
              alt="Student preparing for finance exams and growing through learning and practice"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 40vw"
              className="z-[1] object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
