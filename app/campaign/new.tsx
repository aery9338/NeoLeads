import React, {
  useState,
  type JSX,
  type Dispatch,
  type SetStateAction,
  type FormEvent,
} from "react";
import awareness from "@/public/img/campaign/awareness.svg";
import engagement from "@/public/img/campaign/engagement.svg";
import trafficSign from "@/public/img/campaign/trafficSign.svg";
import leads from "@/public/img/campaign/leads.svg";
import app from "@/public/img/campaign/app.svg";
import sales from "@/public/img/campaign/sales.svg";
import Image from "next/image";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addCampaign } from "../../store/actions/campaign-action";

interface NewCampaignProps {
  newcampaign: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  addCampaign: any;
}

function NewCampaign({ newcampaign, onClose, ...props }: NewCampaignProps): JSX.Element {
  const router = useRouter();
  const [buyingType, setBuyingType] = useState("Abc");
  const [objective, setObjective] = useState("");

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (buyingType !== "" && objective !== "") {
      props.addCampaign({ buyingType, objective });
      onClose(true);
      // toast.success("Campaign created successfully");
      router.push(`/campaign/new-campaign`)
    } else {
      toast.error("Please fill the details correctly");
    }
  }

  const handleCancel = (e: any): void => {
    e.preventDefault();
    onClose(true);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${newcampaign ? "visible bg-black/20" : "invisible"}`}
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
        className={`bg-white rounded-xl shadow px-14 py-7 transition-all ${
          newcampaign ? "scale-100 opacity-100" : "scale-125 opacity-0"
        } w-5/6  sm:w-2/3 lg:w-1/2`}
      >
        <h1 className="font-medium  text-[#3672AB] text-xl mb-5">Create New Campaign</h1>

        <form>
          <label htmlFor="buying-type">
            <span className="text-lg font-semibold">Buying Type:</span>
            <select
              id="buying-type"
              name="buying-type"
              className="auth-input xl:h-10 mb-6 mt-[6px] hover:cursor-pointer"
              value={buyingType}
              onChange={(e) => {
                setBuyingType(e.target.value);
              }}
            >
              <option value="Abc" className="hover:cursor-pointer">Abc</option>
              <option value="Xyz" className="hover:cursor-pointer">Xyz</option>
            </select>
          </label>

          <label htmlFor="select-payment-method">
            <span className="text-lg font-semibold">Choose a Campaign Objective</span>
            <div>
              {[
                ["Awareness", awareness],
                ["Traffic", trafficSign],
                ["Engagement", engagement],
                ["Leads", leads],
                ["App Promotion", app],
                ["Sales", sales],
              ].map(([item, image], index: any) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  className="flex gap-5 py-1 hover:cursor-pointer"
                  onClick={() => {
                    setObjective(item);
                  }}
                  onKeyDown={() => {
                    setObjective(item);
                  }}
                >
                  <input
                    type="radio"
                    id={`objective-${item}`}
                    className="hover:cursor-pointer mr-1 h-6 w-6 mt-3"
                    value={objective}
                    name="objective"
                    checked={objective === item}
                    onChange={() => {
                      setObjective(item);
                    }}
                  />

                  <Image src={image} alt={item} className="h-12" />
                  <label htmlFor={`objective-${item}`} className="mt-3 font-medium text-lg">
                    {item}
                  </label>
                </div>
              ))}
            </div>
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
              onClick={handleSubmit}
              className="primarybtn w-2/6 sm:w-1/6 h-8 lg:h-10 mx-1 lg:mx-4"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addCampaign,
};

export default connect(null, mapDispatchToProps)(NewCampaign);
