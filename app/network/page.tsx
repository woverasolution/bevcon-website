import NavbarOption5 from "../components/NavbarOption5";
import Footer from "../components/Footer";
import { allProfiles, getProfilesByLevel, type ProfileLevel } from "../lib/network-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ProfileTeaserCard({ profile }: { profile: { id: string; name: string; role: string; teaserServices: string } }) {
  return (
    <Link
      href={`/network/${profile.id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(15,23,42,0.55)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
            {profile.name}
          </h3>
          <p className="text-base font-semibold text-slate-700 mb-3">
            {profile.role}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {profile.teaserServices}
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      </div>
      <div className="mt-6 h-px w-16 bg-primary/60 group-hover:w-24 transition-all" />
    </Link>
  );
}

function LevelSection({ level, title }: { level: ProfileLevel; title: string }) {
  const profiles = getProfilesByLevel(level);
  
  if (profiles.length === 0) return null;

  return (
    <section className="mb-20">
      <div className="mb-8 pb-4 border-b border-slate-200">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-2">
          {level === 'A' ? 'Leadership' : level === 'B' ? 'Senior Experts' : 'Execution / Site Roles'}
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <ProfileTeaserCard key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
}

export default function NetworkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOption5 />
      <main className="flex-grow pt-20">
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                Our Network
              </p>
              <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl mb-6">
                Leadership-led expertise across the beverage industry.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                BevCon is a leadership-led consultancy, not a freelancer marketplace. Our network brings together experienced professionals across strategy, engineering, operations, and execution—each selected for their proven track record in delivering beverage projects worldwide.
              </p>
            </div>

            <LevelSection level="A" title="Leadership" />
            <LevelSection level="B" title="Senior Experts" />
            <LevelSection level="C" title="Execution / Site Roles" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
