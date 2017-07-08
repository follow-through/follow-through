import React from 'react';

const YourPost = (props) => {
  return (
    <div id='your-post' className='well'>
      <div className='poster-info text-left'>
        <img className='img img-circle' src='https://pbs.twimg.com/profile_images/825278175647195138/Y6JecgXV_normal.jpg' />
        <a className='poster'>Adrian Roselli</a>
      </div>
      <p className='post-body'>Great time at @codesmith today!</p>
    </div>
  )
}

export default YourPost;