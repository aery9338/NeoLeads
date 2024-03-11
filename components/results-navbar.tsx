"use client";

import React, { type JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResultsNavbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="flex items-start gap-3 sm:gap-12 px-4 sm:px-8 py-2 sm:py-4 lg:py-8 shadow-sidebar border-r border-black/3 h-full sm: w-full bg-white sticky top-0">
      {[
        ["Campaign", "/results/campaigns"],
        ["Ads", "/results/ads"],
        ["Demographic", "/results/demographic"],
        ["Custom Conversions", "/results/custom-conversions"],
      ].map(([name, link]) => (
        <div
          className={`${
            pathname.includes(link) ? "border-b-4 border-[#3672AB]" : null
          } cursor-pointer`}
        >
          <Link href={link} className="no-underline text-black">
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}
