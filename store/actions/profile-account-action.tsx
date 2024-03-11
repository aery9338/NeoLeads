import * as ActionTypes from "../types/profile-account-type";
import {
  createProfileAccount,
  createProfileAccountImage,
  editProfileAccount,
  fetchSpecificProfile,
} from "../../services/profile-account-service";

interface AddProfileAccountRequest {
  type: typeof ActionTypes.ADD_PROFILE_ACCOUNT_REQUEST;
}

interface AddProfileAccountSuccess {
  type: typeof ActionTypes.ADD_PROFILE_ACCOUNT_SUCCESS;
  payload: any;
}

interface AddProfileAccountError {
  type: typeof ActionTypes.ADD_PROFILE_ACCOUNT_ERROR;
}

interface UpdateProfileAccountRequest {
  type: typeof ActionTypes.UPDATE_PROFILE_ACCOUNT_REQUEST;
  payload: any;
}

interface UpdateProfileAccountSuccess {
  type: typeof ActionTypes.UPDATE_PROFILE_ACCOUNT_SUCCESS;
  payload: any;
}

interface UpdateProfileAccountError {
  type: typeof ActionTypes.UPDATE_PROFILE_ACCOUNT_ERROR;
}

interface SetProfileAccountImageRequest {
  type: typeof ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_REQUEST;
}

interface SetProfileAccountImageSuccess {
  type: typeof ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_SUCCESS;
  payload: any;
}

interface SetProfileAccountImageError {
  type: typeof ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_ERROR;
}

interface SetProfileAccountRequest {
  type: typeof ActionTypes.SET_PROFILE_ACCOUNT_REQUEST;
}

interface SetProfileAccountSuccess {
  type: typeof ActionTypes.SET_PROFILE_ACCOUNT_SUCCESS;
  payload: any;
}

interface SetProfileAccountError {
  type: typeof ActionTypes.SET_PROFILE_ACCOUNT_ERROR;
}

export const addProfileAccountRequest = (): AddProfileAccountRequest => ({
  type: ActionTypes.ADD_PROFILE_ACCOUNT_REQUEST,
});

export const addProfileAccountSuccess = (data: any): AddProfileAccountSuccess => ({
  type: ActionTypes.ADD_PROFILE_ACCOUNT_SUCCESS,
  payload: data,
});

export const addProfileAccountError = (): AddProfileAccountError => ({
  type: ActionTypes.ADD_PROFILE_ACCOUNT_ERROR,
});

export const updateProfileAccountRequest = (data: any): UpdateProfileAccountRequest => ({
  type: ActionTypes.UPDATE_PROFILE_ACCOUNT_REQUEST,
  payload: data,
});
export const updateProfileAccountSuccess = (data: any): UpdateProfileAccountSuccess => ({
  type: ActionTypes.UPDATE_PROFILE_ACCOUNT_SUCCESS,
  payload: data,
});
export const updateProfileAccountError = (): UpdateProfileAccountError => ({
  type: ActionTypes.UPDATE_PROFILE_ACCOUNT_ERROR,
});

export const setProfileAccountImageRequest = (): SetProfileAccountImageRequest => ({
  type: ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_REQUEST,
});
export const setProfileAccountImageSuccess = (data: any): SetProfileAccountImageSuccess => ({
  type: ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_SUCCESS,
  payload: data,
});
export const setProfileAccountImageError = (): SetProfileAccountImageError => ({
  type: ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_ERROR,
});

export const setProfileAccountRequest = (): SetProfileAccountRequest => ({
  type: ActionTypes.SET_PROFILE_ACCOUNT_REQUEST,
});
export const setProfileAccountSuccess = (data: any): SetProfileAccountSuccess => ({
  type: ActionTypes.SET_PROFILE_ACCOUNT_SUCCESS,
  payload: data,
});
export const setProfileAccountError = (): SetProfileAccountError => ({
  type: ActionTypes.SET_PROFILE_ACCOUNT_ERROR,
});

export const addProfileAccount = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addProfileAccountRequest());
    const res = await createProfileAccount(data);
    dispatch(addProfileAccountSuccess(res));
  } catch (error) {
    dispatch(addProfileAccountError());
    console.error("Error - ", error);
  }
};

export const updateProfileAccount = (data: any) => async (dispatch: any) => {
  try {
    dispatch(updateProfileAccountRequest(data));
    await editProfileAccount(data);
    dispatch(updateProfileAccountSuccess(data));
  } catch (error) {
    dispatch(updateProfileAccountError());
    console.error("Error - ", error);
  }
};

export const setProfileAccountImage = (data: any) => async (dispatch: any) => {
  try {
    dispatch(setProfileAccountImageRequest());
    const res = await createProfileAccountImage(data);
    dispatch(setProfileAccountImageSuccess(res));
  } catch (error) {
    dispatch(setProfileAccountImageError());
    console.error("Error - ", error);
  }
};

export const setProfileAccount = (id: any) => async (dispatch: any) => {
  try {
    dispatch(setProfileAccountRequest());
    const res = await fetchSpecificProfile(id);
    dispatch(setProfileAccountSuccess(res));
  } catch (error) {
    dispatch(setProfileAccountError());
    console.error("Error - ", error);
  }
};
