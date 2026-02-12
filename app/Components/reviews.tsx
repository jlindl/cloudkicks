"use client";

import React from "react";
import TiltedCard from "./tilted-card";
import Reveal from "./reveal";

const reviewsCol1 = [
  "I forget I am wearing them. Easily the most comfortable footwear I own.",
  "Perfect balance between slippers and trainers. Clean and insanely soft.",
  "I bought one pair and ordered another a week later.",
  "Comfort without looking lazy. Exactly what I wanted.",
  "They have replaced my slippers entirely.",
];

const reviewsCol2 = [
  "Lightweight, flexible, and surprisingly supportive.",
  "I wear them from morning to night without discomfort.",
  "Minimal design but premium feel.",
  "Ideal for working from home and quick errands.",
  "Honestly did not expect them to feel this good.",
];

const Reviews: React.FC = () => {
  return (
    <section className="relative w-full bg-black px-6 py-32 text-white overflow-hidden font-inter font-bold">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
          style={{ backgroundImage: 'url("/assets/reviews_bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid gap-20 md:grid-cols-2 items-center">

        {/* Left copy */}
        <Reveal className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md px-4 py-2 text-xs font-mono tracking-wider text-gray-300 uppercase shadow-lg shadow-white/5">
            <span className="text-white">★★★★★</span>
            <span>Rated 5.0 by Customers</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-white">
            Don’t take our
            <span className="text-gray-500"> word</span> for it.
            <br />
            Take <span className="fill-transparent bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">theirs.</span>
          </h2>

          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-white/20 to-white/5 rounded-full" />

          <p className="mt-8 text-lg text-gray-400 leading-relaxed font-light">
            CloudKicks are worn daily by people who value pure comfort.
            From relaxed days at home to stepping out, our community describes them as the only footwear they never want to take off.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">10k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Pairs Sold</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Comfort Guarantee</p>
            </div>
          </div>
        </Reveal>

        {/* Animated reviews */}
        <div className="relative grid grid-cols-2 gap-6 h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">

          {/* Column 1 */}
          <div className="reviews-scroll space-y-6">
            {[...reviewsCol1, ...reviewsCol1, ...reviewsCol1].map((text, i) => (
              <Review key={`c1-${i}`} text={text} index={i} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="reviews-scroll-slower space-y-6 pt-12">
            {[...reviewsCol2, ...reviewsCol2, ...reviewsCol2].map((text, i) => (
              <Review key={`c2-${i}`} text={text} index={i} />
            ))}
          </div>

        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes verticalScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        .reviews-scroll {
          animation: verticalScroll 45s linear infinite;
          will-change: transform;
        }
        .reviews-scroll-slower {
          animation: verticalScroll 60s linear infinite;
          will-change: transform;
        }
        /* Mobile optimization */
        @media (max-width: 768px) {
           .reviews-scroll { animation-duration: 35s; }
           .reviews-scroll-slower { animation-duration: 45s; }
        }
      `}</style>
    </section>
  );
};

type ReviewProps = {
  text: string;
  index: number;
};

const Review = ({ text, index }: ReviewProps) => (
  <TiltedCard
    containerHeight="auto"
    containerWidth="100%"
    containerClass="bg-white/5 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-500 group shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    rotateAmplitude={8}
    scaleOnHover={1.02}
    showMobileWarning={false}
    showTooltip={false}
    displayOverlayContent={false}
  >
    <div className="relative">
      <div className="absolute -top-2 -left-2 text-4xl text-white/5 font-serif">"</div>

      <div className="flex items-center gap-1 mb-3 text-white/80 text-xs">
        {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
      </div>

      <p className="relative z-10 text-sm md:text-base leading-relaxed text-gray-200 font-medium">
        {text}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">Verified Buyer</p>
        <div className="h-2 w-2 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  </TiltedCard>
);

export default Reviews;
