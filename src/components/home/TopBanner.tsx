import Image from "next/image";

import {
  ArrowUpRight,
  BarChart3,
  Check,
  Clock3,
  GraduationCap,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import SearchBar from "../common/SearchBar";

export default function TopBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#edf5ff]">
      <div className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[490px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-5 lg:px-8 lg:py-8 xl:px-10">
        {/* LEFT: Headline, search and trust metrics */}
        <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0 lg:py-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-3 py-1.5 text-xs font-semibold text-[#2459b9] shadow-sm">
            <GraduationCap size={15} />
            NISM & NCFM Exam Preparation
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#102653] sm:text-5xl lg:text-[42px] xl:text-[48px]">
            Prepare Today.
            <br />
            Build Your <span className="text-[#2870f5]">Finance Career</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Practice with exam-focused mock tests, expert study resources and
            performance analytics for NISM &amp; NCFM certifications.
          </p>

          <SearchBar />

          {/* Trust metrics */}
          <div className="mt-8 grid max-w-[500px] grid-cols-3 gap-3 sm:gap-5">
            <div className="flex items-center gap-2">
              <UsersRound
                size={29}
                strokeWidth={2.3}
                className="shrink-0 text-[#2870f5]"
              />
              <div>
                <div className="text-lg font-extrabold leading-5 text-[#102653] sm:text-xl">
                  50K+
                </div>
                <div className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Learners
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={29}
                strokeWidth={2.3}
                className="shrink-0 text-[#2870f5]"
              />
              <div>
                <div className="text-lg font-extrabold leading-5 text-[#102653] sm:text-xl">
                  25+
                </div>
                <div className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Certifications
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BarChart3
                size={29}
                strokeWidth={2.5}
                className="shrink-0 text-[#2870f5]"
              />
              <div>
                <div className="text-lg font-extrabold leading-5 text-[#102653] sm:text-xl">
                  4.8/5
                </div>
                <div className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Learner Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Student image and live HTML analytics */}
        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto lg:max-w-none">
          <div className="relative h-[330px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-[440px]">
            {/* Image has no baked-in charts or floating UI */}
            <Image
              src="/img/banner1.webp"
              alt="Student preparing for finance certification mock tests on a laptop"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover object-[72%_center] sm:object-[70%_center]"
            />

            {/* Subtle blend into the hero background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f4f8ff]/65 via-transparent to-transparent lg:from-[#f4f8ff]/25"
            />

            {/* Mock test performance card */}
            <div className="absolute left-2 top-3 w-[174px] rounded-xl border border-white/90 bg-white/95 p-3 shadow-[0_8px_28px_rgba(15,42,87,0.13)] backdrop-blur-md sm:left-3 sm:top-5 sm:w-[205px] sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-bold text-[#102653] sm:text-xs">
                  Mock Test Performance
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div
                  className="relative flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full sm:h-[76px] sm:w-[76px]"
                  style={{
                    background:
                      "conic-gradient(#2870f5 0deg 280.8deg, #dce9ff 280.8deg 360deg)",
                  }}
                  role="img"
                  aria-label="Mock test score: 78 percent"
                >
                  <div className="absolute inset-[6px] flex flex-col items-center justify-center rounded-full bg-white">
                    <span className="text-lg font-extrabold text-[#102653] sm:text-xl">
                      78%
                    </span>
                    <span className="text-[8px] text-slate-500">Score</span>
                  </div>
                </div>

                <div className="flex h-[66px] flex-1 items-end justify-center gap-1 sm:h-[76px] sm:gap-1.5">
                  {[30, 44, 57, 76, 94].map((height, index) => (
                    <div
                      key={height}
                      className="w-2 rounded-t-sm bg-[#2870f5] sm:w-3"
                      style={{
                        height: `${height}%`,
                        opacity: 0.45 + index * 0.13,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="my-3 h-px bg-slate-100" />

              <div className="space-y-2 text-[10px] text-slate-600 sm:text-[11px]">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <Check size={12} className="text-emerald-500" />
                    Total Questions
                  </span>
                  <span className="font-semibold text-[#102653]">100</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <Check size={12} className="text-emerald-500" />
                    Correct
                  </span>
                  <span className="font-semibold text-[#102653]">78</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={12} className="text-emerald-500" />
                    Time Taken
                  </span>
                  <span className="font-semibold text-[#102653]">1h 12m</span>
                </div>
              </div>
            </div>

            {/* Certification card */}
            <div className="absolute right-2 top-3 w-[120px] rounded-xl border border-white/90 bg-white/95 p-1 shadow-[0_8px_28px_rgba(15,42,87,0.13)] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 sm:h-8 sm:w-8">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-xs text-[#102653] text-xs p-0">NISM</p>
                  <p className="text-[10px] font-semibold text-slate-600 text-xs p-0">
                    Certification
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[10px] leading-4 text-slate-600 text-xs">
                Step closer to your career goals
              </p>
            </div>

            {/* Growth indicator */}
            <div className="absolute bottom-4 right-3 flex h-[62px] w-[66px] items-center justify-center rounded-xl border border-white/90 bg-white/95 text-[#2870f5] shadow-[0_8px_28px_rgba(15,42,87,0.13)] backdrop-blur-md sm:bottom-6 sm:right-4 sm:h-[76px] sm:w-[80px]">
              <ArrowUpRight size={39} strokeWidth={1.8} />
            </div>

            {/* Compact score badge on mobile */}
            <div className="absolute bottom-4 left-3 flex items-center gap-2 rounded-lg border border-white/80 bg-white/95 px-3 py-2 shadow-md sm:hidden">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#2870f5]">
                <BarChart3 size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#102653]">
                  Performance
                </p>
                <p className="text-[10px] text-slate-500">
                  Track every attempt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
