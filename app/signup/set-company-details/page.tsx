"use client";

import React, { useState, type JSX, type FormEvent } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addCompanyDetails } from "../../../store/actions/company-detail-action";

function SetCompanyDetails(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [industry, setIndustry] = useState("Advertising");
  const [employees, setEmployees] = useState("Just Me");

  async function handleForm(e: FormEvent): Promise<void> {
    e.preventDefault();
    if(companyName === null || companyName === undefined || companyName === ""){
      toast.error("Please fill the details correctly")
      
    }else if(companyWebsite === null || companyWebsite === undefined || companyWebsite === ""){
      toast.error("Please fill the details correctly")
      
    }else if(industry === null || industry === undefined || industry === ""){
      toast.error("Please fill the details correctly")
       
    }else if(employees === null || employees === undefined || employees === ""){
      toast.error("Please fill the details correctly")
       
    }else{
    await dispatch(addCompanyDetails({ companyName, companyWebsite, industry, employees }) as any);
    setCompanyName("");
    setCompanyWebsite("");
    setIndustry("");
    setEmployees("");
    toast.success("Company details saved successfully");
    router.push("/campaign")
    }
  }

  return (
    <div className="min-h-screen h-fit flex flex-col px-5 sm:px-8">
      <Link href="/" className="logo">
        <Image src={Logo} alt="Logo" />
      </Link>

      <h1 className="self-center auth-heading my-10">Company Details</h1>
      <div className="form-container">
        <form
          className="auth-form"
          onSubmit={(formEvent) => {
            void handleForm(formEvent);
          }}
        >
          <label htmlFor="company-name">
            Company Name
            <input
              type="text"
              id="company-name"
              className="auth-input xl:h-10 mb-3 mt-[6px]"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          </label>

          <label htmlFor="company-website">
            Company Website
            <input
              type="text"
              id="company-website"
              className="auth-input xl:h-10 mb-3 mt-[6px]"
              value={companyWebsite}
              onChange={(e) => {
                setCompanyWebsite(e.target.value);
              }}
            />
          </label>

          <label htmlFor="industry">
            Industry
            <select
              id="industry"
              className="auth-input xl:h-10 mb-6 mt-[6px] hover:cursor-pointer"
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
              }}
            >
              <option className="hover:cursor-pointer">Advertising</option>
              <option className="hover:cursor-pointer">Agriculture</option>
              <option className="hover:cursor-pointer">Healthcare</option>
              <option className="hover:cursor-pointer">Finance</option>
              <option className="hover:cursor-pointer">IT</option>
            </select>
          </label>

          <label htmlFor="number-of-employees">
            Number of Employees
            <div className="flex flex-wrap justify-between gap-4 my-4">
              {[
                "Just Me",
                "2-5",
                "6-10",
                "11-25",
                "26-50",
                "51-200",
                "201-1000",
                "1001-10000",
                "10001-More",
              ].map((item: any, index: any) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  className="w-1/4 xl:h-10 border border-black/40 rounded-md text-center py-1 text-lg hover:cursor-pointer"
                  onClick={() => {
                    setEmployees(item);
                  }}
                  onKeyDown={() => {
                    setEmployees(item);
                  }}
                >
                  <input
                    type="radio"
                    id={`employee-${item}`}
                    className="hover:cursor-pointer mr-1"
                    value={employees}
                    name="employees"
                    checked={employees === item}
                    onChange={() => {
                      setEmployees(item);
                    }}
                  />
                  <label htmlFor={`employee-${item}`}>{item}</label>
                </div>
              ))}
            </div>
          </label>

          <button className="primarybtn xl:h-11 my-2 xl:my-8" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetCompanyDetails;
