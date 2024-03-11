import React, { type JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/img/domain-and-sender/arrow.svg";
import verify from "@/public/img/domain-and-sender/verifyDomain.svg";

export default function Domains(): JSX.Element {
  return (
    <div className="flex flex-col justify-between gap-6 mx-8 my-12">
      <p className="text-2xl flex gap-1">
        <Link href="/senders-and-domain/domains">
          <Image src={arrow} alt="arrow" className="h-6 mt-[2px]" />
        </Link>
        Verify Domain
      </p>
      <p className="font-light px-2">
        Verify your domain to add as many senders as you want on this domain without having to
        validate each one individually.
      </p>
      <div className="flex flex-col px-2 w-full gap-6">
        <div>
          <p className="text-lg">DNS Records</p>
          <p className="text-sm font-light">
            All you need is a Brevo code record to verify your domain. To authenticate the domain,
            Configure your domain with other remaining DNS records.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-lg">Record for domain verification</p>
          <hr className="border-t border-black mb-4" />
          <div className="flex gap-2">
            <Image src={verify} alt="verifyDomain" />
            <p className="text-lg font-light">Brevo Code . We need to verify your domain.</p>
          </div>
          <div className="flex items-start py-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 ">
                <p className="text-lg text-[#616162]">Type</p>
                <p className="text-lg font-light">TXT</p>
              </div>
              <div className="flex gap-4 ">
                <p className="text-lg text-[#616162]">Hostname</p>
                <p className="text-lg font-light">taru.xyz</p>
              </div>
              <div className="flex gap-4 ">
                <p className="text-lg text-[#616162]">Value</p>
                <p className="text-lg font-light">
                  brevo-code : 873hb2jbdury834yrhfjefjheury348ryh3fjbefju4
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-lg">DKIM record . We need it to authenticate your domain.</p>
          <hr className="border-t border-black mb-4" />
          <div className="flex gap-2">
            <Image src={verify} alt="verifyDomain" />
            <p className="text-lg font-light">Brevo Code . We need to verify your domain.</p>
          </div>
          <div className="flex items-start py-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 ">
                <p className="text-lg text-[#616162]">Type</p>
                <p className="text-lg font-light">TXT</p>
              </div>
              <div className="flex gap-4 ">
                <p className="text-lg text-[#616162]">Hostname</p>
                <p className="text-lg font-light">mail.domainkey.taru.zyx</p>
              </div>
              <div className="flex gap-4 ">
                <p className="text-lg text-[#616162]">Value</p>
                <p className="text-lg font-light">
                  873hb2jbdury834yrhfjefjheury348ryh3fjbefju4brevo-code :
                  873hb2jbdury834yrhfjefjheury348ryh3fjbefju4brevo-code :
                  873hb2jbdury834yrhfjefjheury348ryh3fjbefju4brevo-code :
                  873hb2jbdury834yrhfjefjheury348ryh3fjbefju4brevo-code :
                  873hb2jbdury834yrhfjefjheury348ryh3fjbefju4
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-8 my-8">
          <button className="primarybtn w-fit px-4" type="button">
            <Link href="/sendersAndDomain/senders">Verify and Authenticate</Link>
          </button>
          <button className="secondarybtn w-fit px-4" type="button">
            <Link href="/sendersAndDomain/senders">Just Verify</Link>
          </button>
          <button className="secondarybtn w-fit px-4" type="button">
            <Link href="/sendersAndDomain/senders">I&rsquo;ll do it later</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
