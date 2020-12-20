import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>
        Youtube lacks the ability to search for videos by name within playlists.
        This app accesses your playlists via the Youtube API and displays the
        videos matching your search.
      </p>
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
