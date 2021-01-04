import React, { useState, useContext } from 'react';
import YoutubeContext from '../../context/youtube/youtubeContext';

const Search = () => {
  const youtubeContext = useContext(YoutubeContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    youtubeContext.searchVideos(text);
    setText('');
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
