import { useRouter } from "next/navigation";
import React, {
  useState,
  type JSX,
  type Dispatch,
  type SetStateAction,
  type FormEvent,
  useEffect,
} from "react";
import { connect } from "react-redux";
import { addTemplateEmail } from "../store/actions/template-email-action";

interface NewTemplateProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  addTemplateEmail: (data: { email: string; aspectRatio: any, template: any }) => Promise<void>;
  aspectRatio: any;
  id: string;
  template: any
}

function NewTemplate({ open, onClose, aspectRatio, id, ...props }: NewTemplateProps): JSX.Element {
  const [name, setName] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const router = useRouter();
  const defaultTemplate = {"counters":{"u_column":2,"u_row":2,"u_content_text":2,"u_content_heading":1},"body":{"id":"6iNBfA4Eqr","rows":[{"id":"wxpQZYPzxA","cells":[1],"columns":[{"id":"UEK5hygF2N","contents":[{"id":"ngE6Tl-VtO","type":"text","values":{"containerPadding":"10px","anchor":"","fontSize":"14px","textAlign":"left","lineHeight":"140%","linkStyle":{"inherit":true,"linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":true,"linkHoverUnderline":true},"hideDesktop":false,"displayCondition":null,"_meta":{"htmlID":"u_content_text_1","htmlClassNames":"u_content_text"},"selectable":true,"draggable":true,"duplicatable":true,"deletable":true,"hideable":true,"text":"<p style=\"line-height: 140%;\"></p>"}}],"values":{"backgroundColor":"","padding":"0px","border":{},"borderRadius":"0px","_meta":{"htmlID":"u_column_1","htmlClassNames":"u_column"}}}],"values":{"displayCondition":null,"columns":false,"backgroundColor":"","columnsBackgroundColor":"","backgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"custom","position":"center","customPosition":["50%","50%"]},"padding":"0px","anchor":"","hideDesktop":false,"_meta":{"htmlID":"u_row_1","htmlClassNames":"u_row"},"selectable":true,"draggable":true,"duplicatable":true,"deletable":true,"hideable":true}},{"id":"3YN5CI4Z3j","cells":[1],"columns":[{"id":"hR_bM8lTPz","contents":[],"values":{"backgroundColor":"","padding":"0px","border":{},"borderRadius":"0px","_meta":{"htmlID":"u_column_2","htmlClassNames":"u_column"}}}],"values":{"displayCondition":null,"columns":false,"backgroundColor":"","columnsBackgroundColor":"","backgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"custom","position":"center"},"padding":"0px","anchor":"","hideDesktop":false,"_meta":{"htmlID":"u_row_2","htmlClassNames":"u_row"},"selectable":true,"draggable":true,"duplicatable":true,"deletable":true,"hideable":true}}],"headers":[],"footers":[],"values":{"popupPosition":"center","popupWidth":"600px","popupHeight":"auto","borderRadius":"10px","contentAlign":"center","contentVerticalAlign":"center","contentWidth":"500px","fontFamily":{"label":"Arial","value":"arial,helvetica,sans-serif"},"textColor":"#000000","popupBackgroundColor":"#FFFFFF","popupBackgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"cover","position":"center"},"popupOverlay_backgroundColor":"rgba(0, 0, 0, 0.1)","popupCloseButton_position":"top-right","popupCloseButton_backgroundColor":"#DDDDDD","popupCloseButton_iconColor":"#000000","popupCloseButton_borderRadius":"0px","popupCloseButton_margin":"0px","popupCloseButton_action":{"name":"close_popup","attrs":{"onClick":"document.querySelector('.u-popup-container').style.display = 'none';"}},"backgroundColor":"#e7e7e7","preheaderText":"","linkStyle":{"body":true,"linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":true,"linkHoverUnderline":true},"backgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"custom","position":"center"},"_meta":{"htmlID":"u_body","htmlClassNames":"u_body"}}},"schemaVersion":16}


  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validation = emailPattern.test(name);
    if (validation) {
      const template = JSON.stringify(defaultTemplate)
      await props.addTemplateEmail({ email: name, aspectRatio, template });
    }
  }
  useEffect(() => {
    if (id !== "") {
      router.push(`/html-editor/${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center pt-10 items-start 
       transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
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
        className={`bg-white rounded-xl shadow p-6 transition-all 
           ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-5/6  sm:w-2/3 lg:w-1/2`}
      >
        <h1 className="text-center font-medium text-xl lg:text-2xl mb-6">Create new template</h1>
        <form
          onSubmit={(event) => {
            void handleSubmit(event);
          }}
        >
          <label htmlFor="template-name">
            <span className="text-lg lg:text-xl">Name</span>
            <input
              type="text"
              id="template-name"
              className="auth-input mb-1 mt-[6px]"
              value={name}
              onChange={(e) => {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                setEmailValidation(emailPattern.test(e.target.value));
                setName(e.target.value);
              }}
            />
            <div className="h-[10px]">
              <span
                className={`text-lg lg:text-sm text-red-500  ${
                  emailValidation ? "hidden" : "block"
                }`}
              >
                Please enter a valid email address
              </span>
            </div>
          </label>
          <div className="flex justify-end my-1 xl:my-2 gap-4">
            <button
              onClick={() => {
                onClose(false);
              }}
              className="secondarybtn xl:h-10 w-1/6"
              type="button"
            >
              Cancel
            </button>
            <button
              className={`${
                emailValidation ? "primarybtn" : "bg-[#63a0da]"
              }  xl:h-10 w-1/6 rounded`}
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any): any => ({
  id: state.templateEmail.id,
});
const mapDispatchToProps = {
  addTemplateEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTemplate);
