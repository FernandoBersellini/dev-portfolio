import Experience from "@/components/experience";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import TechStack from "@/components/techstack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Header />
      <HeroSection />
      <Experience />
      <TechStack />
    </div>
  );
}
