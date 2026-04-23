"use client";

import { DiscoveryBookingProvider } from "@/components/discovery-booking";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <DiscoveryBookingProvider>{children}</DiscoveryBookingProvider>
    </ThemeProvider>
  );
}
