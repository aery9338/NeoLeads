"use client";

import React, { useState, type JSX, type FormEvent } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addAccountDetails } from "@/store/actions/account-detail-action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function SetAccountDetails(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobRole, setJobRole] = useState("Project Manager");

function handleForm(e:FormEvent): void {
    e.preventDefault();
    if(firstName !== null && lastName !== null && jobRole !== null && firstName !== undefined && lastName !== undefined && jobRole !== undefined && firstName !== "" && lastName !== "" && jobRole !== ""){
      dispatch(addAccountDetails({firstName, lastName, jobRole}) as any);
      router.push("/signup/set-company-details")
    }else{
      toast.error("Please fill the details in correct format")
    }
  }

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <Link href="/" className="logo">
        <Image src={Logo} alt="Logo" />
      </Link>

      <h1 className="self-center auth-heading my-10">Account Details</h1>
      <div className="form-container">
        <form className="auth-form" onSubmit={handleForm}>
          <label htmlFor="first-name">
            First Name
            <input
              type="text"
              id="first-name"
              className="auth-input xl:h-10 mb-3 mt-[6px]"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>

          <label htmlFor="last-name">
            Last Name
            <input
              type="text"
              id="last-name"
              className="auth-input xl:h-10 mb-3 mt-[6px]"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>

          <label htmlFor="job-role">
            Job Role
            <select
              id="job-role"
              name="job-role"
              className="auth-input xl:h-10 mb-3 mt-[6px] hover:cursor-pointer"
              value={jobRole}
              onChange={(e) => {
                setJobRole(e.target.value);
              }}
            >
              <option value="Project Manager" className="hover:cursor-pointer">Project Manager</option>
              <option value="Marketing Manager" className="hover:cursor-pointer">Marketing Manager</option>
              <option value="Marketing Associate" className="hover:cursor-pointer">Marketing Associate</option>
              <option value="Executive Assistant" className="hover:cursor-pointer">Executive Assistant</option>
              <option value="Operations Manager" className="hover:cursor-pointer">Operations Manager</option>
            </select>
          </label>
            <button className="primarybtn xl:h-10 my-2 xl:my-8" type="submit">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}

export default SetAccountDetails;