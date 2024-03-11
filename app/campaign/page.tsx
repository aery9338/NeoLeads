"use client";

import React, { useState, type JSX, useEffect } from "react";
import search from "@/public/img/campaign/search.svg";
import CampaignTable from "@/components/campaign-table";
import Image from "next/image";
import { useDispatch } from "react-redux";
import NewCampaign from "./new";
import { setCampaign } from "../../store/actions/campaign-action";

function Campaign(): JSX.Element {
  const dispatch = useDispatch();
  const [newcampaign, setNewCampaign] = useState(false);

  useEffect(() => {
    dispatch(setCampaign() as any);
    if(localStorage.getItem("user-onboarding") !== null && localStorage.getItem("user-onboarding") !== undefined) {
        setNewCampaign(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between gap-6 m-8">
      <p className="text-2xl">Campaigns</p>
      <div className="w-full flex justify-between border-solid border-[.05vw] px-2 rounded-md border-gray-500 ">
        <Image src={search} alt="search" className="h-[11vw] sm:h-[3vw]" />
        <input placeholder="Search and Filter" className="w-full h-10 px-2" type="text" />
      </div>
      <div>
        <button
          className="primarybtn w-1/12 mt-4"
          onClick={() => {
            setNewCampaign(true);
          }}
          type="button"
        >
          + Create
        </button>
      </div>
      {/* @ts-expect-error */}
      <CampaignTable />
      <NewCampaign
        newcampaign={newcampaign}
        onClose={() => {
          setNewCampaign(false);
        }}
      />
    </div>
  );
}

export default Campaign;
