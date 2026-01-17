import NavbarOption5 from "../../components/NavbarOption5";
import Footer from "../../components/Footer";
import { getProfileById, allProfiles } from "../../lib/network-data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allProfiles.map((profile) => ({
    id: profile.id,
  }));
}

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = getProfileById(id);

  if (!profile || !profile.fullProfile) {
    notFound();
  }

  const servicesLine = `BevCon services: ${profile.services.join(' · ')}`;

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOption5 />
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

            <article className="max-w-4xl">
              <div className="mb-8 pb-6 border-b border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                  Profile
                </p>
                <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl mb-4">
                  {profile.name}
                </h1>
                <p className="text-xl font-semibold text-slate-700">
                  {profile.role}
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-10">
                <div className="text-slate-700 leading-relaxed text-base">
                  {profile.fullProfile.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-5">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-900 text-base leading-relaxed">
                  {servicesLine}
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
