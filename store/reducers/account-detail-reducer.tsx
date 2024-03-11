import * as ActionTypes from "../types/account-detail-type";

interface AccountDetailsState {
  status: string;
  loading: boolean;
}

const initialState: AccountDetailsState = {
  status: "",
  loading: false,
};

const accountDetails = (
  state: AccountDetailsState = initialState,
  action: any
): AccountDetailsState => {
  switch (action.type) {
    case ActionTypes.ADD_ACCOUNT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
      };
    case ActionTypes.ADD_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
      };
    case ActionTypes.ADD_ACCOUNT_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
      };
    default:
      return state;
  }
};

export default accountDetails;
