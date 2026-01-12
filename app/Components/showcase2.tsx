import React from "react";
import Reveal from "./reveal";
import TiltedCard from "./tilted-card";

const Showcase2: React.FC = () => {
  return (
    <section className="w-full bg-neutral-900 px-6 py-24 text-white font-inter font-bold">
      <div className="mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">

        <Reveal delay={80} className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">Meet CloudKicks.<br />Comfort you can live in.</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            CloudKicks was created to blur the line between home comfort and streetwear style. Designed to feel soft, effortless, and easy from the moment you put them on, every pair is made to move with you throughout the day, not just stay indoors.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 rounded-md bg-transparent border border-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/6 transition">
              Explore the collection
              <span className="ml-1 text-lg">→</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={160} className="relative w-full h-[260px] md:h-[360px]">
          <TiltedCard
            containerHeight="100%"
            containerWidth="100%"
            containerClass="rounded-2xl overflow-hidden shadow-lg bg-neutral-900"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 via-transparent to-transparent">
              <div className="grid grid-cols-10 gap-1 opacity-85">
                {Array.from({ length: 120 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-sm bg-white/60 transform transition-opacity duration-700"
                    style={{ opacity: ((i % 10) + 2) / 12 }}
                  />
                ))}
              </div>
            </div>
          </TiltedCard>
        </Reveal>

      </div>
    </section>
  );
};

export default Showcase2;
