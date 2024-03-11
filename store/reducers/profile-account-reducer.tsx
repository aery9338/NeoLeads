import * as ActionTypes from "../types/profile-account-type";

interface ProfileAccount {
  id: string;
}

interface ProfileAccountState {
  data: ProfileAccount;
  status: string;
  loading: boolean;
  id: string;
  imageUrl: string;
}

const initialState: ProfileAccountState = {
  data: {} as ProfileAccount,
  status: "",
  loading: false,
  id: "",
  imageUrl: "",
};

const profileAccount = (
  state: ProfileAccountState = initialState,
  action: any
): ProfileAccountState => {
  switch (action.type) {
    case ActionTypes.ADD_PROFILE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        id: "",
      };
    case ActionTypes.ADD_PROFILE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        id: action.payload,
      };
    case ActionTypes.ADD_PROFILE_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        id: "",
      };
    case ActionTypes.UPDATE_PROFILE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: {} as ProfileAccount,
      };
    case ActionTypes.UPDATE_PROFILE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: { ...action.payload } as ProfileAccount,
      };
    case ActionTypes.UPDATE_PROFILE_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: {} as ProfileAccount,
      };
    case ActionTypes.SET_PROFILE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: {} as ProfileAccount,
      };
    case ActionTypes.SET_PROFILE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: action.payload as ProfileAccount,
        imageUrl: action.payload.imageUrl,
      };
    case ActionTypes.SET_PROFILE_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: {} as ProfileAccount,
      };
    case ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        imageUrl: "",
      };
    case ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        imageUrl: action.payload,
      };
    case ActionTypes.SET_PROFILE_ACCOUNT_IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        imageUrl: "",
      };
    default:
      return state;
  }
};

export default profileAccount;
