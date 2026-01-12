"use client";

import React from "react";

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

import TiltedCard from "./tilted-card";

const Reviews: React.FC = () => {
  return (
    <section className="relative w-full bg-neutral-900 px-6 py-32 text-white overflow-hidden font-inter font-bold">
      <div className="mx-auto max-w-7xl grid gap-20 md:grid-cols-2">

        {/* Left copy */}
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-800/60 px-3 py-1 text-xs text-gray-300">
            ★★★★★
            <span className="text-gray-400">Rated by real customers</span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Don’t take our word
            <br />
            for it. Take theirs.
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            CloudKicks are worn daily by people who value comfort and clean design.
            From relaxed days at home to stepping out, our customers consistently
            describe them as footwear they never want to take off.
          </p>
        </div>

        {/* Animated reviews */}
        <div className="relative grid grid-cols-2 gap-6 h-[520px] overflow-hidden">

          {/* Column 1 */}
          <div className="reviews-scroll space-y-6">
            {[...reviewsCol1, ...reviewsCol1].map((text, i) => (
              <Review key={`c1-${i}`} text={text} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="reviews-scroll-slower space-y-6">
            {[...reviewsCol2, ...reviewsCol2].map((text, i) => (
              <Review key={`c2-${i}`} text={text} />
            ))}
          </div>

        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes verticalScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .reviews-scroll {
          animation: verticalScroll 40s linear infinite;
          will-change: transform;
        }

        .reviews-scroll-slower {
          animation: verticalScroll 55s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

type ReviewProps = {
  text: string;
};

const Review = ({ text }: ReviewProps) => (
  <TiltedCard
    containerHeight="auto"
    containerWidth="100%"
    containerClass="bg-neutral-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-5"
    rotateAmplitude={10}
    scaleOnHover={1.03}
    showMobileWarning={false}
    showTooltip={false}
    displayOverlayContent={false}
  >
    <div>
      <p className="mb-3 text-sm text-white/80">★★★★★</p>
      <p className="text-sm leading-relaxed text-gray-200">{text}</p>
      <p className="mt-4 text-xs text-gray-400">CloudKicks customer</p>
    </div>
  </TiltedCard>
);

export default Reviews;
