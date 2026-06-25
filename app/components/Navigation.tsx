"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navGroups = [
  {
    label: "Học",
    links: [
      { href: "/classes", label: "Lớp Học" },
      { href: "/pricing", label: "Học Phí" },
    ],
  },
  {
    label: "Cẩm Nang",
    links: [
      { href: "/resource", label: "Cẩm Nang" },
      { href: "/faq", label: "Câu Hỏi" },
      { href: "/news", label: "Tin Tức" },
    ],
  },
  {
    label: "VinhSchool",
    links: [
      { href: "/about", label: "Về Thầy Vinh" },
      { href: "/contact", label: "Liên Hệ" },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return <NavigationContent key={pathname} />;
}

function NavigationContent() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-stone-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold">
          VinhSchool
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span>{open ? "Đóng" : "Menu"}</span>
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>

        <nav className="hidden items-center gap-2 text-lg font-medium text-zinc-700 md:flex">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-white hover:text-[#0f766e]"
              >
                <span>{group.label}</span>
                <span className="text-sm">⌄</span>
              </button>
              <div className="invisible absolute right-0 top-full w-56 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-stone-200 bg-white p-2 shadow-xl">
                  {group.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-zinc-800 transition hover:bg-stone-100 hover:text-[#0f766e]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-stone-100 px-4 py-4 md:hidden">
          <div className="space-y-3">
            {navGroups.map((group) => {
              const expanded = activeGroup === group.label;

              return (
                <div key={group.label} className="rounded-2xl bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-zinc-900"
                    onClick={() =>
                      setActiveGroup(expanded ? null : group.label)
                    }
                    aria-expanded={expanded}
                  >
                    <span>{group.label}</span>
                    <span>{expanded ? "−" : "+"}</span>
                  </button>
                  {expanded && (
                    <div className="border-t border-stone-100 px-2 py-2">
                      {group.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-stone-100"
                          onClick={() => {
                            setOpen(false);
                            setActiveGroup(null);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
