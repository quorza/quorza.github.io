"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import CatalogNavigation from "../navbar/CatalogNavigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dce7f6]/80 bg-white/95 shadow-[0_2px_12px_rgba(23,51,111,0.035)] backdrop-blur-xl">
      <div className="container mx-auto px-2 min-[400px]:px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-4 py-2 sm:gap-8">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Quorza home"
            className="flex min-w-0 shrink-0 items-center "
          >
            <Image
              src="/logo.svg"
              alt=""
              width={64}
              height={64}
              priority
              className="h-16 w-16 shrink-0 object-contain"
            />

            {/* Use a span here; reserve h1 for the page heading. */}
            <span className="hidden text-4xl font-extrabold leading-none tracking-[-0.045em] text-[#142957] sm:inline">
              Quorza
            </span>
          </Link>
          {/* Right Action Cluster: Search & Catalogue Utilities */}
          <div className="flex min-w-0 flex-1 items-center justify-end">
            <SearchBar className="w-full max-w-md lg:max-w-xl" />
          </div>
        </div>
      </div>
      <CatalogNavigation />
    </header>
  );
}
