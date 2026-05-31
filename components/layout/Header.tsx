"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationItems, personalLinks } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-6 pt-5">
          <div className="cartoon-ink flex min-h-[76px] items-center justify-between rounded-full px-5 py-3">
            <Link href="/" className="relative z-10 flex shrink-0 items-center gap-3">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#080706] bg-[#d8b46a] text-lg font-black text-[#080706] shadow-[4px_4px_0_rgba(8,7,6,0.95)]"
              >
                T
              </motion.div>

              <div className="hidden whitespace-nowrap leading-none sm:block">
                <strong className="cartoon-title block text-xs uppercase tracking-[0.28em] text-[#f4e7c5]">
                  {personalLinks.name}
                </strong>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-[#9f875f]">
                  Universo Digital
                </span>
              </div>
            </Link>

            <nav className="relative z-10 hidden items-center gap-2 lg:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border-2 border-transparent px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#f4e7c5]/70 transition hover:border-[#f4e7c5]/35 hover:bg-[#080706]/50 hover:text-[#d8b46a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cartoon-button relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#080706]/70 text-[#f4e7c5] lg:hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-28 z-40 w-full px-6 lg:hidden"
          >
            <div className="cartoon-ink overflow-hidden rounded-[2rem] p-6">
              <nav className="relative z-10 flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl border-2 border-[#f4e7c5]/20 bg-[#080706]/50 px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f4e7c5]/80 transition hover:border-[#d8b46a]/50 hover:bg-[#d8b46a]/10"
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