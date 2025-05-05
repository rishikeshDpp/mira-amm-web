"use client";

import FuelProviderWrapper from "../../../../../libs/shared/ui/Terminal/FuelProviderWrapper";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../../../../libs/shared/lib/queryClient";
import Terminal from "../../../../../libs/shared/ui/Terminal/Terminal";

import "../../../../../libs/shared/ui/index.css";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <FuelProviderWrapper>
        <div className="min-h-screen w-full flex items-center justify-center bg-black font-['VT323',monospace]">
          <Terminal />
        </div>
      </FuelProviderWrapper>
    </QueryClientProvider>
  );
}
