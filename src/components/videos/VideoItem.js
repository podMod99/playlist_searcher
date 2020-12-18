import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ video: { snippet } }) => {
  const id = snippet.resourceId.videoId;
  return (
    <div className='card text-center'>
      <img
        src={snippet.thumbnails.medium.url}
        alt=''
        style={{ width: '100%' }}
      />
      <h3>{snippet.title}</h3>

      <div>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          className='btn btn-dark btn-sm my-1'
        >
          Watch
        </a>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
