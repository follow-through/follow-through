import React from 'react';

const EditModal = (props) => {
  return (
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Edit what you will post</h4>
          </div>
          <div className="modal-body">
            <textarea id='post-body' className='form-control' defaultValue={props.body}></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => props.updateBody(getTextArea())}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const getTextArea = () => {
  console.log(document.getElementById('post-body').value);
  return document.getElementById('post-body').value;  
}

export default EditModal;