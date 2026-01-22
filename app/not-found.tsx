import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="container-width flex min-h-screen flex-col items-center justify-center gap-8 py-16 text-center">
        <div className="w-full max-w-sm">
          <Image
            src="/images/404-image.png"
            alt="Confused beer character illustration"
            width={720}
            height={720}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-xl space-y-4">
          <p className="text-6xl font-bold text-[#ffbb3a] sm:text-7xl">404</p>
          <p className="text-sm font-semibold text-[#ffbb3a]">Page not found</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            We couldn’t find that page.
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">
            Check the address or go back to the homepage.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#ffbb3a] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
          >
            Back to home
          </Link>
          <Link
            href="/#services"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Explore services
          </Link>
        </div>
      </div>
    </main>
  );
}
