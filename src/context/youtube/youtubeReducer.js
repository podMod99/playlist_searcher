import { SEARCH_VIDEOS, SET_LOADING, CLEAR_VIDEOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_VIDEOS: {
      return {
        ...state,
        videos: action.payload,
        loading: false,
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
