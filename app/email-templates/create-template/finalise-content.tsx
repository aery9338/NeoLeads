import React, { type JSX, type Dispatch, type SetStateAction } from "react";
import AIimage from "@/public/img/audience/AI.svg";
import Image from "next/image";

interface EditPasswordProps {
  finalise: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function FinaliseContent({ finalise, onClose }: EditPasswordProps): JSX.Element {
  function handleSubmit(): void {}
  const firstName = "Name";
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${finalise ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        className={`bg-white rounded-xl shadow px-8 py-6 xl:py-10 transition-all 
              ${finalise ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-3/4 sm:w-2/3`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
            <div className="flex flex-col justify-between xl:w-2/5 px-6">
              <h1 className="text-2xl md:text-3xl xl:text-[42px] leading-7 xl:leading-[39px] text-center xl:text-left">
                Finalize your content
              </h1>
              <Image src={AIimage} alt="target audience with ai" className="hidden xl:flex" />
            </div>

            <div className="xl:w-3/5">
              <h1 className="hidden xl:flex text-2xl mb-1 xl:mb-3 font-medium xl:text-left">
                Taru&apos;s Outbound AI
              </h1>
              <div className="flex border border-black/40">
                <h1 className="p-2 border-r  border-black/40">Subject</h1>
                <p className="p-2">Boost your need with Neolen AI Chat bot.</p>
              </div>
              <div className="border border-black/40 p-2 my-2">
                Hi {firstName},ust type it in your Word document and you will get this paragraph:
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ust type it in your Word
                document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer
                our Word document and you will get this paragraph: Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.ust type it in your Word document and you will get this
                paragraph: Lorem ipsum dolor sit amet, consectetuer our Word document and you will
                get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ust
                type it in your Word document and you will get this paragraph:and you will get this
                paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="secondarybtn w-fit h-8 lg:h-10 mx-4 px-3" type="submit">
              Cancel
            </button>
            <button className="primarybtn w-fit h-8 lg:h-10 px-3" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
