"use client";

import React, { useState, type JSX } from "react";
import Image from "next/image";
import toggleOn from "@/public/img/Toggle/toggleOn.svg";
import toggleOff from "@/public/img/Toggle/toggleOff.svg";

export default function Toggle(): JSX.Element {
  const [isOn, setIsOn] = useState(false);

  function handleToggle(): void {
    setIsOn((prevIsOn) => !prevIsOn);
  }
  return (
    <div>
      <button onClick={handleToggle} type="button">
        {isOn ? <Image src={toggleOn} alt="toggleOn" /> : <Image src={toggleOff} alt="toggleOff" />}
      </button>
    </div>
  );
}
