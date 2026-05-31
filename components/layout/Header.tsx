"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  navigationItems,
  personalLinks,
} from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-full border border-[#f4e7c5]/10 bg-[#080706]/70 px-6 py-4 backdrop-blur-xl">
            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.05,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4e7c5] bg-[#d8b46a] text-xl font-black text-[#080706] shadow-[4px_4px_0_rgba(244,231,197,0.2)]"
              >
                T
              </motion.div>

              <div className="hidden leading-none sm:block">
  <strong className="block text-sm uppercase tracking-[0.3em] text-[#f4e7c5]">
    {personalLinks.name}
  </strong>

  <span className="text-xs uppercase tracking-[0.22em] text-[#9f875f]">
    Universo Digital
  </span>
</div>
            </Link>

            {/* DESKTOP */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-xs font-black uppercase tracking-[0.25em] text-[#f4e7c5]/70 transition"
                >
                  <span className="transition duration-300 group-hover:text-[#d8b46a]">
                    {item.label}
                  </span>

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d8b46a] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f4e7c5]/15 bg-[#f4e7c5]/5 text-[#f4e7c5] lg:hidden"
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-0 top-28 z-40 w-full px-6 lg:hidden"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#f4e7c5]/10 bg-[#080706]/95 p-6 backdrop-blur-2xl">
              <nav className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="rounded-2xl border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f4e7c5]/80 transition hover:border-[#d8b46a]/40 hover:bg-[#d8b46a]/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}