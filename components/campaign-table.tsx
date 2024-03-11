"use client";

import React, { useState, type JSX } from "react";
import edit from "@/public/img/campaign/edit.svg";
import stats from "@/public/img/campaign/stats.svg";
import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import Toggle from "./toggle";

interface CampaignTableProps {
  campaign: any;
}

function CampaignTable({ campaign }: CampaignTableProps): JSX.Element {
  const data = [
    {
      campaign: "Campaign1",
      delivery: "Delivered",
      bid: "100",
      budget: "$500",
      result: "Success",
    },
    {
      campaign: "Campaign2",
      delivery: "Pending",
      bid: "150",
      budget: "$800",
      result: "Pending",
    },
  ];

  const tableHeadings = ["Off/On", "Campaign", "Delivery", "Bid Strategy", "Budget", "Result"];

  const [hoveredRows, setHoveredRows] = useState(Array(data.length).fill(false));

  function handleMouseEnter(index: number): void {
    const updatedHoveredRows = [];
    updatedHoveredRows[index] = true;
    setHoveredRows(updatedHoveredRows);
  }

  function handleMouseLeave(index: number): void {
    const updatedHoveredRows = [];
    updatedHoveredRows[index] = false;
    setHoveredRows(updatedHoveredRows);
  }

  return (
    <table className="bg-white w-full">
      <thead>
        <tr className="text-lg sm:text-xl">
          {tableHeadings.map((heading) => (
            <th key={heading} className="table-border py-2 text-left px-1 md:px-4">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {campaign.map((item: any, index: number) => (
          <tr
            key={index}
            className="h-14 xl:text-lg font-light hover:bg-gray-100 hover:cursor-pointer"
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
          >
            <td className="table-border px-1 md:px-4" aria-label="toggle">
              <Toggle />
            </td>
            <td className="table-border px-1 md:px-4">
              {item?.buyingType}
              {hoveredRows[index] === true && (
                <div className="flex flex-row items-start justify-around">
                  <Link href="/results/campaigns" className="no-underline text-black">
                    <div className="flex flex-row items-start justify-around gap-2 text-sm cursor-pointer">
                      <Image src={stats} alt="stats" className="h-4" />
                      View Charts
                    </div>
                  </Link>
                  <Link href="/results/campaigns" className="no-underline text-black">
                    <div className="flex flex-row items-start justify-around gap-2 text-sm cursor-pointer">
                      <Image src={edit} alt="edit" className="h-4" />
                      Edit
                    </div>
                  </Link>
                </div>
              )}
            </td>
            <td className="table-border px-1 md:px-4">{item.delivery}</td>
            <td className="table-border px-1 md:px-4">{item.bid}</td>
            <td className="table-border px-1 md:px-4">{item.budget}</td>
            <td className="table-border px-1 md:px-4">{item.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
const mapStateToProps = (state: any): any => ({
  campaign: state.campaign.data,
});
export default connect(mapStateToProps, null)(CampaignTable);
