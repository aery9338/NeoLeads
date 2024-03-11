"use client";

import React, { type JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import greenSender from "@/public/img/domain-and-sender/greenSender.svg";
import redSender from "@/public/img/domain-and-sender/redSender.svg";
import arrow from "@/public/img/domain-and-sender/arrow.svg";
import SenderData from "@/services/sender-data";
import Delete from "./delete-sender";

export default function Senders(): JSX.Element {
  const [deleteSender, setDeleteSender] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-6 mx-8 my-12">
      <div className="flex flex-row justify-between">
        <p className="text-2xl flex gap-1">
          <Link href="/senders-and-domain">
            <Image src={arrow} alt="arrow" className="h-6 mt-[2px]" />
          </Link>
          Senders
        </p>
        <div>
          <button className="primarybtn w-fit px-4 sm:px-8 text-lg" type="button">
            <Link href="/senders-and-domain/senders/new-sender" className="no-underline text-white">
              Add a sender
            </Link>
          </button>
        </div>
      </div>

      {SenderData.map((Sender) => (
        <div className="gap-4 px-2 py-6 border-b border-black">
          <div className="flex gap-4">
            <Image
              src={Sender.verified ? greenSender : redSender}
              alt={Sender.verified ? "Verified Sender" : "Unverified Sender"}
            />
            <div>
              <p className="text-xl font-medium">
                {Sender.name} &lt;{Sender.email}&gt;{" "}
              </p>
              <p className="text-[17px] text-[#616162]">
                {Sender.verified
                  ? `Verified. ${Sender.verfiedby} has verified it via domain`
                  : `Not Verified`}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-16 px-14 py-4">
            <div className="flex flex-col">
              <p className="text-[17px] text-[#616162]">IP Address</p>
              <p className="text-[15px] font-light">{Sender.ip}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[17px] text-[#616162]">DKIM Signature</p>
              <p className="text-[15px] font-light">{Sender.dkim}</p>
            </div>
          </div>
          <div className="flex gap-6 px-14 ">
            {Sender.verified ? null : (
              <button type="button">
                <Link href="/senders-and-domain/senders/verify-sender" className="underline">
                  Verify
                </Link>
              </button>
            )}
            <button className="underline" type="button">
              Edit
            </button>
            <button
              className="underline"
              type="button"
              onClick={() => {
                setDeleteSender(true);
              }}
              onKeyDown={() => {
                setDeleteSender(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <Delete
        deleteSender={deleteSender}
        onClose={() => {
          setDeleteSender(false);
        }}
      />
    </div>
  );
}
