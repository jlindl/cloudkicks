"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Option {
    name: string;
    values: string[];
}

interface Variant {
    id: string;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
}

interface VariantSelectorProps {
    options: Option[];
    variants: Variant[];
}

export default function VariantSelector({ options, variants }: VariantSelectorProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // Helper to check if a combination is available
    const isAvailable = (optionName: string, value: string) => {
        // Basic check: is there ANY variant with this option value that is available for sale?
        return variants.some(
            (variant) =>
                variant.selectedOptions.some(
                    (opt) => opt.name === optionName && opt.value === value
                ) && variant.availableForSale
        );
    };

    const handleSelect = (name: string, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set(name, value);
        router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col gap-6" suppressHydrationWarning>
            {options.map((option) => (
                <div key={option.name}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                            {option.name}
                        </span>
                        <span className="text-xs font-mono text-white/70">
                            {searchParams.get(option.name) || "Select"}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => {
                            const isActive = searchParams.get(option.name) === value;
                            const available = isAvailable(option.name, value);

                            return (
                                <button
                                    key={value}
                                    onClick={() => handleSelect(option.name, value)}
                                    disabled={!available} // Optional: Could allow selection but show "Sold Out"
                                    className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200
                    ${isActive
                                            ? "bg-white text-black border-white"
                                            : "bg-white/5 text-white/80 border-white/10 hover:border-white/30 hover:bg-white/10"
                                        }
                    ${!available && "opacity-50 cursor-not-allowed decoration-slice"}
                  `}
                                >
                                    {value}
                                    {!available && (
                                        <div className="absolute inset-x-0 top-1/2 h-px bg-white/30 -rotate-12" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
