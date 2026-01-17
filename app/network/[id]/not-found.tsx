import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="section-padding bg-white">
          <div className="container-width">
            <Link
              href="/network"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Network</span>
            </Link>

            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                Not Found
              </p>
              <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl mb-4">
                Profile Not Found
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The profile you're looking for doesn't exist or is not available.
              </p>
              <Link
                href="/network"
                className="btn-primary inline-block"
              >
                View All Profiles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
