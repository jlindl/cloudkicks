import React from "react";
import Reveal from "./reveal";
import TiltedCard from "./tilted-card";
import CTAButton from "./cta-button";

const Showcase2: React.FC = () => {
  return (
    <section className="w-full bg-black px-6 py-24 text-white font-inter font-bold relative overflow-hidden">
      {/* Background Gradients - Stormy */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl grid items-center gap-16 md:grid-cols-2 relative z-10">

        <Reveal delay={80} className="max-w-xl">
          <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden group">
            {/* Glass Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">CloudKicks.</span>
              <br />
              Comfort you can live in.
            </h2>
            <p className="relative z-10 mt-6 text-gray-400 leading-relaxed text-lg font-light">
              CloudKicks was created to blur the line between home comfort and streetwear style. Designed to feel soft, effortless, and easy from the moment you put them on, every pair is made to move with you.
            </p>

            <div className="relative z-10 mt-10">
              <CTAButton href="/shop" variant="primary" showArrow={true}>
                Explore Collection
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
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
        </Reveal>
      </div>
    </section>
  );
};

export default Showcase2;
