import * as ActionTypes from "../types/ad-type";
import { createAds, editAds, fetchAds } from "../../services/ad-service";

interface AddAdsRequest {
  type: typeof ActionTypes.ADD_ADS_REQUEST;
}

interface AddAdsSuccess {
  type: typeof ActionTypes.ADD_ADS_SUCCESS;
  payload: any;
}

interface AddAdsError {
  type: typeof ActionTypes.ADD_ADS_ERROR;
}

interface SetAdsRequest {
  type: typeof ActionTypes.SET_ADS_REQUEST;
}

interface SetAdsSuccess {
  type: typeof ActionTypes.SET_ADS_SUCCESS;
  payload: any;
}

interface SetAdsError {
  type: typeof ActionTypes.SET_ADS_ERROR;
}

interface UpdateAdsRequest {
  type: typeof ActionTypes.UPDATE_ADS_REQUEST;
}

interface UpdateAdsSuccess {
  type: typeof ActionTypes.UPDATE_ADS_SUCCESS;
  payload: any;
}

interface UpdateAdsError {
  type: typeof ActionTypes.UPDATE_ADS_ERROR;
}
interface SetSpecificAddTemplate {
  type: typeof ActionTypes.SET_SPECIFIC_ADD_TEMPLATE;
  payload: any;
}

export const addAdsRequest = (): AddAdsRequest => ({
  type: ActionTypes.ADD_ADS_REQUEST,
});

export const addAdsSuccess = (data: any): AddAdsSuccess => ({
  type: ActionTypes.ADD_ADS_SUCCESS,
  payload: data,
});

export const addAdsError = (): AddAdsError => ({
  type: ActionTypes.ADD_ADS_ERROR,
});

export const setAdsRequest = (): SetAdsRequest => ({
  type: ActionTypes.SET_ADS_REQUEST,
});

export const setAdsSuccess = (data: any): SetAdsSuccess => ({
  type: ActionTypes.SET_ADS_SUCCESS,
  payload: data,
});

export const setAdsError = (): SetAdsError => ({
  type: ActionTypes.SET_ADS_ERROR,
});

export const updateAdsRequest = (): UpdateAdsRequest => ({
  type: ActionTypes.UPDATE_ADS_REQUEST,
});

export const updateAdsSuccess = (data: any): UpdateAdsSuccess => ({
  type: ActionTypes.UPDATE_ADS_SUCCESS,
  payload: data,
});

export const updateAdsError = (): UpdateAdsError => ({
  type: ActionTypes.UPDATE_ADS_ERROR,
});

export const setSpecificAddTemplate = (data: any): SetSpecificAddTemplate => ({
  type: ActionTypes.SET_SPECIFIC_ADD_TEMPLATE,
  payload: data,
});

export const addAds = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addAdsRequest());
    await createAds(data);
    dispatch(addAdsSuccess(data));
  } catch (error) {
    dispatch(addAdsError());
    console.error("Error - ", error);
  }
};

export const setAds = () => async (dispatch: any) => {
  try {
    dispatch(setAdsRequest());
    const res = await fetchAds();
    dispatch(setAdsSuccess(res));
  } catch (error) {
    dispatch(setAdsError());
    console.error("Error - ", error);
  }
};

export const updateAds = (id: string, data: any) => async (dispatch: any) => {
  try {
    dispatch(updateAdsRequest());
    await editAds(id, data);
    dispatch(updateAdsSuccess({ id, data }));
  } catch (error) {
    dispatch(updateAdsError());
    console.error("Error - ", error);
  }
};
