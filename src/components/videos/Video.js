import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import YoutubeContext from '../../context/youtube/youtubeContext';

const Video = ({ match }) => {
  const youtubeContext = useContext(YoutubeContext);

  const { getVideo, loading, video, videos } = youtubeContext;

  useEffect(() => {
    getVideo(match.params.id, videos);
    // eslint-disable-next-line
  }, []);
  //   console.log(snippet);
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          {/* <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          /> */}
          {/* <h1>{name}</h1> */}
          {/* <p>Location: {location}</p> */}
        </div>
        {/* <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div> */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: video }}></div>
      {/* <Repos repos={repos} /> */}
    </Fragment>
  );
};

export default Video;
