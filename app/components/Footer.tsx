import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 text-zinc-700">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600/80">VinhSchool</p>
            <p className="mt-3 text-zinc-600">9042 Garden Grove Blvd #230, Garden Grove, CA</p>
            <p className="mt-1 text-sm text-zinc-600">Zoom ID: <span className="font-semibold text-zinc-900">350 311 0626</span></p>
          </div>

          <div className="flex gap-4 items-center">
            <nav className="flex gap-4">
              <Link href="/classes" className="hover:text-zinc-900 transition">Lớp Học</Link>
              <Link href="/contact" className="hover:text-zinc-900 transition">Liên Hệ</Link>
            </nav>
            <div className="hidden sm:block h-10 border-l border-stone-200" />
            <div className="text-sm text-zinc-500">© 2026 VinhSchool</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
