import {
  createTemplateEmail,
  fetchTemplateEmails,
  fetchSampleTemplates,
  editTemplateEmail,
  fetchSpecificTemplate,
} from "../../services/template-email-service";
import * as ActionTypes from "../types/template-email-type";

interface AddTemplateEmailRequest {
  type: typeof ActionTypes.ADD_TEMPLATE_EMAIL_REQUEST;
}

interface AddTemplateEmailSuccess {
  type: typeof ActionTypes.ADD_TEMPLATE_EMAIL_SUCCESS;
  payload: any;
}

interface AddTemplateEmailError {
  type: typeof ActionTypes.ADD_TEMPLATE_EMAIL_ERROR;
}

interface SetTemplateEmailRequest {
  type: typeof ActionTypes.SET_TEMPLATE_EMAIL_REQUEST;
}

interface SetTemplateEmailSuccess {
  type: typeof ActionTypes.SET_TEMPLATE_EMAIL_SUCCESS;
  payload: any;
}

interface SetTemplateEmailError {
  type: typeof ActionTypes.SET_TEMPLATE_EMAIL_ERROR;
}

interface SetSampleTemplateRequest {
  type: typeof ActionTypes.SET_SAMPLE_TEMPLATE_REQUEST;
}

interface SetSampleTemplateSuccess {
  type: typeof ActionTypes.SET_SAMPLE_TEMPLATE_SUCCESS;
  payload: any;
}

interface SetSampleTemplateError {
  type: typeof ActionTypes.SET_SAMPLE_TEMPLATE_ERROR;
}

interface SetTemplateRequest {
  type: typeof ActionTypes.SET_TEMPLATE_REQUEST;
}

interface SetTemplateSuccess {
  type: typeof ActionTypes.SET_TEMPLATE_SUCCESS;
  payload: any;
}

interface SetTemplateError {
  type: typeof ActionTypes.SET_TEMPLATE_ERROR;
}

interface UpdateTemplateEmailRequest {
  type: typeof ActionTypes.UPDATE_TEMPLATE_EMAIL_REQUEST;
}

interface UpdateTemplateEmailSuccess {
  type: typeof ActionTypes.UPDATE_TEMPLATE_EMAIL_SUCCESS;
}

interface UpdateTemplateEmailError {
  type: typeof ActionTypes.UPDATE_TEMPLATE_EMAIL_ERROR;
}

export const addTemplateEmailRequest = (): AddTemplateEmailRequest => ({
  type: ActionTypes.ADD_TEMPLATE_EMAIL_REQUEST,
});

export const addTemplateEmailSuccess = (data: any): AddTemplateEmailSuccess => ({
  type: ActionTypes.ADD_TEMPLATE_EMAIL_SUCCESS,
  payload: data,
});

export const addTemplateEmailError = (): AddTemplateEmailError => ({
  type: ActionTypes.ADD_TEMPLATE_EMAIL_ERROR,
});

export const setTemplateEmailRequest = (): SetTemplateEmailRequest => ({
  type: ActionTypes.SET_TEMPLATE_EMAIL_REQUEST,
});
export const setTemplateEmailSuccess = (data: any): SetTemplateEmailSuccess => ({
  type: ActionTypes.SET_TEMPLATE_EMAIL_SUCCESS,
  payload: data,
});
export const setTemplateEmailError = (): SetTemplateEmailError => ({
  type: ActionTypes.SET_TEMPLATE_EMAIL_ERROR,
});

export const setSampleTemplateRequest = (): SetSampleTemplateRequest => ({
  type: ActionTypes.SET_SAMPLE_TEMPLATE_REQUEST,
});
export const setSampleTemplateSuccess = (data: any): SetSampleTemplateSuccess => ({
  type: ActionTypes.SET_SAMPLE_TEMPLATE_SUCCESS,
  payload: data,
});
export const setSampleTemplateError = (): SetSampleTemplateError => ({
  type: ActionTypes.SET_SAMPLE_TEMPLATE_ERROR,
});

export const setTemplateRequest = (): SetTemplateRequest => ({
  type: ActionTypes.SET_TEMPLATE_REQUEST,
});
export const setTemplateSuccess = (data: any): SetTemplateSuccess => ({
  type: ActionTypes.SET_TEMPLATE_SUCCESS,
  payload: data,
});
export const setTemplateError = (): SetTemplateError => ({
  type: ActionTypes.SET_TEMPLATE_ERROR,
});

export const updateTemplateEmailRequest = (): UpdateTemplateEmailRequest => ({
  type: ActionTypes.UPDATE_TEMPLATE_EMAIL_REQUEST,
});
export const updateTemplateEmailSuccess = (): UpdateTemplateEmailSuccess => ({
  type: ActionTypes.UPDATE_TEMPLATE_EMAIL_SUCCESS,
});
export const updateTemplateEmailError = (): UpdateTemplateEmailError => ({
  type: ActionTypes.UPDATE_TEMPLATE_EMAIL_ERROR,
});

export const addTemplateEmail = (data: any) => async (dispatch: any) => {
  try {
    dispatch(addTemplateEmailRequest());
    const res = await createTemplateEmail(data);
    dispatch(addTemplateEmailSuccess(res));
  } catch (error) {
    dispatch(addTemplateEmailError());
    console.error("Error - ", error);
  }
};
export const setTemplateEmails = () => async (dispatch: any) => {
  try {
    dispatch(setTemplateEmailRequest());
    const res = await fetchTemplateEmails();
    dispatch(setTemplateEmailSuccess(res));
  } catch (error) {
    dispatch(setTemplateEmailError());
    console.error("Error - ", error);
  }
};
export const setSampleTemplates = () => async (dispatch: any) => {
  try {
    dispatch(setSampleTemplateRequest());
    const res = await fetchSampleTemplates();
    dispatch(setSampleTemplateSuccess(res));
  } catch (error) {
    dispatch(setSampleTemplateError());
    console.error("Error - ", error);
  }
};
export const setTemplate = (id: any) => async (dispatch: any) => {
  try {
    dispatch(setTemplateRequest());
    const res = await fetchSpecificTemplate(id);
    dispatch(setTemplateSuccess(res));
  } catch (error) {
    dispatch(setTemplateError());
    console.error("Error - ", error);
  }
};

export const updateTemplateEmail = (id: any, data: any) => async (dispatch: any) => {
  try {
    dispatch(updateTemplateEmailRequest());
    await editTemplateEmail(id, data);
    dispatch(updateTemplateEmailSuccess());
  } catch (error) {
    dispatch(updateTemplateEmailError());
    console.error("Error - ", error);
  }
};
