import React, { useState, type JSX, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
// import { sampleTargetAudience } from "@/app/dummy-data/dummy-data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setTargetAudience, setAudienceProfileNull, setSampleTargetAudience } from "../store/actions/target-audience-action";

interface AudienceTableProps {
  targetAudience: any;
  sampleTargetAudience: any;
  audienceProfile: any;
  setTargetAudience: any;
  setAudienceProfileNull: any;
  setSampleTargetAudience: any;
  params: { id: string };
}

function AudienceTable({ audienceProfile, params, sampleTargetAudience, ...props }: AudienceTableProps): JSX.Element {
  const [targetAudienceTable, setTargetAudienceTable] = useState<any[]>(sampleTargetAudience);
  const tableHeadings = ["Name", "Title", "Company", "Detail", "Contact Loc"];
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const constant = 30;

  useEffect(() => {
    props.setTargetAudience();
    props.setSampleTargetAudience();
    if (params?.id === null || params?.id === undefined || params?.id === "") props.setAudienceProfileNull();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTargetAudienceTable = (filteredAudienceProfile: any): void => {
    const jobTitle = filteredAudienceProfile?.job;
    const companies = filteredAudienceProfile?.company;
    const detail = filteredAudienceProfile?.technology;
    const contactLoc = filteredAudienceProfile?.location;

    let filteredTableState: any[] = [];
    let filteredJobs: any[] = [];
    let filteredCompanies: any[] = [];
    let filteredDetails: any[] = [];
    let filteredContactLoc: any[] = [];

    if (jobTitle?.value?.length !== 0) {
      const filteredTable = sampleTargetAudience.filter((e: any) => {
        const jobString = String(e.job).trim().toLowerCase();
        return jobTitle?.some((job: any) => jobString.includes(String(job).trim().toLowerCase()));
      });
      filteredJobs = [...filteredTable];
    }

    if (companies?.value?.length !== 0) {
      const filteredTable = sampleTargetAudience.filter((e: any) => {
        const companyString = String(e.company).trim().toLowerCase();
        return companies?.some((company: any) =>
          companyString.includes(String(company).trim().toLowerCase())
        );
      });
      filteredCompanies = [...filteredTable];
    }

    if (detail?.value?.length !== 0) {
      const filteredTable = sampleTargetAudience.filter((e: any) => {
        const technologyString = String(e.technology).trim().toLowerCase();
        return detail?.some((text: any) =>
          technologyString.includes(String(text).trim().toLowerCase())
        );
      });
      filteredDetails = [...filteredTable];
    }

    if (contactLoc?.value?.length !== 0) {
      const filteredTable = sampleTargetAudience.filter((e: any) => {
        const locationString = String(e.location).trim().toLowerCase();
        return contactLoc?.some((loc: any) =>
          locationString.includes(String(loc).trim().toLowerCase())
        );
      });
      filteredContactLoc = [...filteredTable];
    }

    filteredTableState = [
      ...filteredJobs,
      ...filteredCompanies,
      ...filteredDetails,
      ...filteredContactLoc,
    ];
    const uniqueFilteredTableState = Array.from(
      new Set(filteredTableState.map((item) => item.id))
    ).map((id: any) => filteredTableState.find((item) => item.id === id));

    setTargetAudienceTable(uniqueFilteredTableState);
  };

  useEffect(() => {
    const { audienceName, ...newAudienceProfile } = audienceProfile;
    const staticAudienceProfile = { ...newAudienceProfile };
    if (Object.values(staticAudienceProfile ?? {})?.flat()?.length !== 0) {
      filteredTargetAudienceTable(staticAudienceProfile);
    } else if (sampleTargetAudience?.length > 0)
      setTargetAudienceTable(sampleTargetAudience);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audienceProfile, sampleTargetAudience]);

  useEffect(() => {
    if (targetAudienceTable !== null) {
      setCount(Math.ceil(targetAudienceTable.length / constant));
    }
  }, [targetAudienceTable]);

  return (
    <>
      <div className="mt-9 mb-3 !min-h-[48vh] !max-h-[18%] overflow-y-scroll">
        <table className="bg-white w-full">
          <thead>
            <tr className="text-lg sm:text-xl">
              {tableHeadings.map((heading) => (
                <th key={heading} className="table-border py-2 text-left px-1 md:px-4">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {targetAudienceTable?.slice((page - 1) * constant, page * constant).map((element) => (
              <tr
                key={element.id}
                className="h-14 xl:text-lg font-light hover:bg-gray-100 hover:cursor-pointer"
              >
                <td className="table-border px-1 md:px-4">
                  <Link href="/pages/person-details">{element?.audienceName}</Link>
                </td>
                <td className="table-border px-1 md:px-4">
                  {element?.job?.map((e: string) => <span className="m-1">{e}</span>)}
                </td>
                <td className="table-border px-1 md:px-4">
                  <Link href="/companies">
                    {element?.company?.map((e: string) => <span className="m-1">{e}</span>)}
                  </Link>
                </td>
                <td className="table-border px-1 md:px-4">
                  {element?.technology?.map((e: string) => <span className="m-1">{e}</span>)}
                </td>
                <td className="table-border px-1 md:px-4">
                  {element?.location?.map((e: string) => <span className="m-1">{e}</span>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {count !== 0 && (
        <Stack>
          <Pagination
            onChange={(_, num) => {
              setPage(num);
            }}
            sx={{ margin: "auto" }}
            count={count}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      )}
    </>
  );
}

const mapStateToProps = (state: any): any => ({
  targetAudience: state.targetAudience.data,
  audienceProfile: state.targetAudience.audienceProfile,
  sampleTargetAudience: state.targetAudience.sampleData,
});

const mapDispatchToProps = {
  setTargetAudience,
  setAudienceProfileNull,
  setSampleTargetAudience,
};

export default connect(mapStateToProps, mapDispatchToProps)(AudienceTable);
