import React, { useRef, useState } from "react";
import EmailEditor, { type EditorRef } from "react-email-editor";
import { connect } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { updateTemplateEmail } from "../../store/actions/template-email-action";

interface EmaileditorProps {
  updateTemplateEmail: any;
  design: any;
  id: any;
}

const Emaileditor: React.FC<EmaileditorProps> = ({ design, id, ...props }: EmaileditorProps) => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);
  const router = useRouter();
  const onboardingUser = localStorage.getItem('user-onboarding')



  const saveDesign = (): void => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign(async (updatedDesign: any) => {
      const finalDesign = JSON.stringify(updatedDesign);
      await props.updateTemplateEmail(id, finalDesign);
      if(onboardingUser !== null && onboardingUser !== undefined){
        router.push("/ads/new-ads")
      }else{
        router.push("/email-templates");
      }
      toast.success("Design has been saved successfully");
    });
  };

  const togglePreview = (): void => {
    const unlayer = emailEditorRef.current?.editor;
    if (preview) {
      unlayer?.hidePreview();
      setPreview(false);
    } else {
      unlayer?.showPreview("desktop");
      setPreview(true);
    }
  };

  return (
    <div className="flex flex-col relative h-[100%]">
      <div className="flex bg-[#F2F2F2] p-2">
        <h1 className="flex-1 text-[2rem] mx-5 text-[#3672AB] font-bold">Email Editor</h1>
        <div className="flex p-1">
          <button
            type="button"
            className="px-5 ml-10 text-14 rounded bg-[#3672AB] text-white border-0 max-w-150 cursor-pointer"
            onClick={togglePreview}
          >
            {preview ? "Hide" : "Show"} Preview
          </button>
          <button
            type="button"
            className="px-5 ml-10 text-14 rounded bg-[#3672AB] text-white border-0 max-w-150 cursor-pointer"
            onClick={saveDesign}
          >
            Save Template
          </button>
          <button
            type="button"
            className="px-5 hidden ml-10 text-14 rounded bg-[#3672AB] text-white border-0 max-w-150 cursor-pointer"
          >
            Export HTML
          </button>
        </div>
      </div>

      <React.StrictMode>
        <EmailEditor
          ref={emailEditorRef}
          style={{ height: "86vh" }}
          onLoad={(event) => {
            if (design !== null && design !== undefined) event.loadDesign(design);
          }}
        />
      </React.StrictMode>
    </div>
  );
};

const mapDispatchToProps = {
  updateTemplateEmail,
};

export default connect(null, mapDispatchToProps)(Emaileditor);
