import { saveCompanyDetails } from "../../services/company-detail-service";
import * as ActionTypes from "../types/company-detail-type";

interface AddCompanyDetailsRequest {
  type: typeof ActionTypes.ADD_COMPANY_DETAILS_REQUEST;
}

interface AddCompanyDetailsSuccess {
  type: typeof ActionTypes.ADD_COMPANY_DETAILS_SUCCESS;
}

interface AddCompanyDetailsError {
  type: typeof ActionTypes.ADD_COMPANY_DETAILS_ERROR;
}

export const addCompanyDetailsRequest = (): AddCompanyDetailsRequest => ({
  type: ActionTypes.ADD_COMPANY_DETAILS_REQUEST,
});

export const addCompanyDetailsSuccess = (): AddCompanyDetailsSuccess => ({
  type: ActionTypes.ADD_COMPANY_DETAILS_SUCCESS,
});

export const addCompanyDetailsError = (): AddCompanyDetailsError => ({
  type: ActionTypes.ADD_COMPANY_DETAILS_ERROR,
});

export const addCompanyDetails = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addCompanyDetailsRequest());
    await saveCompanyDetails(data);
    dispatch(addCompanyDetailsSuccess());
  } catch (error) {
    dispatch(addCompanyDetailsError());
    console.error("Error - ", error);
  }
};
