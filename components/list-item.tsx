"use client";

import React, { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import { toast } from "react-toastify";

interface ListItemProps {
  targetAudience: any;
  setSelectedAudience?: any;
}

const ListItem: React.FC<ListItemProps> = ({ targetAudience, ...props }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropdown: Array<[string, string]> = [
    ["Create Name", ""],
    ["Preview", ""],
    ["Share", ""],
    ["Replicate", ""],
  ];

  return (
    <div 
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.key === "Enter") {
        props.setSelectedAudience?.(targetAudience?.id);
        toast.success("Target Audience Selected");
      }
    }}
    onClick={()=>{
      props.setSelectedAudience?.(targetAudience?.id);
      toast.success("Target Audience Selected")
      }} 
      className="flex justify-between my-12 hover:bg-[#ECECEC] items-center border border-slate-400 px-2 sm:px-5 rounded-lg"
    >
      <div className="flex gap-3 items-center">
        <div>
          <h1 className="text-blue-primary text-[22px]">{targetAudience?.audienceName}</h1>
          <div className="flex gap-20 md:gap-10 sm:gap-5">
            <span className="font-[bold] flex text-primary w-[5rem] md:w-[7.5rem]">
              {targetAudience?.company[0]}
            </span>
            <span className="font-[bold] text-primary w-[5rem] md:w-[7rem]">
              {targetAudience?.job[0]}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex">
          <button
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/audience/edit-audience/${targetAudience.id}`);
            }}
            className="primarybtn w-16 sm:w-[71px] h-7 sm:h-8 flex px-3 py-1 sm:py-2"
            type="button"
          >
            <BiSolidPencil className="mr-1 mt-[2px]" />
            Edit
          </button>
          <button
            disabled
            className="primarybtn h-7 sm:h-8 p-1 sm:p-2 ml-1 sm:ml-2"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            type="button"
          >
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {open && (
          <div
            className={`bg-white py-2 px-6 mt-10 w-2/5 md:w-1/5 shadow-element rounded-md absolute  ${
              open ? "visible" : "invisible"
            }`}
          >
            <ul>
              {dropdown.map(([item, link]) => (
                <Link href={link} key={item}>
                  <li className="my-2 hover:cursor-pointer hover:text-blue-primary  hover:font-semibold">
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any): any => ({
  targetAudienceProfile: state.targetAudienceProfile,
});

ListItem.defaultProps = {
  setSelectedAudience: undefined,
};

export default connect(mapStateToProps, null)(ListItem);
