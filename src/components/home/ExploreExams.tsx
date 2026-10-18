"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FeatureIcon from "@/components/common/FeatureIcon";
import examsData from "@/data/exams.json";

type Exam = {
  title: string;
  description: string;
  icon: string;
  startsFrom: number;
};

type ExamCategory = "NISM Exams" | "NCFM Exams";

const categories: ExamCategory[] = ["NISM Exams", "NCFM Exams"];

const examGroups = examsData as Record<string, Exam[]>;

function getExamSubtitle(exam: Exam, category: ExamCategory) {
  const title = exam.title;

  if (title.includes("Mutual Fund")) {
    return title.includes("Foundation")
      ? "Mutual Fund Foundation Certification"
      : "Mutual Fund Distributors Certification";
  }

  if (title.includes("Equity Derivatives")) {
    return "Equity Derivatives Certification";
  }

  if (title.includes("Research Analyst")) {
    return "Research Analyst Certification";
  }

  if (title.includes("Investment Adviser")) {
    return title.includes("II")
      ? "Investment Adviser (Level 2)"
      : "Investment Adviser (Level 1)";
  }

  if (title.includes("Depository Operations")) {
    return "Depository Operations Certification";
  }

  if (title.includes("Currency Derivatives")) {
    return "Currency Derivatives Certification";
  }

  if (title.includes("Securities Market Foundation")) {
    return "Securities Markets Foundation";
  }

  if (title.includes("Compliance")) {
    return "Compliance Officers Certification";
  }

  if (title.includes("Capital Market")) {
    return "Capital Market Module";
  }

  if (title.includes("Technical Analysis")) {
    return "Technical Analysis Module";
  }

  if (title.includes("Interest Rate Derivatives")) {
    return "Interest Rate Derivatives Certification";
  }

  if (title.includes("Merchant Banking")) {
    return "Merchant Banking Certification";
  }

  if (title.includes("Commodity Derivatives")) {
    return "Commodity Derivatives Certification";
  }

  if (title.includes("SORM")) {
    return "Securities Operations and Risk Management";
  }

  if (title.includes("Registrars to an Issue")) {
    return "Registrars to an Issue & Share Transfer Agents";
  }

  if (title.includes("Registrar and Transfer Agent")) {
    return "Registrar and Transfer Agents (MF)";
  }

  if (title.includes("Securities Intermediaries Compliance")) {
    return "Securities Intermediaries Compliance";
  }

  if (title.includes("Retirement Adviser")) {
    return "Retirement Adviser Certification";
  }

  if (title.includes("Portfolio Management")) {
    return "Portfolio Management Services";
  }

  if (title.includes("Portfolio Managers")) {
    return "Portfolio Managers Certification";
  }

  if (title.includes("Fixed Income Securities")) {
    return "Fixed Income Securities Certification";
  }

  if (title.includes("Alternative Investments")) {
    return "Alternative Investment Funds Certification";
  }

  if (title.includes("Beginners Module")) {
    return "Financial Markets — Beginner's Module";
  }

  if (title.includes("Derivatives Market")) {
    return "Derivatives Market Module";
  }

  if (title.includes("Common Derivatives")) {
    return "Common Derivatives Certification";
  }

  if (title.includes("Securities Markets Basics")) {
    return "Securities Markets Basics";
  }

  return category === "NISM Exams"
    ? "NISM Certification Exam"
    : "Certification Exam";
}

function getExamSeries(title: string, category: ExamCategory) {
  if (category === "NCFM Exams") {
    return "NCFM Module";
  }

  const match = title.match(
    /NISM\s+((?:Series\s+)?[IVX]+(?:\s*[-]?\s*[A-Z])?)/i,
  );

  if (match) {
    return `NISM Series ${match[1].replace(/^Series\s+/i, "")}`;
  }

  if (/NISM\s+V[A-D]/i.test(title)) {
    return `NISM Series ${title.match(/NISM\s+(V[A-D])/i)?.[1] ?? "V"}`;
  }

  return "NISM Certification";
}

function getExamHref(exam: Exam) {
  return `/exams?search=${encodeURIComponent(exam.title)}`;
}

export default function ExploreExams() {
  const [activeCategory, setActiveCategory] =
    useState<ExamCategory>("NISM Exams");

  const [showAll, setShowAll] = useState(false);

  const availableExams = useMemo(() => {
    const exams = examGroups[activeCategory];

    if (!Array.isArray(exams)) return [];

    return exams.filter(
      (exam) =>
        exam &&
        typeof exam.title === "string" &&
        typeof exam.startsFrom === "number",
    );
  }, [activeCategory]);

  const visibleExams = showAll ? availableExams : availableExams.slice(0, 8);

  return (
    <section
      id="explore-exams"
      aria-labelledby="explore-exams-heading"
      className="bg-gradient-to-b from-white to-[#f8fbff] py-9 sm:py-11 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading and category tabs */}
        <div className="mb-5 flex flex-col gap-4 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2870f5] sm:text-xs">
              Explore Exams
            </p>

            <h2
              id="explore-exams-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-[#102653] sm:text-3xl"
            >
              Find the right certification for you
            </h2>

            <p className="mt-1 text-sm leading-5 text-slate-600 sm:text-base">
              Choose from NISM and NCFM exams and take the next step in your
              finance career.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              className="flex flex-1 gap-1 rounded-lg bg-[#f0f5fd] p-1 sm:flex-none"
              role="tablist"
              aria-label="Exam categories"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    id={`tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="exam-card-list"
                    onClick={() => {
                      setActiveCategory(category);
                      setShowAll(false);
                    }}
                    className={`flex-1 whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold transition-colors sm:min-w-[100px] ${
                      isActive
                        ? "bg-[#102653] text-white shadow-md"
                        : "text-[#102653] hover:bg-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <Link
              href="/exams"
              className="inline-flex items-center gap-1 whitespace-nowrap px-1 py-2 text-xs font-semibold text-[#2870f5] transition-colors hover:text-[#174db4] sm:px-2"
            >
              View All Exams
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Exam cards */}
        <div
          id="exam-card-list"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3"
        >
          {visibleExams.map((exam, index) => {
            const series = getExamSeries(exam.title, activeCategory);
            const subtitle = getExamSubtitle(exam, activeCategory);

            return (
              <Link
                key={`${activeCategory}-${exam.title}`}
                href={getExamHref(exam)}
                className="group flex min-h-[128px] flex-col justify-between rounded-xl border border-[#e4edf9] bg-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(37,99,235,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2870f5] focus-visible:ring-offset-2 sm:min-h-[130px] sm:p-3.5"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#2870f5] transition-colors group-hover:bg-[#dceaff] sm:h-12 sm:w-12">
                    <FeatureIcon name={exam.icon} className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="line-clamp-2 text-xs font-bold leading-[1.4] text-[#102653] sm:text-[13px]">
                      {exam.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[11px] leading-[1.4] text-slate-500 sm:text-xs">
                      {series}
                    </p>

                    <p className="line-clamp-2 text-[11px] leading-[1.4] text-slate-500 sm:text-xs">
                      {subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-[#102653] sm:text-[13px]">
                    From{" "}
                    <span className="font-extrabold">
                      ₹{exam.startsFrom.toLocaleString("en-IN")}
                    </span>
                  </p>

                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#2459b9] transition-colors group-hover:bg-[#2870f5] group-hover:text-white"
                  >
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Show more / less */}
        {availableExams.length > 8 && (
          <div className="mt-5 flex justify-center lg:hidden">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#dce8fa] bg-white px-4 py-2.5 text-sm font-semibold text-[#2459b9] transition-colors hover:bg-[#f2f7ff]"
            >
              {showAll ? "Show Less" : "Explore More Exams"}
              <ArrowUpRight size={16} className={showAll ? "rotate-180" : ""} />
            </button>
          </div>
        )}

        {/* Desktop: show more */}
        {availableExams.length > 8 && (
          <div className="mt-5 hidden justify-center lg:flex">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#dce8fa] bg-white px-4 py-2 text-sm font-semibold text-[#2459b9] transition-colors hover:bg-[#f2f7ff]"
            >
              {showAll ? "Show Less" : "Explore More Exams"}
              <ArrowRight size={15} className={showAll ? "-rotate-90" : ""} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
