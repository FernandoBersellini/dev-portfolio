import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Header />
      <HeroSection />
    </div>
  );
}
