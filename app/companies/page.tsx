import React, { type JSX } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLink,
  FaLinkedinIn,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";
import Insight from "./insight";

export default function Companies(): JSX.Element {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-5/6 xl:w-3/4 flex flex-col gap-11">
        <div className="companies-card">
          <div className="flex">
            <div className="mr-4 w-16 h-16 bg-gray-200 pt-3 px-2 rounded-md">Logo</div>
            <h1 className="companies-h1 text-[#3672AB] font-normal mt-4">Company name</h1>
          </div>
          <div className="flex flex-wrap justify-between xl:justify-around text-[#3672AB] mt-2 lg:mt-0">
            <div className="flex my-3 sm:my-0">
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
            <Link href="/" className="flex my-3 sm:my-0">
              <FaPhoneAlt className="h-5 w-5 md:my-2" />
              <h1 className="lg:my-2 text-xl mx-1">+91987654321</h1>
            </Link>
            <Link href="/" className="flex my-3 sm:my-0">
              <FaDownload className="h-5 w-5 md:my-2" />
              <h1 className="lg:my-2 text-xl mx-1">Save Company</h1>
            </Link>
          </div>
        </div>

        <div className="companies-card">
          <h2 className="companies-h2">Description</h2>
          <h6 className="companies-h6 text-[#616162] leading-tight">
            Company is a manufacturer of IVD kit, rapid text kit, ELDS Test Kit, instrumentation
            Range.Company is a manufacturer of IVD kit, rapid text kit, ELDS Test Kit,
            instrumentation Range.Company is a manufacturer of IVD kit, rapid text kit, ELDS Test
            Kit, instrumentation Range.Company is a manufacturer of IVD kit, rapid text kit, ELDS
            Test Kit, instrumentation Range.
          </h6>

          <h2 className="companies-h2 mt-6">Keywords</h2>
          <ul className="companies-h6 text-[#616162] flex flex-wrap gap-4">
            <li className="bg-[#F0F0F2] py-1 px-2 w-fit rounded">in vitro diagnosis</li>
            <li className="bg-[#F0F0F2] py-1 px-2 w-fit rounded">biotechnology</li>
            <li className="bg-[#F0F0F2] py-1 px-2 w-fit rounded">Research</li>
          </ul>
        </div>

        <div className="companies-card">
          <table className="w-full xl:w-1/2">
            <tbody>
              {[
                ["Industry", "Research, Technology"],
                ["Employees", "Fine Leads"],
                ["Founded Year", "1916"],
                ["Location", "Delhi, India"],
              ].map(([detail, value]) => (
                <tr className="flex justify-between">
                  <td className="companies-h2 w-1/2">{detail}</td>
                  <td className="companies-h6 text-[#3672AB] w-1/2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Insight />
      </div>
    </div>
  );
}
