"use client";

import React, { type JSX, useState } from "react";
import Link from "next/link";
import greenSender from "@/public/img/domain-and-sender/greenSender.svg";
import redSender from "@/public/img/domain-and-sender/redSender.svg";
import arrow from "@/public/img/domain-and-sender/arrow.svg";
import Image from "next/image";
import DomainData from "@/services/domain-data";
import Delete from "./delete-domain";

export default function Domains(): JSX.Element {
  const [deleteDomain, setDeleteDomain] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-6 mx-8 my-12">
      <div className="flex flex-row justify-between">
        <p className="text-2xl flex gap-1">
          <Link href="/senders-and-domain">
            <Image src={arrow} alt="arrow" className="h-6 mt-[2px]" />
          </Link>
          Domains
        </p>
        <div>
          <button className="primarybtn w-fit px-4 sm:px-8 text-lg" type="button">
            <Link href="/senders-and-domain/domains/new-domain" className="no-underline text-white">
              Add a domain
            </Link>
          </button>
        </div>
      </div>

      {DomainData.map((Domain) => (
        <div className="gap-4 px-2 py-6 border-b border-black">
          <div className="flex gap-4">
            <Image
              src={Domain.verified ? greenSender : redSender}
              alt={Domain.verified ? "Verified Sender" : "Unverified Sender"}
            />
            <div>
              <p className="text-xl font-medium">{Domain.domainName}</p>
              <p className="text-[17px] text-[#616162]">
                {Domain.verified
                  ? `Authenticated. ${Domain.verfiedby} has authenticated it via domain`
                  : `Not Authenticated`}
              </p>
            </div>
          </div>
          <div className="flex gap-6 px-14 py-4">
            {Domain.verified ? (
              <button type="button">
                <Link href="/senders-and-domain/domains" className="underline">
                  View Configuration
                </Link>
              </button>
            ) : (
              <button type="button">
                <Link href="/senders-and-domain/domains/verify-domain" className="underline">
                  Verify
                </Link>
              </button>
            )}
            <button
              className="underline"
              type="button"
              onClick={() => {
                setDeleteDomain(true);
              }}
              onKeyDown={() => {
                setDeleteDomain(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <Delete
        deleteDomain={deleteDomain}
        onClose={() => {
          setDeleteDomain(false);
        }}
      />
    </div>
  );
}
