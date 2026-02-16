"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import LightRays from "./lightrays";
import HeroCTA from "./hero-cta";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center">

      {/* Full Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/cloud_kicks_dark_hero.png"
          alt="CloudKicks Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </motion.div>

      {/* Light Rays Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={0.8}
          followMouse={true}
          mouseInfluence={0.05}
          noiseAmount={0.05}
          distortion={0.1}
        />
      </div>

      {/* Content */}
      <section className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col items-center text-center pt-24">
        <Reveal delay={200} className="!duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-kanit font-black leading-[0.9] tracking-tighter uppercase mb-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 drop-shadow-2xl">
              Cloud
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 drop-shadow-2xl">
              Kicks
            </span>
          </h1>
        </Reveal>

        <Reveal delay={600} className="mt-8 !duration-1000">
          <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Step into the future of comfort. <br className="hidden md:block" />
            Engineered for the streets, designed for the clouds.
          </p>
        </Reveal>

        <Reveal delay={1000} className="mt-16 flex items-center justify-center !duration-1000">
          <HeroCTA link="/shop" />
        </Reveal>
      </section>
    </div>
  );
};

export default Hero;
