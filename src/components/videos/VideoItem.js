import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ video: { snippet } }) => {
  const id = snippet.resourceId.videoId;
  return (
    <div className='card text-center'>
      <img
        src={snippet.thumbnails.medium.url}
        alt=''
        // className='round-img'
        style={{ width: '100%' }}
      />
      <h3>{snippet.title}</h3>

      <div>
        <Link to={`/video/${id}`} className='btn btn-dark btn-sm my-1'>
          Watch
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default UserItem;
