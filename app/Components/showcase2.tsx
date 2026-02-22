"use client";

import React, { useRef } from "react";
import TiltedCard from "./tilted-card";
import HeroCTA from "./hero-cta";
import ScrollReveal from "./scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";

const Showcase2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on background glows
  const glowY1 = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  return (
    <section ref={sectionRef} className="w-full bg-black px-6 py-24 text-white font-inter font-bold relative overflow-hidden">
      {/* Background Gradients - Parallax */}
      <motion.div
        style={{ y: glowY1 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none will-change-transform"
      />

      <div className="mx-auto max-w-7xl grid items-center gap-16 lg:grid-cols-2 relative z-10">

        <ScrollReveal direction="left" distance={60} duration={0.9} blur>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative p-10 md:p-14 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.03)] overflow-hidden group"
          >
            {/* Animated Glow Border Effect */}
            <div className="absolute inset-0 rounded-[2rem] border border-transparent [background:linear-gradient(45deg,rgba(255,255,255,0.1),transparent,rgba(255,255,255,0.05))_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] mask-composite-exclude opacity-50 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Glass Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-700" />

            <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-kanit font-black leading-[0.9] tracking-tighter uppercase mb-6">
              Meet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-[length:200%_auto] animate-[shine_5s_linear_infinite]">
                CloudKicks.
              </span>
            </h2>
            <p className="relative z-10 text-neutral-400 leading-relaxed text-lg lg:text-xl font-light tracking-wide max-w-md">
              CloudKicks was created to blur the line between home comfort and streetwear style. Designed to feel soft, effortless, and easy from the moment you put them on, every pair is made to move with you.
            </p>

            <div className="relative z-10 mt-12">
              <HeroCTA mainText="Secure Your Pair" revealText="Buy Now" link="/shop" />
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal direction="right" distance={60} duration={0.9} delay={0.15} className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
            {/* Mist/Glow - White/Silver */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent blur-2xl rounded-full opacity-60" />
            <TiltedCard
              imageSrc="/assets/cloud_emblem_mono.png"
              altText="Cloud Kicks Emblem"
              captionText="Engineered for Comfort"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={20}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-center">
                  <p className="text-white/60 font-mono text-xs tracking-[0.2em] uppercase">Est. 2026</p>
                </div>
              }
              containerClass="bg-black/50 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Showcase2;
