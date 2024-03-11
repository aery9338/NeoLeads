"use client";

import React, { useState, type JSX } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import dummy from "@/public/img/templates/dummy.jpg";
import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { setSpecificAddTemplate } from "../store/actions/ad-action";

interface TemplateItemProps {
  template: {
    id: string;
    email: string;
    aspectRatio: string;
  };
}

 function TemplateItem({ template ,...props}: TemplateItemProps | any): JSX.Element {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropdown = [
    ["Create Email", "/email-templates/editor"],
    ["Preview", ""],
    ["Share", ""],
    ["Replicate", ""],
  ];

  const handleSpecificTemplate = (data: any): void =>{
    if(localStorage.getItem("user-onboarding") !== null && localStorage.getItem("user-onboarding") !== undefined) {
     props.setSpecificAddTemplate(data);
    toast.success("template selected");
    }
  }

  return (
    <div 
    role="button"
    tabIndex={0}
    onClick={()=>{ handleSpecificTemplate(template?.template); }} 
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
          handleSpecificTemplate(template?.template);
      }
  }}
    className="flex justify-between my-12 h-24 items-center hover:bg-[#ECECEC] border border-slate-400 px-2 sm:px-5 rounded-lg"
    >
      <div className="flex gap-3 items-center">
        <Image src={dummy} className="w-14 h-20 border rounded-md" alt="Template" />
        <div>
          <h1 className="text-blue-primary text-[22px]">{template?.aspectRatio ?? "Template"}</h1>
          <h5 className="font-light text-primary">{template?.email}</h5>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex">
          <button
            onClick={(e: any) => {
              e.stopPropagation();
              router.push(`/html-editor/${template?.id ?? ""}`);
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
            onClick={(e: any) => {
              e.stopPropagation();
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
}

const mapDispatchToProps = {
  setSpecificAddTemplate,
}
export default connect(null, mapDispatchToProps)(TemplateItem);
