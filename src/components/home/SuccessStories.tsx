"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

type Testimonial = {
  date: string;
  name: string;
  shortText: string;
  longText: string;
  stars: number;
  place: string;
  userImageURL: string;
};

const testimonials = testimonialsData as Testimonial[];

function getImageSrc(imageURL: string) {
  if (imageURL.startsWith("/") || imageURL.startsWith("http")) {
    return imageURL;
  }

  return `/images/testimonials/${imageURL}`;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function SuccessStories() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-testimonial-card]",
    );

    const cardWidth = firstCard?.getBoundingClientRect().width ?? 300;
    const styles = window.getComputedStyle(container);
    const gap = Number.parseFloat(styles.columnGap) || 16;

    container.scrollBy({
      left: (cardWidth + gap) * (direction === "next" ? 1 : -1),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="success-stories-heading"
      className="border-t border-[#e7f0ff] bg-gradient-to-b from-white to-[#f9fbff] py-9 sm:py-11 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading and carousel controls */}
        <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
          <div className="min-w-0">
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2870f5] sm:text-xs">
              Success Stories
            </p>

            <h2
              id="success-stories-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-[#102653] sm:text-3xl"
            >
              Real learners. Real results.
            </h2>

            <p className="mt-1 text-sm leading-5 text-slate-600 sm:text-base">
              Hear from professionals who cleared their certifications with
              Quorza.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0eaf9] bg-white text-[#244b91] transition hover:border-blue-300 hover:bg-[#edf4ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2870f5] sm:h-10 sm:w-10"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0eaf9] bg-white text-[#244b91] transition hover:border-blue-300 hover:bg-[#edf4ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2870f5] sm:h-10 sm:w-10"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Horizontal, responsive testimonial carousel */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 sm:gap-4 lg:gap-3"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          aria-label="Learner testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${testimonial.date}-${index}`}
              data-testimonial-card
              className="flex w-[88%] min-w-0 shrink-0 snap-start flex-col rounded-xl border border-[#e4edf9] bg-white p-4 transition-shadow hover:shadow-[0_6px_22px_rgba(37,99,235,0.06)] sm:w-[calc(50%-8px)] sm:p-4 lg:w-[calc(33.333%-8px)] lg:p-4"
            >
              {/* Star rating */}
              <div
                className="mb-2 flex items-center gap-0.5"
                role="img"
                aria-label={`${testimonial.stars} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, starIndex) => {
                  const fillAmount = Math.max(
                    0,
                    Math.min(1, testimonial.stars - starIndex),
                  );

                  return (
                    <Star
                      key={starIndex}
                      size={15}
                      strokeWidth={1.5}
                      className="text-amber-500"
                      fill="currentColor"
                      style={{ opacity: fillAmount > 0 ? 1 : 0.22 }}
                    />
                  );
                })}
              </div>

              {/* Testimonial text */}
              <p className="line-clamp-3 min-h-[60px] text-[13px] leading-[1.55] text-slate-600">
                “{testimonial.longText}”
              </p>

              {/* Learner profile */}
              <div className="mt-3 flex items-center gap-3">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eaf2ff] text-xs font-bold text-[#2459b9]">
                  {testimonial.userImageURL ? (
                    <Image
                      src={`/img/testimonials/users/${testimonial.userImageURL}`}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      sizes="44px"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    getInitials(testimonial.name)
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-xs font-bold text-[#102653] sm:text-[13px]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 truncate text-[11px] text-slate-500">
                    {testimonial.place}
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#2870f5]">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
