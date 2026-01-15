import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavbarOption5() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-width">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/PRIMARY%20LOGO.png"
              alt="BevCon"
              width={150}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Option 1
            </Link>
            <Link
              href="/option-2"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Option 2
            </Link>
            <Link
              href="/option-3"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Option 3
            </Link>
            <Link
              href="/option-4"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Option 4
            </Link>
            <Link href="/option-5" className="text-sm font-semibold text-slate-900">
              Option 5
            </Link>
            <Link
              href="#contact"
              className="rounded-sm border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          <button className="md:hidden" aria-label="Open menu">
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>
    </nav>
  );
}
