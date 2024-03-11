import { saveAccountDetails } from "../../services/account-detail-service";
import * as ActionTypes from "../types/account-detail-type";

interface AddAccountDetailsRequest {
  type: typeof ActionTypes.ADD_ACCOUNT_DETAILS_REQUEST;
}

interface AddAccountDetailsSuccess {
  type: typeof ActionTypes.ADD_ACCOUNT_DETAILS_SUCCESS;
}

interface AddAccountDetailsError {
  type: typeof ActionTypes.ADD_ACCOUNT_DETAILS_ERROR;
}

export const addAccountDetailsRequest = (): AddAccountDetailsRequest => ({
  type: ActionTypes.ADD_ACCOUNT_DETAILS_REQUEST,
});

export const addAccountDetailsSuccess = (): AddAccountDetailsSuccess => ({
  type: ActionTypes.ADD_ACCOUNT_DETAILS_SUCCESS,
});

export const addAccountDetailsError = (): AddAccountDetailsError => ({
  type: ActionTypes.ADD_ACCOUNT_DETAILS_ERROR,
});

export const addAccountDetails = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addAccountDetailsRequest());
    await saveAccountDetails(data);
    dispatch(addAccountDetailsSuccess());
  } catch (error) {
    dispatch(addAccountDetailsError());
    console.error("Error - ", error);
  }
};
