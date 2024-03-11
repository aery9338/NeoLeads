"use client";

import React, { useEffect, type JSX } from "react";
import search from "@/public/img/ads/search.svg";
import Image from "next/image";
import Table from "@/components/ads-table";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAds } from "../../store/actions/ad-action";


const Ads = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAds() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between p-8 gap-6">
      <p className="text-2xl">Ads</p>
      <div className="w-full flex justify-between border-solid border-[.05vw] px-2 rounded-md border-gray-500 ">
        <Image src={search} alt="search" className="h-[11vw] sm:h-[3vw]" />
        <input placeholder="Search and Filter" className="w-full h-10 px-2" type="text" />
      </div>
      <div>
        <button className="primarybtn w-1/12 mt-4" type="button">
          <Link href="/ads/new-ads">+ Create</Link>
        </button>
      </div>
      <div>
        {/* @ts-expect-error */}
        <Table />
      </div>
    </div>
  );
};


export default Ads;
