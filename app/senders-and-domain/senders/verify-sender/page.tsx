"use client";

import React, { useState, type JSX } from "react";
import OtpInput from "react-otp-input";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/img/domain-and-sender/arrow.svg";

export default function VerifySender(): JSX.Element {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex flex-col justify-between gap-6 mx-8 my-12">
      <p className="text-2xl flex gap-1">
        <Link href="/senders-and-domain/senders">
          <Image src={arrow} alt="arrow" className="h-6 mt-[2px]" />
        </Link>
        Verify Sender
      </p>
      <div className="flex flex-col p-8 w-full">
        <p className="font-light">
          Enter the verification code sent on the &quot;tarupathak.xyz&quot; to verify your sender
          &quot;taru pathak&quot; If you do not recieve the verification code then click on resend
          verification code button.
        </p>
        <button className="primarybtn my-5 w-fit px-4" type="button">
          <Link href="/senders-and-domain/senders" className="no-underline text-white">
            Resend verification code
          </Link>
        </button>
        <div className="w-2/5 my-3">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus
            inputStyle="border border-solid border-gray-500 p-4 mr-4 rounded-md text-center"
            renderInput={(inputProps, index) => (
              <input
                key={index}
                value={inputProps.value}
                onChange={inputProps.onChange}
                onBlur={inputProps.onBlur}
                onFocus={inputProps.onFocus}
                onKeyDown={inputProps.onKeyDown}
                style={{ width: "50%", height: "50%" }}
              />
            )}
          />
        </div>
        <div className="flex items-start gap-12 mt-8">
          <button className="primarybtn w-1/4 sm:w-1/6" type="button">
            <Link href="/senders-and-domain/senders" className="no-underline text-white">
              Save
            </Link>
          </button>
          <button className="secondarybtn w-1/4 sm:w-1/6" type="button">
            <Link href="/senders-and-domain/senders" className="no-underline text-black">
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
