import * as ActionTypes from "../types/campaign-type";

interface CampaignState {
  data: any;
  status: string;
  loading: boolean;
  id: string;
}

const initialState: CampaignState = {
  data: [],
  status: "",
  loading: false,
  id: "",
};

const campaign = (state: CampaignState = initialState, action: any): CampaignState => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.ADD_CAMPAIGN_SUCCESS:
      localStorage.setItem("campaign",JSON.stringify(action.payload))
      return {
        ...state,
        loading: false,
        status: "success",
        id: action.payload.id,
        data: [...state.data, action.payload],
      };
    case ActionTypes.ADD_CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [...state.data],
      };
    case ActionTypes.SET_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [],
      };
    case ActionTypes.SET_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...action.payload],
      };
    case ActionTypes.SET_CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [],
      };
    case ActionTypes.UPDATE_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.UPDATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...state.data],
      };
    case ActionTypes.UPDATE_CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [],
      };
    default:
      return state;
  }
};

export default campaign;
