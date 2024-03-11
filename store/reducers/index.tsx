import { combineReducers } from "redux";
import targetAudience from "./target-audience-reducer";
import templateEmail from "./template-email-reducer";
import profileAccount from "./profile-account-reducer";
import companyDetails from "./company-detail-reducer";
import ads from "./ad-reducer";
import campaign from "./campaign-reducer";
import accountDetails from "./account-detail-reducer";

interface RootState {
  targetAudience: any;
  templateEmail: any;
  profileAccount: any;
  companyDetails: any;
  ads: any;
  campaign: any;
  accountDetails: any;
}

const rootReducer = combineReducers<RootState>({
  targetAudience,
  templateEmail,
  profileAccount,
  companyDetails,
  ads,
  campaign,
  accountDetails,
});

export default rootReducer;
