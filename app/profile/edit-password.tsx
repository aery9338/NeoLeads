import React, {
  useState,
  type JSX,
  type Dispatch,
  type SetStateAction,
  type FormEvent,
} from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { updateProfileAccount } from "../../store/actions/profile-account-action";

interface EditPasswordProps {
  edit: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  updateProfileAccount: any;
}

function EditPassword({ edit, onClose, ...props }: EditPasswordProps): JSX.Element {
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpassword2, setNewpassword2] = useState("");

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    if (newpassword?.length < 6) {
      toast.error("New password should be at least 6 characters long");   
    }else if (newpassword === newpassword2 && newpassword?.length >= 6) {
      await props.updateProfileAccount({newpassword});
      setPassword("");
      setNewpassword("");
      setNewpassword2("");
      onClose(false);
      toast.success("Password edited successfully");
    } else {
      toast.error("New Password does not match");
    }
}

  const handleCancel = (e: any): void => {
    e.preventDefault();
    onClose(false);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${edit ? "visible bg-black/20" : "invisible"}`}
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
        className={`bg-white rounded-xl shadow px-14 py-7 transition-all 
              ${edit ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-5/6  sm:w-2/3 lg:w-1/2`}
      >
        <h1 className="text-center font-medium text-2xl mb-5">Edit Password</h1>

        <form>
          <label htmlFor="password">
            <span className="text-xl lg:text-2xl">Password</span>
            <input
              type="password"
              id="password"
              className="auth-input h-8 lg:h-10 mb-5 mt-[6px]"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <label htmlFor="new-password">
            <span className="text-xl lg:text-2xl">New Password</span>
            <input
              type="password"
              id="new-password"
              className="auth-input h-8 lg:h-10 mb-5 mt-[6px]"
              value={newpassword}
              onChange={(e) => {
                setNewpassword(e.target.value);
              }}
            />
          </label>

          <label htmlFor="confirm-password">
            <span className="text-xl lg:text-2xl">Confirm Password</span>
            <input
              type="password"
              id="confirm-password"
              className="auth-input h-8 lg:h-10 mb-5 mt-[6px]"
              value={newpassword2}
              onChange={(e) => {
                setNewpassword2(e.target.value);
              }}
            />
          </label>

          <div className="flex justify-around sm:justify-end mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="secondarybtn w-2/6 sm:w-1/6 h-8 lg:h-10 mx-1 lg:mx-4"
            >
              Cancel
            </button>
            <button
              onClick={(event) => {
                void handleSubmit(event);
              }}
              className="primarybtn w-2/6 sm:w-1/6 h-8 lg:h-10 mx-1 lg:mx-4"
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
  id: state.profileAccount.id,
});
const mapDispatchToProps = {
  updateProfileAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
