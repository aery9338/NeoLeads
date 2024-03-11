"use client";

import React, { useEffect, type JSX, useState } from "react";
import Link from "next/link";
import TemplateItem from "@/components/template-item";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { setTemplateEmails } from "../../store/actions/template-email-action";

function EmailTemplates(): JSX.Element {
  const templateEmail = useSelector((state: any) => state.templateEmail.data ?? []);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(2);
  const constant = 10;

  useEffect(() => {
    dispatch(setTemplateEmails() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (templateEmail !== null) {
      setCount(Math.ceil(templateEmail.length / constant));
    }
  }, [templateEmail]);

  return (
    <div className="px-3 sm:px-16 md:px-24 py-14">
      <div className="flex justify-between">
        <h2 className="text-4xl">Templates</h2>
        <Link href="/email-templates/create-template">
          <button className="primarybtn w-32 md:w-48" type="button">
            Create Template
          </button>
        </Link>
      </div>
      <div>
        {templateEmail
          ?.slice((page - 1) * constant, page * constant)
          .map((element: any) => <TemplateItem key={element?.id} template={element} />)}
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
    </div>
  );
}

export default EmailTemplates;
