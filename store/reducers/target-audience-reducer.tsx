import * as ActionTypes from "../types/target-audience-type";

interface TargetAudienceState {
  data: any[];
  loader: any;
  audienceProfile: any;
  status: any;
  id: string;
  sampleData: any[];
}

const targetAudience = (
  state: TargetAudienceState = { data: [], loader: false, status: "", audienceProfile: {}, id: "", sampleData: [] },
  action: any
): TargetAudienceState => {
  switch (action.type) {
    case ActionTypes.ADD_TARGET_AUDIENCE_REQUEST:
      return {
        ...state,
        loader: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.ADD_TARGET_AUDIENCE_SUCCESS:
      return {
        ...state,
        loader: false,
        status: "success",
        data: [...state.data, action.payload],
      };
    case ActionTypes.ADD_TARGET_AUDIENCE_ERROR:
      return {
        ...state,
        loader: false,
        status: "error",
        data: [...state.data],
      };
    case ActionTypes.DELETE_TARGET_AUDIENCE:
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
      };
    case ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_REQUEST:
      return {
        ...state,
        loader: true,
        status: "pending",
        audienceProfile: {},
      };
    case ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_SUCCESS:
      return {
        ...state,
        loader: false,
        status: "success",
        audienceProfile: action.payload,
      };
    case ActionTypes.UPDATE_TARGET_AUDIENCE_PROFILE_ERROR:
      return {
        ...state,
        loader: false,
        status: "error",
        audienceProfile: {},
      };
    case ActionTypes.UPDATE_TARGET_AUDIENCE_REQUEST:
      return {
        ...state,
        loader: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.UPDATE_TARGET_AUDIENCE_SUCCESS:
      return {
        ...state,
        loader: false,
        status: "success",
      };
    case ActionTypes.UPDATE_TARGET_AUDIENCE_ERROR:
      return {
        ...state,
        loader: false,
        status: "error",
        data: [...state.data],
      };
    case ActionTypes.SET_TARGET_AUDIENCE_REQUEST:
      return {
        ...state,
        loader: true,
        status: "pending",
        data: [],
      };
    case ActionTypes.SET_TARGET_AUDIENCE_SUCCESS:
      return {
        ...state,
        loader: false,
        status: "success",
        data: [...action.payload],
        audienceProfile: { ...state.audienceProfile },
      };
    case ActionTypes.SET_TARGET_AUDIENCE_ERROR:
      return {
        ...state,
        loader: false,
        status: "error",
        data: [],
      };
    case ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_REQUEST:
      return {
        ...state,
        loader: true,
        status: "pending",
        sampleData: [],
      };
    case ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_SUCCESS:
      console.log("action.payload.res",[...action.payload])
      return {
        ...state,
        loader: false,
        status: "success",
        sampleData: [...action.payload],
      };
    case ActionTypes.SET_SAMPLE_TARGET_AUDIENCE_ERROR:
      return {
        ...state,
        loader: false,
        status: "error",
        sampleData: [],
      };
    case ActionTypes.SET_AUDIENCE_PROFILE:
      return {
        ...state,
        audienceProfile: { ...state.audienceProfile, ...action.payload },
      };
    case ActionTypes.SET_TARGET_AUDIENCE_STATE:
      return {
        ...state,
        loader: false,
        status: "",
        id: "",
        audienceProfile: {},
      };
    case ActionTypes.SET_AUDIENCE_PROFILE_NULL:
      return {
        ...state,
        audienceProfile: {},
      };
    default:
      return state;
  }
};

export default targetAudience;
