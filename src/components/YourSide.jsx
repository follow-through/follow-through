import React from 'react';
import YourPost from './YourPost.jsx';
import EditModal from './EditModal.jsx';

const YourSide = (props) => {
  return (
    <div id='yours' className='text-center col-xs-6'>
      <h2>Your Post</h2>
      <YourPost name={props.name} image={props.image} body={props.body}/>
      <div className='text-left'>
        <button id='edit' className='btn btn-danger btn-lg' data-toggle="modal" data-target="#myModal">Edit</button>
      </div>
      <EditModal body={props.body} updateBody={props.updateBody}/>
    </div>
  )
}

export default YourSide;