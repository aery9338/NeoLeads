"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Emaileditor from "../email-editor";
import { setTemplate } from "../../../store/actions/template-email-action";

interface EditorProps {
  params: { id: string };
}
const Editor: React.FC<EditorProps> = ({ params }: EditorProps) => {
  const template = useSelector((state: any)=> state.templateEmail.template);
  const dispatch = useDispatch();
  const [design, setDesign] = useState();

  useEffect(() => {
    if (params?.id !== null && params?.id !== undefined) dispatch(setTemplate(params.id) as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(design !== null && design !== undefined && design !== "") setDesign(undefined); 
    if (template?.template !== null && template?.template !== undefined)  {
      try {
        const parsedTemplate = JSON.parse(template?.template);
        if (parsedTemplate !== null && typeof parsedTemplate === "object") {
          setDesign(parsedTemplate);
        }
      } catch (error) {
        console.error("Error parsing JSON in template data:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template]);

  return <div>{design !== null && design !== undefined && <Emaileditor design={design} id={params.id} />}</div>;
};

export default Editor;
