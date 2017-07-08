import React from 'react';

const YourPost = (props) => {
  return (
    <div id='your-post' className='well'>
      <div className='poster-info text-left'>
        <img className='img img-circle' src={props.image} />
        <a className='poster'>{props.name}</a>
      </div>
      <p className='post-body'>{props.body}</p>
    </div>
  )
}

export default YourPost;