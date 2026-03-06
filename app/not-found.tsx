import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-black min-h-screen font-inter text-white flex flex-col items-center justify-center pt-32 pb-24 px-4 text-center">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white/10 uppercase">
                404
            </h1>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
                Page Not Found
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto mb-8">
                The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/shop"
                className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-neutral-200 transition-colors inline-block"
            >
                Continue Shopping
            </Link>
        </div>
    );
}
