import NavbarOption5 from "../components/NavbarOption5";
import Footer from "../components/Footer";
import { getProfilesByLevel, type ProfileLevel, type NetworkProfile } from "../lib/network-data";
import Link from "next/link";
import { FlippingCard } from "../components/ui/flipping-card";

const PROFILE_IMAGES = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
];

function getProfileImage(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PROFILE_IMAGES.length;
  return PROFILE_IMAGES[index];
}

function NetworkProfileCard({ profile }: { profile: NetworkProfile }) {
  const imageSrc = getProfileImage(profile.id);

  return (
    <FlippingCard
      className="w-full h-[400px]"
      frontContent={
        <div className="flex flex-col h-full w-full">
          <div className="h-3/5 w-full relative overflow-hidden rounded-t-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={imageSrc} 
              alt={profile.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-4 flex flex-col justify-center flex-grow bg-slate-50 rounded-b-lg">
            <h3 className="text-lg font-bold text-slate-900">{profile.name}</h3>
            <p className="text-sm font-medium text-slate-600 mt-1">{profile.role}</p>
          </div>
        </div>
      }
      backContent={
        <div className="flex flex-col h-full w-full p-6 items-center justify-center text-center bg-slate-50 rounded-lg">
          <p className="text-sm leading-relaxed mb-6 text-slate-700">
            {profile.teaserServices}
          </p>
          <Link
            href={`/network/${profile.id}`}
            className="inline-flex items-center justify-center px-6 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      }
    />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <NetworkProfileCard key={profile.id} profile={profile} />
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
