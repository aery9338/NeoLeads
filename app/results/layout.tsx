import React, { type JSX } from "react";
import Navbar from "@/components/results-navbar";

export default function page({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
