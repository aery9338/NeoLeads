import React, { useState, type JSX, type Dispatch, type SetStateAction } from "react";
import AIimage from "@/public/img/audience/AI.svg";
import Image from "next/image";
import FinaliseContent from "./finalise-content";

interface EditPasswordProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function AI({ open, onClose }: EditPasswordProps): JSX.Element {
  const [productName, setProductName] = useState("");
  const [productService, setProductService] = useState("");
  const [valueProposition, setValueProposition] = useState("");
  const [callToAction, setCallToAction] = useState("");

  const [finalise, setFinalise] = useState(false);

  function handleSubmit(): void {}

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}`}
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
              ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-3/4 sm:w-2/3`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
            <div className="flex flex-col justify-between xl:w-2/5 px-6">
              <h1 className="text-2xl md:text-3xl xl:text-[42px] leading-7 xl:leading-[39px] text-center xl:text-left">
                Create Target Audience with AI
              </h1>
              <Image src={AIimage} alt="target audience with ai" className="hidden xl:flex" />
            </div>

            <div className="xl:w-3/5">
              <h1 className="hidden xl:flex text-2xl mb-1 xl:mb-3 font-medium xl:text-left">
                Review your company information
              </h1>

              <label htmlFor="product-name">
                <span className="font-medium">Company/Product Name</span>
                <input
                  type="text"
                  id="product-name"
                  className="auth-input h-9 mb-3 mt-[1px]"
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
              </label>

              <label htmlFor="product-service">
                <span className="font-medium">Product Service</span>
                <textarea
                  id="product-service"
                  className="auth-input xl:h-14 mb-3 mt-[1px] leading-[23px]"
                  value={productService}
                  onChange={(e) => {
                    setProductService(e.target.value);
                  }}
                  rows={2}
                />
              </label>

              <label htmlFor="value-proposition">
                <span className="font-medium">Value Proposition</span>
                <textarea
                  id="value-proposition"
                  className="auth-input xl:h-14 mb-3 mt-[1px] leading-[23px]"
                  value={valueProposition}
                  onChange={(e) => {
                    setValueProposition(e.target.value);
                  }}
                  rows={2}
                />
              </label>

              <label htmlFor="call-to-action">
                <span className="font-medium">Call to Action</span>
                <input
                  type="text"
                  id="call-to-action"
                  className="auth-input h-9 mb-3 mt-[1px]"
                  value={callToAction}
                  onChange={(e) => {
                    setCallToAction(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="secondarybtn w-fit h-8 lg:h-10 mx-4 px-3" type="submit">
              Cancel
            </button>
            <button
              className="primarybtn w-fit h-8 lg:h-10 px-3"
              type="button"
              onClick={() => {
                setFinalise(true);
              }}
              onKeyDown={() => {
                setFinalise(true);
              }}
            >
              Generate
            </button>
          </div>
        </form>
      </div>
      <FinaliseContent
        finalise={finalise}
        onClose={() => {
          setFinalise(false);
        }}
      />
    </div>
  );
}
