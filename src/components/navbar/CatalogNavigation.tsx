"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, LogIn, ShoppingCart } from "lucide-react";

import exams from "@/data/exams.json";
import FeatureIcon from "@/components/common/FeatureIcon";
import { Exam } from "@/data/types";

type ExamCategory = keyof typeof exams;

const categories = Object.keys(exams) as ExamCategory[];

function findCategory(category: string) {
  return categories.find((key) => key.toLowerCase() === category.toLowerCase());
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getExamHref(exam: Exam) {
  return `/exams/${slugify(exam.title)}/`;
}

function ExamLink({
  exam,
  onNavigate,
}: {
  exam: Exam;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={getExamHref(exam)}
      onClick={onNavigate}
      className="group flex min-w-0 items-start gap-3 rounded-lg p-3 transition-colors hover:bg-black/[0.04]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#17336f]">
        <FeatureIcon name={exam.icon} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold leading-5 text-gray-900 group-hover:text-[#17336f]">
          {exam.title}
        </span>

        <span className="mt-1 block text-xs leading-5 text-gray-500">
          Starts from ₹{exam.startsFrom}
        </span>
      </span>
    </Link>
  );
}

function NavigationUtilities({ mobile = false }: { mobile?: boolean }) {
  const utilities = [
    {
      label: "Cart",
      href: "/cart/",
      Icon: ShoppingCart,
    },
    {
      label: "Login",
      href: "/login/",
      Icon: LogIn,
    },
  ];

  return (
    <div
      className={
        mobile
          ? "flex shrink-0 items-center gap-1"
          : "ml-auto flex shrink-0 items-center gap-2 border-l border-black/10 pl-4"
      }
    >
      {utilities.map(({ label, href, Icon }) => (
        <Link
          key={href}
          href={href}
          aria-label={label}
          title={label}
          className={
            mobile
              ? "flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-[#17336f]"
              : "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-[#17336f]"
          }
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className={mobile ? "sr-only" : "hidden xl:inline"}>
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function CatalogNavigation() {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] ?? "",
  );

  const [mobileExpanded, setMobileExpanded] = useState<string | null>(
    categories[0] ?? null,
  );

  const activeCategoryKey = findCategory(activeCategory) ?? categories[0];

  const activeExams = activeCategoryKey ? (exams[activeCategoryKey] ?? []) : [];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Exam catalog navigation"
      className="relative z-50 w-full border-y border-gray-100 bg-white"
    >
      <div className="mx-auto flex min-h-12 max-w-screen-xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* LEFT: Exam navigation */}
        <div className="min-w-0 flex-1">
          {/* Desktop mega menu */}
          <div className="hidden lg:block">
            <div className="group relative inline-flex">
              <button
                type="button"
                aria-haspopup="true"
                className="flex min-h-12 items-center gap-2 py-3 pr-4 text-sm font-semibold text-gray-800 transition hover:text-[#17336f]"
              >
                Explore Exams
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                />
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-[min(850px,calc(100vw-3rem))] translate-y-2 rounded-xl border border-gray-200 bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="grid grid-cols-[220px_minmax(0,1fr)]">
                  {/* Level 1: Categories */}
                  <div className="border-r border-gray-100 bg-gray-50/70 p-3">
                    <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Exam categories
                    </p>

                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onMouseEnter={() => setActiveCategory(category)}
                        onFocus={() => setActiveCategory(category)}
                        onClick={() => setActiveCategory(category)}
                        aria-current={
                          activeCategory === category ? "true" : undefined
                        }
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
                          activeCategory === category
                            ? "bg-white text-[#17336f] shadow-sm"
                            : "text-gray-600 hover:bg-white hover:text-[#17336f]"
                        }`}
                      >
                        {category}
                        <ChevronRight size={16} aria-hidden="true" />
                      </button>
                    ))}
                  </div>

                  {/* Level 2: Exams */}
                  <div className="min-w-0 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-gray-900">
                        {activeCategory} Exams
                      </h3>

                      <span className="text-xs text-gray-500">
                        {activeExams.length} exams
                      </span>
                    </div>

                    <div className="grid max-h-[65vh] grid-cols-2 gap-1 overflow-y-auto">
                      {activeExams.map((exam) => (
                        <ExamLink key={exam.title} exam={exam} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / tablet scrollable tree */}
          <div className="lg:hidden">
            <div className="flex min-h-12 items-center gap-2">
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
              >
                Explore Exams
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileMenuOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white shadow-xl">
                <div className="max-h-[min(70dvh,600px)] overflow-y-auto overscroll-contain p-3">
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Exam categories
                  </p>

                  <div className="space-y-1">
                    {categories.map((category) => {
                      const categoryExams = exams[category] as Exam[];
                      const expanded = mobileExpanded === category;

                      return (
                        <div
                          key={category}
                          className="overflow-hidden rounded-lg border border-gray-100"
                        >
                          {/* Level 1 */}
                          <button
                            type="button"
                            aria-expanded={expanded}
                            onClick={() =>
                              setMobileExpanded(expanded ? null : category)
                            }
                            className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold ${
                              expanded
                                ? "bg-blue-50 text-[#17336f]"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span>{category}</span>
                            <ChevronDown
                              size={16}
                              className={`shrink-0 transition-transform ${
                                expanded ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          {/* Level 2 */}
                          {expanded && (
                            <div className="border-t border-gray-100 p-2">
                              <div className="space-y-1">
                                {categoryExams.map((exam) => (
                                  <ExamLink
                                    key={exam.title}
                                    exam={exam}
                                    onNavigate={() => setMobileMenuOpen(false)}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Login and Cart */}
        <NavigationUtilities mobile={false} />
      </div>
    </nav>
  );
}
