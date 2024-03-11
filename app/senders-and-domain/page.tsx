"use client";

import React, { type JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import sender from "@/public/img/domain-and-sender/senders.svg";
import domain from "@/public/img/domain-and-sender/domain.svg";

export default function SendersAndDomain(): JSX.Element {
  return (
    <div className="flex flex-col justify-between gap-6 mx-8 my-12">
      <p className="text-2xl font-medium">Senders and Domain</p>
      <div className="flex flex-col justify-between gap-6 m-8">
        <Link href="/senders-and-domain/senders">
          <div className="flex gap-6 px-2 py-6 border-b border-black">
            <Image src={sender} alt="sender" />
            <div>
              <p className="text-2xl font-medium">Senders</p>
              <p>
                Senders are shown in your receipents&rsquo; inbox when they receive your email. It
                helps your subscribers to recognize you.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/senders-and-domain/domains">
          <div className="flex gap-6 px-2 py-6 border-b border-black">
            <Image src={domain} alt="domain" />
            <div>
              <p className="text-2xl font-medium">Domains</p>
              <p>Domain indicates from whom an email is sent. It appears in From: Header.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
