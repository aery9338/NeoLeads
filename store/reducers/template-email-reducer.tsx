import * as ActionTypes from "../types/template-email-type";

interface TemplateEmail {
  id: string;
}

interface TemplateEmailState {
  data: TemplateEmail[];
  status: string;
  loading: boolean;
  sampleTemplates: any;
  template: any;
  id: string;
}

const initialState: TemplateEmailState = {
  data: [],
  status: "",
  loading: false,
  sampleTemplates: [],
  template: "",
  id: "",
};

const templateEmail = (
  state: TemplateEmailState = initialState,
  action: any
): TemplateEmailState => {
  switch (action.type) {
    case ActionTypes.ADD_TEMPLATE_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
      };
    case ActionTypes.ADD_TEMPLATE_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        id: action.payload.id,
        data: [...state.data, action.payload.data],
      };
    case ActionTypes.ADD_TEMPLATE_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [...state.data],
      };
    case ActionTypes.SET_SAMPLE_TEMPLATE_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
        sampleTemplates: [],
      };
    case ActionTypes.SET_SAMPLE_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...state.data],
        sampleTemplates: [...action.payload],
      };
    case ActionTypes.SET_SAMPLE_TEMPLATE_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [...state.data],
        sampleTemplates: [],
      };
    case ActionTypes.SET_TEMPLATE_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [...state.data],
        template: null,
      };
    case ActionTypes.SET_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        data: [...state.data],
        template: action.payload,
      };
    case ActionTypes.SET_TEMPLATE_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [...state.data],
        template: null,
      };
    case ActionTypes.DELETE_TEMPLATE_EMAIL:
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
      };
    case ActionTypes.UPDATE_TEMPLATE_EMAIL:
      return {
        ...state,
      };
    case ActionTypes.SET_TEMPLATE_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
        data: [],
      };
    case ActionTypes.SET_TEMPLATE_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        id:"",
        data: [...action.payload],
      };
    case ActionTypes.SET_TEMPLATE_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
        data: [],
      };
    case ActionTypes.UPDATE_TEMPLATE_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        status: "pending",
      };
    case ActionTypes.UPDATE_TEMPLATE_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
      };
    case ActionTypes.UPDATE_TEMPLATE_EMAIL_ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
      };
    default:
      return state;
  }
};

export default templateEmail;
