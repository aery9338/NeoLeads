import React, { type JSX } from "react";
import Insight from "@/components/insight";
import Description from "./description";

export default function Peoples(): JSX.Element {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-5/6 xl:w-3/4 flex flex-col gap-11">
        <div className="flex companies-card">
          <div className="w-2/3">
            <h1 className="companies-h1 mb-1 sm:mb-0">Person Name</h1>
            <h6 className="companies-h6 mb-5">Partner and Co-Founder</h6>
            <select className="px-3 py-2 rounded-md border w-1/2 sm:w-2/6 lg:w-1/6 text-[#616162] text-[17px] hover:cursor-pointer">
              <option>CRM/ATS</option>
              <option>xyz</option>
              <option>xyz</option>
            </select>
          </div>
          <button type="button" className="primarybtn w-1/3">
            Access email and phone number
          </button>
        </div>

        <div className="companies-card">
          <h1 className="companies-h1 mb-5">Work History</h1>
          <div className="flex gap-[60px] lg:gap-[180px] xl:gap-[272px]">
            <div>
              <div className="flex flex-col sm:flex sm:flex-row gap-2">
                <div className="w-16 h-16 bg-gray-200 pt-3 px-2 rounded-md">Logo</div>
                <h1 className="companies-h1 text-[#3672AB] font-normal pt-2">Company name</h1>
              </div>
              <h6 className="companies-h6 mt-2">Company / current</h6>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="companies-h1 mb-1">Location</h1>
              <h6 className="companies-h6">Delhi, India</h6>
            </div>
          </div>
        </div>

        <Description />

        <Insight />
      </div>
    </div>
  );
}
