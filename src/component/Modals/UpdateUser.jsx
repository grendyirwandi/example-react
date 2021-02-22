import React from "react";

const UpdateUser = (props) => {
  return(
    <div className="modal fade" id="updateModal" tabIndex={-1} aria-labelledby="updateModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateModalLabel">Update </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input type="text" 
                placeholder="Name"
                name="name"
                className="form-control"
                id="recipient-name"
                onChange={props.handleUpdateFormChange} 
                value={props.dataUsers.name}/>
              </div>
              <div className="mb-3">
                <textarea className="form-control" 
                name="address" 
                placeholder="Address" 
                id="message-text" 
                onChange={props.handleUpdateFormChange} 
                value={props.dataUsers.address} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onClick={() => props.handleSubmitPut(props.dataUsers.id)} className="btn btn-sm btn-primary">OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser