import * as ActionTypes from "../types/ad-type";

interface AdsState {
  data: any;
  status: string;
  loading: boolean;
  adTemplate: any;
}

const initialState: AdsState = {
  data: [],
  status: "",
  loading: false,
  adTemplate: "",
};

const ads = (state: AdsState = initialState, action: any): AdsState => {
  switch (action.type) {
    case ActionTypes.ADD_ADS_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.ADD_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...state.data, action.payload],
      };
    case ActionTypes.ADD_ADS_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [...state.data],
      };
    case ActionTypes.SET_ADS_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [],
      };
    case ActionTypes.SET_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...action.payload],
      };
    case ActionTypes.SET_ADS_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [],
      };
    case ActionTypes.UPDATE_ADS_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.UPDATE_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...state.data],
      };
    case ActionTypes.UPDATE_ADS_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [],
      };
    case ActionTypes.SET_SPECIFIC_ADD_TEMPLATE:
      return {
        ...state,
        adTemplate : action.payload
      };
    default:
      return state;
  }
};

export default ads;
