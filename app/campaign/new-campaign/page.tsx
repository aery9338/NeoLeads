"use client";

import React, { useState, type JSX, useEffect } from "react";
import Image from "next/image";
import blueTick from "@/public/img/ads/blueTick.svg";
import search from "@/public/img/ads/search.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateCampaign } from "@/store/actions/campaign-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setTargetAudience } from "@/store/actions/target-audience-action";
import ListItem from "@/components/list-item";
import AI from "./ai";

export default function NewCampaign(): JSX.Element {
  const [audience, setAudience] = useState(false);
  const [budgetType, setBudgetType] = useState("Daily Budget");
  const [budget, setBudget] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [campaign, setCampaign] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const targetAudiences = useSelector((state: any) => state.targetAudience.data);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCampaign = localStorage.getItem("campaign");
      if(storedCampaign !== null && storedCampaign !== undefined){
        setCampaign(JSON.parse(storedCampaign));
      }
    }
  }, []);
  
  useEffect(() => {
    dispatch(setTargetAudience() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showAudience(): void {
    setAudience(!audience);
  }

  const selectedOption = "default";
  const [open, setOpen] = useState(false);

  const handleSubmit = ():void => {
    if (budgetType === null || budgetType === undefined ||budgetType === "") {
      toast.error("Please fill details correctly");
      return
      
    } else if (budget === null || budget === undefined || budget === "") {
      toast.error("Please fill details correctly");
      return
      
    } else if (startingDate === null || startingDate === undefined || startingDate === "") {
      toast.error("Please fill details correctly");
      return
      
    } else if (endingDate === null || endingDate === undefined || endingDate === "") {
      toast.error("Please fill details correctly");
      return
      
    } else {
      dispatch(
        updateCampaign((campaign as { id: string }).id, {
          ...campaign,
          budgetType,
          budget,
          startingDate,
          endingDate,
          selectedAudience
        }) as any
      );
      toast.success("Campaign created successfully");
      localStorage.removeItem("campaign");
      router.push("/ads/new-ads");
    }
  };

  return (
    <div className="flex flex-col items-center py-16 gap-6">
      <div className="w-5/6 xl:w-3/4 flex flex-col gap-11">
        <div className="companies-card">
          <div className="flex gap-2 mb-4">
            <Image src={blueTick} alt="Blue Tick" className="w-5" />
            <h1 className="font-semibold sm:text-xl">Campaign Name</h1>
          </div>
          <input
            placeholder="Search and Filter"
            className="w-full h-9 px-2 rounded-md text-md font-light border-solid border-[.05vw]  border-gray-500"
            defaultValue={selectedOption}
            type="text"
          />
        </div>

        <div className="companies-card">
          <div className="flex gap-2 mb-4">
            <Image src={blueTick} alt="Blue Tick" className="w-5" />
            <h1 className="font-semibold sm:text-xl">Campaign Details</h1>
          </div>
          <div>
            <h1 className="font-semibold sm:text-lg">Buying Type</h1>
            <h1 className="font-light sm:text-lg">{(campaign as { buyingType?: string }).buyingType}</h1>
          </div>
          <div>
            <h1 className="font-semibold sm:text-lg">Campaign Objective</h1>
            <h1 className="font-light sm:text-lg">{(campaign as { objective?: string }).objective}</h1>
          </div>
        </div>

        <div className="companies-card">
          <div className="flex gap-2 mb-4">
            <Image src={blueTick} alt="Blue Tick" className="w-5" />
            <h1 className="font-semibold sm:text-xl">Budget And Schedule</h1>
          </div>
          <div className="font-semibold text-lg mb-3">Budget</div>
          <div className="w-full flex justify-between gap-8 mb-5">
            <select
              className="w-1/2 flex justify-between h-9 px-2 rounded-md text-md font-light border-solid border-[.05vw]  border-gray-500"
              value={budgetType}
              onChange={(e) => {
                setBudgetType(e.target.value);
              }}
            >
              <option value="Daily Budget">Daily Budget</option>
              <option value="Monthly Budget">Monthly Budget</option>
              <option value="Yearly Budget">Yearly Budget</option>
            </select>
            <div className="w-1/2 flex justify-between h-9 rounded-md text-md font-light border-solid border-[.05vw]  border-gray-500">
              <input
                placeholder="Budget"
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
                type="text"
              />
              <div className="mt-2">INR</div>
            </div>
          </div>

          <div className="font-semibold sm:text-lg mb-3">Schedule</div>

          <label className="flex flex-col" htmlFor="start-date">
            <span className="font-semibold text-base mb-1">Start date : </span>
            <input
              type="date"
              className="border-solid border-[.05vw] w-1/3 rounded-md border-gray-500 h-10 p-4"
              value={startingDate}
              onChange={(e) => {
                setStartingDate(e.target.value);
              }}
            />
          </label>

          <label className="flex flex-col mt-2" htmlFor="end-date">
            <span className="font-semibold text-base mb-1">End date : </span>
            <input
              type="date"
              className="border-solid border-[.05vw] w-1/3 rounded-md border-gray-500 h-10 p-4"
              value={endingDate}
              onChange={(e) => {
                setEndingDate(e.target.value);
              }}
            />
          </label>
        </div>

        {/* Ads Button */}
        {!audience && (
          <div className="flex justify-center">
            <button
              className="primarybtn w-fit md:w-1/3 px-4 mb-4"
              onClick={showAudience}
              type="button"
            >
              Add Audience
            </button>
          </div>
        )}

        {/* Audience */}
        {audience && (
          <div className="companies-card">
            <div className="flex justify-between">
              <div>
                <div className="flex gap-2 mb-4">
                  <Image src={blueTick} alt="Blue Tick" className="w-5" />
                  <h1 className="font-semibold sm:text-xl">Audience Control</h1>
                </div>
                <h1 className="font-light sm:text-lg">
                  Set criteria for where ads for this campaign can be delivered.
                </h1>
              </div>
              <button
                className="primarybtn w-fit px-4 hidden"
                type="button"
                onClick={() => {
                  setOpen(true);
                }}
                onKeyDown={() => {
                  setOpen(true);
                }}
              >
                Create Target Audience with AI
              </button>
            </div>
            <div className="w-full flex justify-between border-solid border-[.05vw] px-2 rounded-md border-gray-500 mt-3">
              <Image src={search} alt="search" className="h-[11vw] sm:h-[3vw]" />
              <input
                id="addAudience"
                placeholder="Search existing audience"
                className="w-full h-10 px-2"
                type="text"
                onClick={()=>{
                  const audienceList = document.getElementById('audienceList');
                  audienceList?.classList.remove("hidden")
                }}
              />
            </div>
            <div className="my-1">
              <button
                className="primarybtn w-fit px-4 mx-1 py-1"
                type="button"
                onClick={() => {
                  setOpen(true);
                }}
                onKeyDown={() => {
                  setOpen(true);
                }}
              >
                Create Target Audience with AI
              </button>
              {/* <Link href="/audience/create-audience"> */}
              <button
                className="w-fit px-4 border primarybtn border-zinc-400 mx-1 rounded py-1 !bg-[#EEEEEE] text-black"
                type="button"
              >
                Create New Target Audience
              </button>
              {/* </Link> */}
              </div>
            <div id="audienceList" className="hidden">
            {targetAudiences?.map((targetAudience: any, index: number) => (
                <ListItem key={index} targetAudience={targetAudience} setSelectedAudience={setSelectedAudience}/>
              ))}{" "}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white py-4 px-7 w-screen md:w-11/12 flex justify-between fixed bottom-0">
        <Link href="/campaign">
          <button className="primarybtn md:h-11 w-fit px-4" type="button">
            Back
          </button>
        </Link>
        {/* <Link href="/audience/create-audience"> */}
        <button className="primarybtn md:h-11 w-fit px-4" onClick={handleSubmit} type="button">
          Next
        </button>
        {/* </Link> */}
      </div>
      <AI
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
}
