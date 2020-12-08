import { SEARCH_VIDEOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        // loading:false
      };
  }
};
