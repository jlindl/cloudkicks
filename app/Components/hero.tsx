"use client";


import Image from "next/image";
import LightRays from "./lightrays";
import HeroCTA from "./hero-cta";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./scroll-reveal";
import { useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves at 0.4x speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Content fades out and shifts up as you scroll past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0px", "-60px"]);

  return (
    <div ref={heroRef} className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center">

      {/* Full Background Image — Parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/assets/image copy.png"
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

      {/* Content — fades on scroll */}
      <motion.section
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col items-center text-center pt-24 will-change-transform"
      >
        <ScrollReveal delay={0.1} duration={1} direction="up" distance={50} blur>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-kanit font-black leading-[0.85] tracking-[0.02em] uppercase mb-4 mix-blend-screen relative z-10">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
              STREETWEAR
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_auto] animate-[shine_4s_linear_infinite] drop-shadow-2xl">
              MEETS COMFORT.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4} duration={1} direction="up" distance={30} blur>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light tracking-wide leading-relaxed mt-6">
            Streetwear energy. <br className="hidden md:block" />
            Slipper comfort. No compromise.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7} duration={1} direction="up" distance={20} className="mt-16 flex items-center justify-center">
          <HeroCTA link="/shop" />
        </ScrollReveal>
      </motion.section>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 will-change-transform pointer-events-none"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
