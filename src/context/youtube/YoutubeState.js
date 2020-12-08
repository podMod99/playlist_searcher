import React, { useReducer } from 'react';
import axios from 'axios';
import YoutubeContext from './youtubeContext';
import YoutubeReducer from './youtubeReducer';
import { SEARCH_VIDEOS, SET_LOADING, CLEAR_VIDEOS, GET_VIDEO } from '../types';

// for production, refactor so that key not in source code (like in github project)
const key = 'AIzaSyALjs5qudeqiHKmAQx5vNN8Br7cFKtEJcE';
// playlist ID hardcoded for now
const playlistId = 'PLgQwti-5aPoErdG3X_f1fEcCVnSpXf6zU';

const YoutubeState = (props) => {
  const initialState = {
    videos: [],
  };

  const [state, dispatch] = useReducer(YoutubeReducer, initialState);

  // Search videos
  const searchVideos = async (text) => {
    // add set loading

    // find number of pages
    let res = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails&key=' +
        key +
        '&maxResults=50&playlistId=' +
        playlistId
    );

    const numberOfPages = Math.ceil(
      res.data.pageInfo.totalResults / res.data.pageInfo.resultsPerPage
    );

    // for every page of results, loop through and add every video to an array
    const listOfVideos = [];

    if (numberOfPages === 1) {
      res.data.items.forEach((video) => {
        listOfVideos.push(video);
      });
    } else {
      let i = 0;
      let npt = '';

      while (i < numberOfPages && 'nextPageToken' in res.data) {
        i++;

        let res = await axios.get(
          'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails&key=' +
            key +
            '&maxResults=50&playlistId=' +
            playlistId +
            '&pageToken=' +
            npt
        );
        npt = res.data.nextPageToken;

        res.data.items.forEach((video) => {
          listOfVideos.push(video);
        });
      }
    }

    // add all videos in playlist with matching words in the title to an array
    const listOfMatches = [];

    listOfVideos.forEach((item, i) => {
      const title = item.snippet.title.split(' ');
      for (var i = 0; i < title.length; i++) {
        if (
          text.toUpperCase().split(' ').includes(title[i].toUpperCase()) ===
          false
        ) {
          continue;
        } else {
          listOfMatches.push(item);
        }
      }
    });

    // when you search with multiple words eg 'music video', it will add any videos with 'music' and 'video' to the listOfMatches twice (once for each matched word). Remove duplicates
    const removeDuplicates = listOfMatches.filter((element, index) => {
      return listOfMatches.indexOf(element) === index;
    });

    console.log(listOfMatches);
    console.log(removeDuplicates);

    dispatch({
      type: SEARCH_VIDEOS,
      payload: removeDuplicates,
    });
  };

  return (
    <YoutubeContext.Provider
      value={{
        videos: state.videos,
        searchVideos,
      }}
    >
      {props.children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeState;