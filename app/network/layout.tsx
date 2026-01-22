import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Network",
  description: "BevCon's leadership directs projects by collaborating with a carefully selected network of subject matter experts—proven engineers, operational leaders, and strategists deploying specific expertise exactly where your project requires it.",
  openGraph: {
    title: "Our Network | BevCon",
    description: "Meet the experts behind every BevCon project. Our network includes proven engineers, operational leaders, and strategists with over 100 years of combined experience.",
    url: "https://bevcon.com/network",
  },
  alternates: {
    canonical: "https://bevcon.com/network",
  },
};

export default function NetworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
