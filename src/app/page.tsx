"use client"
import Header from "@/components/common/header";
import HeroSection from "@/components/common/hero-section";
import Orb from "@/components/Orb";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="reltive w-screen min-h-screen">
      <div className="absolute inset-0 mt-10 -z-10">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      <div className="backdrop-blur absolute inset-0 -z-5"></div>

      <Header />

      <HeroSection />
    </div>
  );
}
