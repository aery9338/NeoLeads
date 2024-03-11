import React, { type JSX } from "react";
import { FaFacebook, FaTwitter, FaLink, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Description(): JSX.Element {
  return (
    <div className="companies-card flex-col md:flex md:flex-row gap-28 lg:gap-[184px]">
      <div className="w-full md:w-2/5">
        <div className="flex">
          <div className="mr-4 w-16 h-16 bg-gray-200 pt-3 px-2 rounded-md">Logo</div>
          <h1 className="companies-h1 text-[#3672AB] font-normal mt-4">Company name</h1>
        </div>
        <div className="flex justify-center text-[#3672AB] mt-2 lg:mt-0">
          <Link href="/">
            <FaFacebook className="companyLinks" />
          </Link>
          <Link href="/">
            <FaTwitter className="companyLinks" />
          </Link>
          <Link href="/">
            <FaLink className="companyLinks" />
          </Link>
          <Link href="/">
            <FaLinkedinIn className="companyLinks" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-between mt-12 gap-3 lg:gap-12">
          <div>
            <h2 className="companies-h2">Industry</h2>
            <h6 className="companies-h6 text-[#3672AB] mb-2">Research</h6>
          </div>

          <div>
            <h2 className="companies-h2">Employees</h2>
            <h6 className="companies-h6 text-[#3672AB]">
              <span className="text-[#616162]">200</span> Fine Leads
            </h6>
          </div>

          <div>
            <h2 className="companies-h2">Founded Year</h2>
            <h6 className="companies-h6 text-[#616162]">1916</h6>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 py-5">
        <h2 className="companies-h2">Description</h2>
        <h6 className="companies-h6 text-[#616162] leading-tight">
          Company is a manufacturer of IVD kit, rapid text kit, ELDS Test Kit, instrumentation
          Range.
          <span className="text-[#3672AB]">Show more</span>.
        </h6>

        <h2 className="companies-h2 mt-6">Keywords</h2>
        <ul className="companies-h6 text-[#616162] flex flex-wrap gap-4">
          <li className="bg-[#F0F0F2] py-1 px-2 w-fit rounded">in vitro diagnosis</li>
          <li className="bg-[#F0F0F2] py-1 px-2 w-fit rounded">biotechnology</li>
        </ul>
      </div>
    </div>
  );
}
