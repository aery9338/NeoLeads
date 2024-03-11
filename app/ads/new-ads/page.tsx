"use client";

import React, { useState, type JSX, type FormEvent, useEffect } from "react";
import Image from "next/image";
import blueTick from "@/public/img/ads/blueTick.svg";
import search from "@/public/img/ads/search.svg";
import Link from "next/link";
import TemplateItem from "@/components/template-item";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setTemplateEmails } from "@/store/actions/template-email-action";
import { addAds } from "../../../store/actions/ad-action";

const NewAds = (): JSX.Element => {
  const [campaignName, setCampaignName] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const templateEmail = useSelector((state: any) => state.templateEmail.data ?? []);
  const adTemplate = useSelector((state: any) => state.ads.adTemplate);

  useEffect(() => {
    dispatch(setTemplateEmails() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (campaignName !== "" && name !== "" && campaignName !== null && name !== null && campaignName !== undefined && name !== undefined) {
      // if(adTemplate !== null && adTemplate !== undefined && adTemplate !== ""){
      dispatch(addAds({ campaignName, name, template: adTemplate }) as any);
      if(localStorage.getItem("user-onboarding") !== null && localStorage.getItem("user-onboarding") !== undefined) {
        toast.success("Campaign is live")
        router.push("/audience/listing");
        localStorage.removeItem("user-onboarding")
      }else{
      toast.success("Ad created successfully")
      router.push("/ads");
      }
      // }else{
      //   toast.info("Please wait to get template applied")
      // }
    } else {
         toast.error("Error in creating ad")
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
            value={campaignName}
            type="text"
            onChange={(e) => {
              setCampaignName(e.target.value);
            }}
          />
        </div>

        <div className="companies-card">
          <div className="flex gap-2 mb-4">
            <Image src={blueTick} alt="Blue Tick" className="w-5" />
            <h1 className="font-semibold sm:text-xl">Add Name</h1>
          </div>
          <input
            placeholder="Search and Filter"
            className="w-full h-9 px-2 rounded-md text-md font-light border-solid border-[.05vw]  border-gray-500"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="companies-card">
          <div className="flex gap-2 mb-4">
            <Image src={blueTick} alt="Blue Tick" className="w-5" />
            <h1 className="font-semibold sm:text-xl">Select Templates</h1>
          </div>

          <div className="flex justify-between w-full">
            <div className="w-3/4 flex justify-between border-solid border-[.05vw] px-2 rounded-md border-gray-500 ">
              <Image src={search} alt="search" className="h-[11vw] sm:h-[3vw]" />
              <input placeholder="Search and Filter" className="w-full h-10 px-2" type="text" />
            </div>
            <Link href="/email-templates/create-template">
            <button className="primarybtn w-fit h-12 px-4 py-2" type="button">
              Add Template
            </button>
            </Link>
          </div>

          {templateEmail?.map((element: any) => <TemplateItem key={element?.id} template={element} />)}
        </div>
     </div> 

      <div className="bg-white py-4 px-7 w-screen md:w-11/12 flex justify-between fixed bottom-0">
        <button className="primarybtn md:h-11 w-fit px-4" type="button">
          <Link href="/ads">Back</Link>
        </button>
        <button onClick={handleSubmit} className="primarybtn md:h-11 w-fit px-4" type="button">
          Submit
        </button>
      </div> 
    </div>
  );
};


export default NewAds;
