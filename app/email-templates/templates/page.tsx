"use client";

import React, { useState, type JSX, useEffect } from "react";
import NewTemplate from "@/components/new-template";
import { useSelector , useDispatch } from "react-redux";

import { setSampleTemplates } from "../../../store/actions/template-email-action";

function CreateTemplate(): JSX.Element {
  const sampleTemplates = useSelector((state: any) => state.templateEmail.sampleTemplates);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("");

  useEffect(() => {
    dispatch(setSampleTemplates() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-8 xl:px-16 py-14">
      <h1 className="h-6 font-medium text-xl sm:text-2xl text-center sm:text-left">
        Choose a template to start from{" "}
      </h1>
      <div className="sm:mx-10 md:mx-20 lg:mx-14 my-10 sm:my-16 lg:my-24 flex flex-wrap justify-around lg:justify-between gap-10 md:gap-8 lg:gap-5 xl:gap-14">
        {sampleTemplates?.map((template: any, index: any) => (
          <div
            role="button"
            tabIndex={0}
            key={index}
            className="h-64 md:h-80 xl:h-96 w-44 sm:w-56 lg:w-60 xl:w-72 bg-gray-200 rounded-md flex
                       hover:cursor-pointer"
            onClick={() => {
              setAspectRatio(template?.aspectRatio);
              setOpen(true);
            }}
            onKeyDown={() => {
              setOpen(true);
            }}
          >
            <div className="bg-blue-primary text-white self-end w-full h-1/5 text-center rounded-b-md py-7">
              <p className="font-normal text-base">Ratio {template?.aspectRatio}</p>
            </div>
          </div>
        ))}
      </div>
      {/* @ts-expect-error */}
      <NewTemplate
        open={open}
        aspectRatio={aspectRatio}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
}

export default CreateTemplate;
