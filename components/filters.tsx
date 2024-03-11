"use client";

import React, { useState, type JSX } from "react";
import { connect } from "react-redux";
import FilterItem from "./filter-item";
import {
  jobTitle,
  companies,
  location,
  employees,
  industry,
  technology,
  revenue,
  funding,
} from "../services/mockdata";
import { setAudienceProfile } from "../store/actions/target-audience-action";

interface Filter {
  title: string;
  value: string;
  filterOptions: string[];
}

function Filters({ targetAudienceProfile, audienceProfile, ...props }: any): JSX.Element {
  const [expandedFilter, setExpandedFilter] = useState("job");

  const filters: Filter[] = [
    { title: "Job Title", value: "job", filterOptions: jobTitle },
    { title: "Company", value: "company", filterOptions: companies },
    { title: "Location", value: "location", filterOptions: location },
    { title: "Employee", value: "employee", filterOptions: employees },
    { title: "Industry", value: "industry", filterOptions: industry },
    { title: "Technology", value: "technology", filterOptions: technology },
    { title: "Revenue", value: "revenue", filterOptions: revenue },
    { title: "Funding", value: "funding", filterOptions: funding },
  ];

  return (
    <div className="mt-9 mb-3 bg-white rounded-md h-80 py-4 border border-black/30 hidden sm:flex sm:flex-col">
      <h1 className="font-[450] text-[22px] my-1 mx-4">Select Filters</h1>

      <div className="text-lg leading-[16.56px] overflow-y-auto">
        {filters.map(({ title, value, filterOptions }) => (
          <FilterItem
            key={value}
            filter={title}
            filterOptions={filterOptions}
            data={
              typeof audienceProfile[value] === "string"
                ? [audienceProfile[value]]
                : audienceProfile[value] ?? []
            }
            isExpanded={expandedFilter === value}
            setIsExpanded={() => {
              setExpandedFilter(expandedFilter === value ? " " : value);
            }}
            params={{ id: "" }}
            onOptionChange={(selectedValue) =>
              props.setAudienceProfile({ ...targetAudienceProfile, [value]: selectedValue })
            }
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any): any => ({
  targetAudienceProfile: state.targetAudienceProfile,
  audienceProfile: state.targetAudience.audienceProfile,
});

const mapDispatchToProps = {
  setAudienceProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
