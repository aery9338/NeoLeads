import * as ActionTypes from "../types/campaign-type";
import { createCampaigns, editCampaigns, fetchCampaigns } from "../../services/campaign-service";

interface AddCampaignRequest {
  type: typeof ActionTypes.ADD_CAMPAIGN_REQUEST;
}

interface AddCampaignSuccess {
  type: typeof ActionTypes.ADD_CAMPAIGN_SUCCESS;
  payload: any;
}

interface AddCampaignError {
  type: typeof ActionTypes.ADD_CAMPAIGN_ERROR;
}

interface SetCampaignRequest {
  type: typeof ActionTypes.SET_CAMPAIGN_REQUEST;
}

interface SetCampaignSuccess {
  type: typeof ActionTypes.SET_CAMPAIGN_SUCCESS;
  payload: any;
}

interface SetCampaignError {
  type: typeof ActionTypes.SET_CAMPAIGN_ERROR;
}

interface UpdateCampaignRequest {
  type: typeof ActionTypes.UPDATE_CAMPAIGN_REQUEST;
}

interface UpdateCampaignSuccess {
  type: typeof ActionTypes.UPDATE_CAMPAIGN_SUCCESS;
  payload: any;
}

interface UpdateCampaignError {
  type: typeof ActionTypes.UPDATE_CAMPAIGN_ERROR;
}

export const addCampaignRequest = (): AddCampaignRequest => ({
  type: ActionTypes.ADD_CAMPAIGN_REQUEST,
});

export const addCampaignSuccess = (data: any): AddCampaignSuccess => ({
  type: ActionTypes.ADD_CAMPAIGN_SUCCESS,
  payload: data,
});

export const addCampaignError = (): AddCampaignError => ({
  type: ActionTypes.ADD_CAMPAIGN_ERROR,
});

export const setCampaignRequest = (): SetCampaignRequest => ({
  type: ActionTypes.SET_CAMPAIGN_REQUEST,
});

export const setCampaignSuccess = (data: any): SetCampaignSuccess => ({
  type: ActionTypes.SET_CAMPAIGN_SUCCESS,
  payload: data,
});

export const setCampaignError = (): SetCampaignError => ({
  type: ActionTypes.SET_CAMPAIGN_ERROR,
});

export const updateCampaignRequest = (): UpdateCampaignRequest => ({
  type: ActionTypes.UPDATE_CAMPAIGN_REQUEST,
});

export const updateCampaignSuccess = (data: any): UpdateCampaignSuccess => ({
  type: ActionTypes.UPDATE_CAMPAIGN_SUCCESS,
  payload: data,
});

export const updateCampaignError = (): UpdateCampaignError => ({
  type: ActionTypes.UPDATE_CAMPAIGN_ERROR,
});

export const addCampaign = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addCampaignRequest());
    const res = await createCampaigns(data);
    dispatch(addCampaignSuccess(res));
  } catch (error) {
    dispatch(addCampaignError());
    console.error("Error - ", error);
  }
};

export const setCampaign = () => async (dispatch: any) => {
  try {
    dispatch(setCampaignRequest());
    const res = await fetchCampaigns();
    dispatch(setCampaignSuccess(res));
  } catch (error) {
    dispatch(setCampaignError());
    console.error("Error - ", error);
  }
};

export const updateCampaign = (id: string, data: any) => async (dispatch: any) => {
  try {
    dispatch(updateCampaignRequest());
    await editCampaigns(id, data);
    dispatch(updateCampaignSuccess({ id, data }));
  } catch (error) {
    dispatch(updateCampaignError());
    console.error("Error - ", error);
  }
};
