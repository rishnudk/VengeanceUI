"use client";

import RevealLoader from "@/components/ui/reveal-loader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RefreshCcw } from "lucide-react";

export function RevealLoaderDemo() {
    const [key, setKey] = useState(0);

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-100 dark:bg-neutral-900 border rounded-lg overflow-hidden">
            <RevealLoader key={key} text="VENGEANCE" className="absolute inset-0" />
            <div className="p-4 text-center">
                <h3 className="text-2xl font-bold mb-4">Click Reload to see the animation</h3>
                <Button onClick={() => setKey((prev) => prev + 1)} className="gap-2">
                    <RefreshCcw className="w-4 h-4" />
                    Reload Animation
                </Button>
            </div>
        </div>
    );
}
