import React, { type JSX, type Dispatch, type SetStateAction } from "react";

interface DeleteProps {
  deleteDomain: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function Delete({ deleteDomain, onClose }: DeleteProps): JSX.Element {
  function handleSubmit(): void {}

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${deleteDomain ? "visible bg-black/20" : "invisible"}`}
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
        className={`bg-white rounded-xl shadow px-14 py-7 transition-all w-5/6  sm:w-2/3 lg:w-1/2
              ${deleteDomain ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <h1 className="text-center font-medium text-2xl mb-5">Delete a Domain</h1>

        <form onSubmit={handleSubmit}>
          <p>Active templates and scheduled campaigns should be updated with another sender.</p>
          <p>Are you sure you want to delete the domain ? </p>

          <div className="flex justify-around sm:justify-end mt-6">
            <button className="secondarybtn w-2/6 sm:w-1/6 h-8 lg:h-10 mx-1 lg:mx-4" type="submit">
              Delete
            </button>
            <button className="primarybtn w-2/6 sm:w-1/6 h-8 lg:h-10 mx-1 lg:mx-4" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
