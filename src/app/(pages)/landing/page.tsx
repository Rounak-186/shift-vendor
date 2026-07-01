import { AboutUsSection } from "@/app/components/module/landing/AboutUsSection";
import HeroSection, {
  GetStartedSection,
} from "@/app/components/module/landing/HeroSection";
import { HowItWorksSections } from "@/app/components/module/landing/HowItWorksSections";
import { PreferenceSection } from "@/app/components/module/landing/PreferenceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <HeroSection />
      <GetStartedSection />
      <AboutUsSection />
      <PreferenceSection />
      <HowItWorksSections />
    </div>
  );
}
