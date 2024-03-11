"use client";

import React, { useEffect, type JSX } from "react";
import Link from "next/link";
import ListItem from "@/components/list-item";
import { useSelector, useDispatch } from "react-redux";
import { setTargetAudience } from "../../../store/actions/target-audience-action";


const AudienceListing = (): JSX.Element => {
  const targetAudiences = useSelector((state: any)=> state.targetAudience.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTargetAudience() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-3 sm:px-16 md:px-24 py-14">
      <div className="flex justify-between">
        <h2 className="text-4xl">Target Audience Listing</h2>

        <Link href="/audience/create-audience">
          <button className="primarybtn w-32 md:w-48" type="button">
            Create Target Audience
          </button>
        </Link>
      </div>
      <div>
        {targetAudiences?.map((targetAudience: any, index: any) => (
          <ListItem key={index} targetAudience={targetAudience} />
        ))}
      </div>
    </div>
  );
};

export default AudienceListing;
