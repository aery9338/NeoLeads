import * as ActionTypes from "../types/company-detail-type";

interface CompanyDetailsState {
  status: string;
  loading: boolean;
}

const initialState: CompanyDetailsState = {
  status: "",
  loading: false,
};

const companyDetails = (
  state: CompanyDetailsState = initialState,
  action: any
): CompanyDetailsState => {
  switch (action.type) {
    case ActionTypes.ADD_COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
      };
    case ActionTypes.ADD_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
      };
    case ActionTypes.ADD_COMPANY_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
      };
    default:
      return state;
  }
};

export default companyDetails;
