"use client";

import React, { useState, type JSX } from "react";
import Logo from "@/public/img/Logo.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";
import user from "@/public/img/sidebar/user.svg";
import campaign from "@/public/img/sidebar/campaign.svg";
import ads from "@/public/img/sidebar/ads.svg";
import templates from "@/public/img/sidebar/templates.svg";
import audience from "@/public/img/sidebar/audience.svg";
import activeUser from "@/public/img/sidebar/activeUser.svg";
import activeCampaign from "@/public/img/sidebar/activeCampaign.svg";
import activeAds from "@/public/img/sidebar/activeAds.svg";
import activeTemplates from "@/public/img/sidebar/activeTemplates.svg";
import activeAudience from "@/public/img/sidebar/activeAudience.svg";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function SideBar(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:flex-col justify-between md:justify-normal px-8 md:px-0 bg-white shadow-sidebar border-r border-black/30 w-full md:w-1/12 py-2 md:py-10">
      <Link href="/">
        <Image src={Logo} className="w-[50px] h-[50px] md:mx-auto" alt="Logo" />
      </Link>

      <div className="flex md:flex-col gap-4">
        <Link href="/profile">
          <Image
            src={pathname.includes("/profile") ? activeUser : user}
            alt="user"
            className="w-9 md:w-12 h-9 md:h-12 mx-auto mt-[6px] md:mt-8 justify-self-end"
          />
        </Link>

        <FiMenu
          className="h-10 w-10 flex mt-1 md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        />

        <ul
          className={`${
            open
              ? "flex flex-col absolute bg-white right-9 w-16 rounded-md shadow-element"
              : "hidden"
          } md:shadow-none md:static md:flex md:flex-col mx-auto list-none p-0 mt-12`}
        >
          <li>
            <Link href="/campaign">
              <Image
                src={pathname.includes("/campaign") ? activeCampaign : campaign}
                alt="Logo"
                className="sidebar-icons"
              />
            </Link>
          </li>
          <li>
            <Link href="/ads">
              <Image
                src={pathname.includes("/ads") ? activeAds : ads}
                alt="ads"
                className="sidebar-icons"
              />
            </Link>
          </li>
          <li>
            <Link href="/email-templates">
              <Image
                src={pathname.includes("/email-templates") ? activeTemplates : templates}
                alt="templates"
                className="sidebar-icons"
              />
            </Link>
          </li>
          <li>
            <Link href="/audience/listing">
              <Image
                src={
                  pathname.includes("/audience") || pathname.includes("/companies")
                    ? activeAudience
                    : audience
                }
                alt="audience"
                className="sidebar-icons"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
