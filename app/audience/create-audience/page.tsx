"use client";

import React, { useState, type ChangeEvent, type FormEvent, useEffect, type JSX } from "react";
import Filters from "@/components/filters";
import Audiencetable from "@/components/audience-table";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  setAudienceProfile,
  addTargetAudience,
} from "../../../store/actions/target-audience-action";
import AI from "./ai";
import Link from "next/link";

function CreateAudience({ params }: any): JSX.Element {
  const id = useSelector((state: any)=> state.targetAudience.id);
  const audienceProfile = useSelector((state: any)=> state.targetAudience.audienceProfile);
  const dispatch = useDispatch();
  const [audienceName, setAudienceName] = useState("");
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(setAudienceProfile(null) as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (id === null || id === undefined || id === "") {
      const existenceValidation =
        audienceProfile.audienceName === undefined ||
        audienceProfile.audienceName === "" ||
        audienceProfile.company === undefined ||
        audienceProfile.company.length === 0 ||
        audienceProfile.job === undefined ||
        audienceProfile.job.length === 0;
      if (existenceValidation) {
        toast.error("Please do not leave audienceName or audienceCompany or job fields blank");
        return;
      }
    }
    const validation =
      (audienceProfile.job?.length === 1 || audienceProfile.job === undefined) &&
      (audienceProfile.company?.length === 1 || audienceProfile.company === undefined) &&
      (audienceProfile.technology?.length === 1 || audienceProfile.technology === undefined) &&
      (audienceProfile.revenue?.length === 1 || audienceProfile.revenue === undefined) &&
      (audienceProfile.funding?.length === 1 || audienceProfile.funding === undefined) &&
      (audienceProfile.industry?.length === 1 || audienceProfile.industry === undefined) &&
      (audienceProfile.employee?.length === 1 || audienceProfile.employee === undefined) &&
      (audienceProfile.location?.length === 1 || audienceProfile.location === undefined);

    if (!validation) {
      toast.error("Please select only one option to create audience");
      return;
    }
    await dispatch(addTargetAudience(audienceProfile) as any);
    if(localStorage.getItem("user-onboarding") !== null && localStorage.getItem("user-onboarding") !== undefined) {
      router.push("/campaign/new-campaign");
    }else{
      router.push("/audience/listing");
    }
    toast.success("Audience Profile created successfully");
  };

  const handleAudienceNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newAudienceName = e.target.value;
    setAudienceName(newAudienceName);
    dispatch(setAudienceProfile({ ...audienceProfile, audienceName: newAudienceName }) as any);
  };

  return (
    <div className="w-full bg-[#F2F2F2] min-h-screen">
      <div className="py-9 px-7">
        <h1 className="text-2xl">Target Audience</h1>

        <div className="flex mt-4 md:mt-6 gap-6">
          <div className="sm:w-1/3 lg:w-1/5">
            <div className="text-lg leading-[16px] text-[#00000080]">
              Customize your audience to meet your specific needs using the filters below. Once
              you&apos;ve defined your ideal audience, gain instant access to them.
            </div>
            <Filters />
            <button
              className="primarybtn md:h-11"
              type="button"
              disabled
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

          <div className="w-full sm:w-2/3 lg:w-3/4">
            <div className="text-xl">
              <h1 className="leading-6 tracking-wide md:tracking-normal mb-3 font-medium">
                Create and name to your target audience
              </h1>

              <form className="flex justify-between">
                <input
                  className="rounded-md h-8 md:h-11 w-3/4 px-4 border border-black/30"
                  value={audienceName}
                  onChange={handleAudienceNameChange}
                />
                <button
                  onClick={(event) => {
                    void handleSubmit(event);
                  }}
                  className="primarybtn md:h-11 w-12 sm:w-20 md:w-28"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>

            {/* @ts-expect-error */}
            <Audiencetable params={params} />
          </div>
        </div>
      </div>
      <div className="bg-white py-8 px-7 w-screen md:w-11/12 flex justify-between fixed bottom-0">
        <Link href="/audience/listing">
        <button className="primarybtn md:h-11 w-fit px-4" type="button">
          Back
        </button>
        </Link>
        <button 
        onClick={(event) => {
          void handleSubmit(event);
        }}
        disabled
        className="primarybtn md:h-11 w-fit px-4" type="button">
          Create your Target Audience
        </button>
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

export default CreateAudience;
