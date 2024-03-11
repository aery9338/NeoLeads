import React, { type JSX } from "react";
import Image from "next/image";

interface TabProps {
  tabName: string;
  img: string;
  imgActive: string;
  isActive: boolean;
  setActiveTab: () => void;
}

export default function Tab({
  tabName,
  img,
  imgActive,
  isActive,
  setActiveTab,
}: TabProps): JSX.Element {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`flex items-baseline gap-2 hover:cursor-pointer hover:bg-userbg companiesTab border-r companiesTabText py-4 h-1/5
        ${isActive ? "text-blue-primary" : null}`}
      onClick={() => {
        setActiveTab();
      }}
      onKeyDown={() => {
        setActiveTab();
      }}
    >
      <Image src={isActive ? imgActive : img} alt={tabName} className="h-4 mt-2" />
      <h1>{tabName}</h1>
    </div>
  );
}
