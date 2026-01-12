import React from "react";
import Reveal from "./reveal";
import TiltedCard from "./tilted-card";

const Showcase: React.FC = () => {
  return (
    <section className="w-full bg-neutral-900 px-6 py-24 text-white font-inter font-bold">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-wide text-gray-400"></p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">Comfort, redefined<br /></h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Where comfort becomes the design.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={60} className="w-full h-full aspect-[4/5]">
            <TiltedCard
              imageSrc="/assets/showcase1.png"
              altText="All-day comfort"
              captionText=""
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 text-xl text-white/70 transition">+</div>
                  <div className="absolute bottom-4 left-4"><p className="text-sm text-white/90 font-medium">All-day comfort</p></div>
                </>
              }
            />
          </Reveal>

          <Reveal delay={120} className="w-full h-full aspect-[4/5]">
            <TiltedCard
              imageSrc="/assets/showcase12.png"
              altText="Lightweight design"
              captionText=""
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 text-xl text-white/70 transition">+</div>
                  <div className="absolute bottom-4 left-4"><p className="text-sm text-white/90 font-medium">Lightweight design</p></div>
                </>
              }
            />
          </Reveal>

          <Reveal delay={180} className="w-full h-full aspect-[4/5]">
            <TiltedCard
              imageSrc=""
              altText="Minimal, versatile style"
              captionText=""
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="w-full h-full bg-neutral-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 text-xl text-white/70 transition">+</div>
                  <div className="absolute bottom-4 left-4"><p className="text-sm text-white/90 font-medium">Minimal, versatile style</p></div>
                </div>
              }
            >
              <div className="w-full h-full bg-neutral-800" />
            </TiltedCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
