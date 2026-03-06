"use client";

import React, { useRef } from "react";
import TiltedCard from "./tilted-card";
import ScrollReveal from "./scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full bg-black px-6 py-32 text-white overflow-hidden font-inter font-bold">

      {/* Top fade for seamless section transition */}
      <div className="absolute top-0 left-0 right-0 h-48 z-10 pointer-events-none bg-gradient-to-b from-black to-transparent" />

      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0 select-none pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity will-change-transform"
          style={{ backgroundImage: 'url("/assets/testimonials.png")', filter: 'grayscale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl grid gap-20 md:grid-cols-2 items-center">

        {/* Left copy */}
        <ScrollReveal direction="left" distance={50} duration={0.9} blur>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md px-4 py-2 text-xs font-mono tracking-wider text-gray-300 uppercase shadow-lg shadow-white/5">
            <span className="text-white">★★★★★</span>
            <span>Rated 5.0 by Customers</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-white flex flex-wrap gap-x-3 gap-y-1"
          >
            {"Don't take our".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500"
            >
              word
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              for it.
            </motion.span>

            <div className="w-full h-0" />

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Take
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="fill-transparent bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"
            >
              theirs.
            </motion.span>
          </motion.div>

          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-white/20 to-white/5 rounded-full" />

          <div className="mt-8 space-y-4 text-lg text-gray-400 leading-relaxed font-light">
            <p>Not hype. Not exaggeration.</p>
            <p>
              From slow mornings to late link-ups, the feedback is the same. Comfort that feels different. A silhouette that stands out without trying.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">1k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Pairs Sold</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Positive Reviews</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Animated reviews */}
        <ScrollReveal direction="right" distance={40} duration={0.9} delay={0.2}>
          <div className="relative grid grid-cols-2 gap-6 h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">

            {/* Column 1 */}
            <div className="reviews-scroll space-y-6">
              {[...reviewsCol1, ...reviewsCol1, ...reviewsCol1].map((text, i) => (
                <Review key={`c1-${i}`} text={text} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="reviews-scroll-slower space-y-6 pt-12">
              {[...reviewsCol2, ...reviewsCol2, ...reviewsCol2].map((text, i) => (
                <Review key={`c2-${i}`} text={text} />
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes verticalScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes verticalScrollDown {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .reviews-scroll {
          animation: verticalScrollUp 45s linear infinite;
          will-change: transform;
        }
        .reviews-scroll-slower {
          animation: verticalScrollDown 60s linear infinite;
          will-change: transform;
        }
        .reviews-scroll:hover, .reviews-scroll-slower:hover {
          animation-play-state: paused;
        }
        /* Mobile optimization */
        @media (max-width: 768px) {
           .reviews-scroll { animation-duration: 35s; }
           .reviews-scroll-slower { animation-duration: 45s; }
        }
      `}</style>
    </section >
  );
};



const Review = ({ text }: { text: string }) => (
  <TiltedCard
    containerHeight="auto"
    containerWidth="100%"
    containerClass="relative bg-white/5 backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-all duration-500 group shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer"
    rotateAmplitude={8}
    scaleOnHover={1.02}
    showTooltip={false}
    displayOverlayContent={false}
  >
    {/* Animated Gradient Spot Hover Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),rgba(255,255,255,0.06)_0%,transparent_60%)]" />
    <div className="absolute inset-0 border border-transparent rounded-2xl [background:linear-gradient(45deg,rgba(255,255,255,0.1),transparent,rgba(255,255,255,0.05))_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] mask-composite-exclude opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="relative">
      <div className="absolute -top-2 -left-2 text-4xl text-white/5 font-serif">&quot;</div>

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
