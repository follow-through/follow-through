import React from 'react';

const TheirPost = (props) => {
  return (
    <div id='their-post' className='well'>
      <div className='poster-info text-left'>
        <img className='img img-circle' src='https://pbs.twimg.com/profile_images/883539090649436160/kb0zEc6P_400x400.jpg' />
        <a className='poster'>Wet Jerry</a>
      </div>
      <p className='post-body'>Had a soakin' time at @codemith today!</p>
    </div>
  )
}

export default TheirPost;