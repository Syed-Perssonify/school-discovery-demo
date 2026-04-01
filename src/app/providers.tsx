"use client";

import { DiscoveryBookingProvider } from "@/components/discovery-booking";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <DiscoveryBookingProvider>{children}</DiscoveryBookingProvider>;
}
