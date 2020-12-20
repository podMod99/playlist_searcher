import React, { useState, useContext } from 'react';
import YoutubeContext from '../../context/youtube/youtubeContext';
// import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const youtubeContext = useContext(YoutubeContext);
  //   const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // if (text === '') {
    // alertContext.setAlert('Please enter something', 'light');
    // } else {
    youtubeContext.searchVideos(text);
    setText('');
    // }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Videos...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {youtubeContext.videos.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={youtubeContext.clearVideos}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
