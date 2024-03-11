import React, { type JSX, type Dispatch, type SetStateAction } from "react";
import AIimage from "@/public/img/audience/AI.svg";
import Image from "next/image";

interface EditPasswordProps {
  finalise: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function FinaliseContent({ finalise, onClose }: EditPasswordProps): JSX.Element {
  function handleSubmit(): void {}

  const AiSequence = [
    { day: 1, content: "Automatic Persona" },
    { day: 3, content: "Automatic Persona" },
    { day: 5, content: "Automatic Persona" },
    { day: 6, content: "Automatic Persona" },
    { day: 9, content: "Automatic Persona" },
    { day: 10, content: "Automatic Persona" },
  ];

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
                Taru&apos;s Outbound AI Sequence 1
              </h1>

              <table className="bg-white w-full">
                <tbody>
                  {AiSequence.map((seq, index) => (
                    <tr
                      key={seq.day}
                      className="h-14 font-light hover:bg-gray-100 hover:cursor-pointer"
                    >
                      <td className="table-border px-1 md:px-4 font-medium">{index + 1}</td>
                      <td className="table-border px-1 md:px-4">
                        <div>Day {seq.day} : Follow UP</div>
                        <div className="font-medium">{seq.content}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
