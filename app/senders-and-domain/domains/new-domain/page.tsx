"use client";

import React, { type JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/img/domain-and-sender/arrow.svg";

export default function NewDomain(): JSX.Element {
  const [domainName, setDomainName] = useState("");

  function handleForm(): void {}

  return (
    <div className="flex flex-col justify-between gap-6 mx-8 my-12">
      <p className="text-2xl flex gap-1">
        <Link href="/senders-and-domain/domains">
          <Image src={arrow} alt="arrow" className="h-6 mt-[2px]" />
        </Link>
        Add a Domain
      </p>

      <form className="auth-form py-8 px-2" onSubmit={handleForm}>
        <label htmlFor="domain-name" className="flex flex-col">
          <span className="text-xl">Domain Name</span>
          <input
            type="text"
            id="domain-name"
            className="auth-input mb-5 mt-3 w-2/3"
            value={domainName}
            onChange={(e) => {
              setDomainName(e.target.value);
            }}
          />
        </label>

        <div className="flex items-start gap-10 mt-4">
          <button className="primarybtn w-1/12" type="button">
            <Link href="/senders-and-domain/senders" className="no-underline text-white">
              Save
            </Link>
          </button>
          <button className="secondarybtn w-1/12" type="button">
            <Link href="/senders-and-domain/senders" className="no-underline text-black">
              Cancel
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
