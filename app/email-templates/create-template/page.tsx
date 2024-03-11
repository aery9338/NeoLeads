"use client";

import React, { useState, type JSX } from "react";
import Link from "next/link";
import AI from "./ai";

function CreateTemplate(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <div className="px-3 sm:px-16 md:px-24 py-12">
        <h2 className="text-4xl">Start building your Templates</h2>
        <div className="sm:w-3/4 my-8">
          <label htmlFor="template-name">
            <span className="text-lg lg:text-xl font-medium">Name of your template</span>
            <input
              type="text"
              id="template-name"
              className="auth-input mt-[6px]"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>
        <h2 className="text-lg lg:text-xl font-medium">
          Choose how you want to design your template
        </h2>
        <div className="flex justify-between my-6">
          <div className="flex flex-col w-2/5 border border-black/40 rounded-md px-10 py-6">
            <h2 className="font-medium text-center">
              Choose a template from the existing selection of templates.
            </h2>
            <button className="primarybtn self-center h-fit py-2 w-fit px-4 mt-2" type="button">
              <Link href="/email-templates/templates">Select existing templates</Link>
            </button>
          </div>
          <div className="flex flex-col w-2/5 border border-black/40 rounded-md px-10 py-6">
            <h2 className="font-medium text-center">Craft a template to suit your needs.</h2>
            <button className="primarybtn self-center h-fit py-2 w-fit px-4 mt-2" type="button">
              <Link href="/email-templates/editor">Make your own Template</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className="flex flex-col w-2/5 border border-black/40 rounded-md px-10 py-6">
            <h2 className="font-medium text-center">Create AI templates using our AI tools.</h2>
            <button
              className="primarybtn self-center h-fit py-2 w-fit px-4 mt-2"
              type="button"
              onClick={() => {
                setOpen(true);
              }}
              onKeyDown={() => {
                setOpen(true);
              }}
            >
              Generate AI Template
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border-t py-4 px-7 w-screen md:w-11/12 flex justify-between fixed bottom-0">
        <button className="primarybtn md:h-11 w-fit px-4" type="button">
          <Link href="/email-templates">Back</Link>
        </button>
        <button className="primarybtn md:h-11 w-fit px-4" type="button">
          <Link href="/email-templates/editor">Next</Link>
        </button>
      </div>
      <AI
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default CreateTemplate;
