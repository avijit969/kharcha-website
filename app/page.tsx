"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { WhyKharcha } from "./components/WhyKharcha";
import { Gallery } from "./components/Gallery";
import { ComingSoon } from "./components/ComingSoon";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main className="grow pt-24">
        <Hero />
        <Features />
        <WhyKharcha />
        <Gallery />
        <ComingSoon />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
