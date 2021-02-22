import React, { Fragment } from "react";

const PostUser = (props) => {
  return(
    <Fragment>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postModals">Add New</button>
    <div className="modal fade" id="postModals" tabIndex={-1} aria-labelledby="postModalsLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add New </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input type="text" placeholder="Name" name="name" className="form-control" id="recipient-name" onChange={props.handleFormChange} />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="address" placeholder="Address" id="message-text" defaultValue={""} onChange={props.handleFormChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onClick={props.handleSubmitPost} className="btn btn-sm btn-primary">OK</button>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default PostUser