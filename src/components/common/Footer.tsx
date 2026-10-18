import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Linkedin, Youtube, Instagram } from "@/components/common/BrandIcons";

const quickLinks = [
  { label: "NISM Exams", href: "/nism" },
  { label: "NCFM Exams", href: "/ncfm" },
  { label: "Mock Tests", href: "/mock-tests" },
  { label: "Study Resources", href: "/study-resources" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
];

const supportLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    Icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      {/* Main footer */}
      <div className="footer-main">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-10 md:grid-cols-4 md:gap-x-8 lg:gap-x-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                aria-label="Quorza home"
                className="mb-3 inline-flex items-center gap-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
                  <Image
                    src="/logo.svg"
                    alt=""
                    width={42}
                    height={42}
                    className="h-full w-full object-contain"
                  />
                </span>

                <span className="footer-brand !mb-0 !text-4xl">Quorza</span>
              </Link>

              <p className="footer-text max-w-[260px]">
                Your partner in finance certifications, mock tests and study
                resources. Learn today. Grow tomorrow.
              </p>

              {/* Social links: replace with your official profile URLs */}
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#c1cce1] transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <Icon
                      aria-hidden="true"
                      width={17}
                      height={17}
                      className="shrink-0"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <nav aria-label="Quick links">
              <h2 className="footer-heading">Quick Links</h2>

              <ul className="footer-links list-none p-0">
                {quickLinks.map((item) => (
                  <li key={item.href} className="leading-none">
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Support */}
            <nav aria-label="Support links">
              <h2 className="footer-heading">Support</h2>

              <ul className="footer-links list-none p-0">
                {supportLinks.map((item) => (
                  <li key={item.href} className="leading-none">
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="footer-heading">Subscribe</h2>

              <p className="footer-text max-w-xs">
                Get the latest updates, exam tips and new resources.
              </p>

              <form
                action="/api/newsletter"
                method="POST"
                className="mt-4 flex w-full max-w-md items-stretch overflow-hidden rounded-lg border border-white/15 bg-white shadow-sm"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Your email address
                </label>

                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Your email address"
                  className="!mb-0 !min-w-0 !flex-1 !rounded-none !border-0 !bg-white !px-3 !py-2.5 !text-sm !text-[#243654] !shadow-none !outline-none placeholder:!text-[#8290a8] focus:!border-0 focus:!ring-0"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex min-h-10 w-11 shrink-0 items-center justify-center bg-[#2878f5] text-white transition-colors hover:bg-[#155bd1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                >
                  <ArrowRight aria-hidden="true" size={19} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="footer-bottom">
        <div className="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>© 2026 Quorza. All rights reserved.</p>

          <p className="sm:text-right">Learn Today. Grow Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
