import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import LightRays from "./lightrays";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-neutral-900 text-white min-h-screen overflow-hidden">
      {/* Rotating Background Image */}
      <Reveal delay={600} className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 !duration-[2000ms]">
        <Image
          src="/assets/cloudkickhero1.png"
          alt="Hero Background Graphic"
          width={1200}
          height={1200}
          className="w-[80%] md:w-[600px] h-auto object-contain opacity-70 animate-sway translate-y-12"
        />
      </Reveal>

      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#10da10ff"
          raysSpeed={2}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-[1100px] text-center pt-20">

          <Reveal delay={1200} className="!duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight translate-y-12">
              Built for comfort.
              <br />
              Styled for the street.
            </h1>
          </Reveal>

          <Reveal delay={2000} className="mt-6 !duration-1000">
            <p className="text-base md:text-lg text-white/70 max-w-[680px] mx-auto leading-relaxed translate-y-12">
              Designed to feel different.
            </p>
          </Reveal>

          <Reveal delay={2800} className="mt-24 flex items-center justify-center !duration-1000">
            <Link
              href="/shop"
              className="group relative flex items-center justify-center px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-signika font-semibold text-base uppercase tracking-widest transition-all duration-500 hover:scale-110 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 animate-float overflow-hidden"
            >
              {/* Moving Border */}
              <div
                className="absolute inset-0 rounded-full p-[2px] pointer-events-none"
                style={{
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor'
                }}
              >
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0%,#ffffff_25%,transparent_50%)] animate-[spin_2s_linear_infinite]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_auto] animate-shine" />
              <span className="relative z-10">Shop Now</span>
            </Link>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default Hero;
