import { SEARCH_VIDEOS, SET_LOADING, CLEAR_VIDEOS, GET_VIDEO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_VIDEOS: {
      return {
        ...state,
        videos: action.payload,
        loading: false,
      };
    }

    case GET_VIDEO: {
      return {
        ...state,
        video: action.payload,
      };
    }

    case CLEAR_VIDEOS: {
      return {
        ...state,
        videos: [],
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
