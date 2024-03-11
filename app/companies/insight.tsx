"use client";

import React, { useState, type JSX } from "react";
import Technologies from "@/public/img/companies/technologies.svg";
import Technologies2 from "@/public/img/companies/technologies2.svg";
import Funding from "@/public/img/companies/funding.svg";
import Funding2 from "@/public/img/companies/funding2.svg";
import Job from "@/public/img/companies/job.svg";
import Job2 from "@/public/img/companies/job2.svg";
import News from "@/public/img/companies/news.svg";
import News2 from "@/public/img/companies/news2.svg";
import Employee from "@/public/img/companies/employee.svg";
import Employee2 from "@/public/img/companies/employee2.svg";
import Tab from "./tab";

export default function Insight(): JSX.Element {
  const [activeTab, setActiveTab] = useState("technologies");

  return (
    <div className="rounded-2xl shadow-card">
      <h1 className="companies-h1 py-9 px-8 sm:px-16 border-b">Insights</h1>
      <div className="flex border border-black/70 rounded-b-xl">
        <div className="w-1/2 md:w-1/4">
          <Tab
            tabName="Technologies"
            img={Technologies}
            imgActive={Technologies2}
            isActive={activeTab === "technologies"}
            setActiveTab={() => {
              setActiveTab("technologies");
            }}
          />
          <Tab
            tabName="Funding Rounds"
            img={Funding}
            imgActive={Funding2}
            isActive={activeTab === "funding"}
            setActiveTab={() => {
              setActiveTab("funding");
            }}
          />
          <Tab
            tabName="Job Postings"
            img={Job}
            imgActive={Job2}
            isActive={activeTab === "job"}
            setActiveTab={() => {
              setActiveTab("job");
            }}
          />
          <Tab
            tabName="News"
            img={News}
            imgActive={News2}
            isActive={activeTab === "news"}
            setActiveTab={() => {
              setActiveTab("news");
            }}
          />
          <Tab
            tabName="Employee Trend"
            img={Employee}
            imgActive={Employee2}
            isActive={activeTab === "employee"}
            setActiveTab={() => {
              setActiveTab("employee");
            }}
          />
        </div>

        <div className="w-1/2 md:w-3/4">
          <div
            className={`flex flex-col h-full ${
              activeTab === "technologies" || activeTab === "funding" ? "flex" : "hidden"
            }`}
          >
            <div className="companiesTab h-1/5 py-4">
              <h1 className="companiesTabText">Technology Insight Settings</h1>
            </div>
            <div className="companiesTab py-1 h-1/5">
              <h1 className="companiesTabText">AI</h1>
              <h6 className="text-[#616162]">Other</h6>
            </div>
            <div className="companiesTab py-1 h-1/5">
              <h1 className="companiesTabText">CloudFare hosting</h1>
              <h6 className="text-[#616162]">Hosting</h6>
            </div>
            <div className="companiesTab py-1 h-1/5">
              <h1 className="companiesTabText">CloudFare DNS</h1>
              <h6 className="text-[#616162]">Other</h6>
            </div>
            <div className="companiesTab py-1 h-1/5">
              <h1 className="companiesTabText">Facbook Custom Audience</h1>
              <h6 className="text-[#616162]">Other</h6>
            </div>
          </div>

          <div
            className={`h-full flex flex-col justify-center items-center ${
              activeTab === "job" ? "flex" : "hidden"
            }`}
          >
            <h1 className="companies-h1 text-[#3672AB] font-normal mb-2">We are not Hiring</h1>
            <h6 className="text-xl font-medium px-4 text-center">
              We are working on expanding the data for this company.
            </h6>
          </div>

          <div className={`flex flex-col h-full ${activeTab === "news" ? "flex" : "hidden"}`}>
            <div className="companiesTab py-1 h-1/5">
              <h1 className="companiesTabText">Company Launches iQuant</h1>
              <div className="flex justify-between text-[#616162]">
                <h6>BusinessWire.india</h6>
                <h6>Launches</h6>
                <h6>July 31, 2018</h6>
              </div>
            </div>
            <div className="companiesTab py-1 h-1/5">
              <h1 className="companiesTabText">CloudFare Launches DNS</h1>
              <div className="flex justify-between text-[#616162]">
                <h6>BusinessWire.india</h6>
                <h6>Launches</h6>
                <h6>July 31, 2018</h6>
              </div>
            </div>
          </div>

          <div className={`flex flex-col h-full ${activeTab === "employee" ? "flex" : "hidden"}`}>
            <div className="px-8 py-1 h-1/5">
              <h1 className="companiesTabText">Total Count</h1>
            </div>
            <div className="px-8 h-1/5 flex justify-between">
              <div>
                <h6>-8.2%</h6>
                <h6 className="text-[#616162]">6 Month Growth</h6>
              </div>
              <div>
                <h6>-14.3%</h6>
                <h6 className="text-[#616162]">1 Year Growth</h6>
              </div>
              <div>
                <h6>-2.0%</h6>
                <h6 className="text-[#616162]">2 Year Growth</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
