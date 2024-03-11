import {
  createTargetAudience,
  editTargetAudience,
  fetchSampleTargetAudiences,
  fetchTargetAudiences,
  getSpecificTargetAudience,
} from "../../services/target-audience-service";
import * as ActionTypes from "../types/target-audience-type";

interface AddTargetAudienceRequest {
  type: typeof ActionTypes.ADD_TARGET_AUDIENCE_REQUEST;
}

interface AddTargetAudienceSuccess {
  type: typeof ActionTypes.ADD_TARGET_AUDIENCE_SUCCESS;
  payload: any;
}

interface AddTargetAudienceError {
  type: typeof ActionTypes.ADD_TARGET_AUDIENCE_ERROR;
}

interface DeleteTargetAudienceAction {
  type: typeof ActionTypes.DELETE_TARGET_AUDIENCE;
  payload: any;
}

interface UpdateTargetAudienceRequest {
  type: typeof ActionTypes.UPDATE_TARGET_AUDIENCE_REQUEST;
}

interface UpdateTargetAudienceSuccess {
  type: typeof ActionTypes.UPDATE_TARGET_AUDIENCE_SUCCESS;
  payload: any;
}

interface UpdateTargetAudienceError {
  type: typeof ActionTypes.UPDATE_TARGET_AUDIENCE_ERROR;
}

interface UpdateTargetAudienceProfileRequest {
  type: typeof ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_REQUEST;
}

interface UpdateTargetAudienceProfileSuccess {
  type: typeof ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_SUCCESS;
  payload: any;
}

interface UpdateTargetAudienceProfileError {
  type: typeof ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_ERROR;
}

interface SetTargetAudienceRequest {
  type: typeof ActionTypes.SET_TARGET_AUDIENCE_REQUEST;
}

interface SetTargetAudienceSuccess {
  type: typeof ActionTypes.SET_TARGET_AUDIENCE_SUCCESS;
  payload: any;
}

interface SetTargetAudienceError {
  type: typeof ActionTypes.SET_TARGET_AUDIENCE_ERROR;
}
interface SetSampleTargetAudienceRequest {
  type: typeof ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_REQUEST;
}

interface SetSampleTargetAudienceSuccess {
  type: typeof ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_SUCCESS;
  payload: any;
}

interface SetSampleTargetAudienceError {
  type: typeof ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_ERROR;
}

interface SetAudienceProfileState {
  type: typeof ActionTypes.SET_AUDIENCE_PROFILE;
  payload: any;
}

interface SetTargetAudienceState {
  type: typeof ActionTypes.SET_TARGET_AUDIENCE_STATE;
}

interface SetAudienceProfileNull {
  type: typeof ActionTypes.SET_AUDIENCE_PROFILE_NULL;
}

export const addTargetAudienceRequest = (): AddTargetAudienceRequest => ({
  type: ActionTypes.ADD_TARGET_AUDIENCE_REQUEST,
});

export const addTargetAudienceSuccess = (data: any): AddTargetAudienceSuccess => ({
  type: ActionTypes.ADD_TARGET_AUDIENCE_SUCCESS,
  payload: data,
});

export const addTargetAudienceError = (): AddTargetAudienceError => ({
  type: ActionTypes.ADD_TARGET_AUDIENCE_ERROR,
});

export const deleteTargetAudience = (id: any): DeleteTargetAudienceAction => ({
  type: ActionTypes.DELETE_TARGET_AUDIENCE,
  payload: id,
});

export const setTargetAudienceRequest = (): SetTargetAudienceRequest => ({
  type: ActionTypes.SET_TARGET_AUDIENCE_REQUEST,
});
export const setTargetAudienceSuccess = (data: any): SetTargetAudienceSuccess => ({
  type: ActionTypes.SET_TARGET_AUDIENCE_SUCCESS,
  payload: data,
});
export const setTargetAudienceError = (): SetTargetAudienceError => ({
  type: ActionTypes.SET_TARGET_AUDIENCE_ERROR,
});

export const setSampleTargetAudienceRequest = (): SetSampleTargetAudienceRequest => ({
  type: ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_REQUEST,
});
export const setSampleTargetAudienceSuccess = (data: any): SetSampleTargetAudienceSuccess => ({
  type: ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_SUCCESS,
  payload: data,
});
export const setSampleTargetAudienceError = (): SetSampleTargetAudienceError => ({
  type: ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_ERROR,
});

export const setAudienceProfile = (data: any): SetAudienceProfileState => ({
  type: ActionTypes.SET_AUDIENCE_PROFILE,
  payload: data,
});

export const setTargetAudienceState = (): SetTargetAudienceState => ({
  type: ActionTypes.SET_TARGET_AUDIENCE_STATE,
});

export const updateTargetAudienceRequest = (): UpdateTargetAudienceRequest => ({
  type: ActionTypes.UPDATE_TARGET_AUDIENCE_REQUEST,
});

export const updateTargetAudienceSuccess = (data: any): UpdateTargetAudienceSuccess => ({
  type: ActionTypes.UPDATE_TARGET_AUDIENCE_SUCCESS,
  payload: data,
});

export const updateTargetAudienceError = (): UpdateTargetAudienceError => ({
  type: ActionTypes.UPDATE_TARGET_AUDIENCE_ERROR,
});

export const updateTargetAudienceProfileRequest = (): UpdateTargetAudienceProfileRequest => ({
  type: ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_REQUEST,
});

export const updateTargetAudienceProfileSuccess = (
  data: any
): UpdateTargetAudienceProfileSuccess => ({
  type: ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_SUCCESS,
  payload: data,
});

export const updateTargetAudienceProfileError = (): UpdateTargetAudienceProfileError => ({
  type: ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_ERROR,
});

export const setAudienceProfileNull = (): SetAudienceProfileNull => ({
  type: ActionTypes.SET_AUDIENCE_PROFILE_NULL,
});

export const addTargetAudience = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addTargetAudienceRequest());
    await createTargetAudience(data);
    dispatch(addTargetAudienceSuccess(data));
    dispatch(setTargetAudienceState());
  } catch (error) {
    dispatch(addTargetAudienceError());
    console.error("Error - ", error);
  }
};

export const setTargetAudience = () => async (dispatch: any) => {
  try {
    dispatch(setTargetAudienceRequest());
    const res = await fetchTargetAudiences();
    dispatch(setTargetAudienceSuccess(res));
    // dispatch(setTargetAudienceState());
  } catch (error) {
    dispatch(setTargetAudienceError());
    console.error("Error - ", error);
  }
};

export const setSampleTargetAudience = () => async (dispatch: any) => {
  try {
    dispatch(setSampleTargetAudienceRequest());
    const res = await fetchSampleTargetAudiences();
    dispatch(setSampleTargetAudienceSuccess(res));
    // dispatch(setTargetAudienceState());
  } catch (error) {
    dispatch(setSampleTargetAudienceError());
    console.error("Error - ", error);
  }
};

export const updateTargetAudience = (id: string, data: any) => async (dispatch: any) => {
  try {
    dispatch(updateTargetAudienceRequest());
    await editTargetAudience(id, data);
    dispatch(updateTargetAudienceSuccess(data));
    dispatch(setTargetAudienceState());
  } catch (error) {
    dispatch(updateTargetAudienceError());
    console.error("Error - ", error);
  }
};

export const updateTargetAudienceProfile = (id: string) => async (dispatch: any) => {
  try {
    dispatch(updateTargetAudienceProfileRequest());
    const res = await getSpecificTargetAudience(id);
    dispatch(updateTargetAudienceProfileSuccess(res));
  } catch (error) {
    dispatch(updateTargetAudienceProfileError());
    console.error("Error - ", error);
  }
};
