import React from "react";

const BioCard = (props) =>{
    return(
        <tr>
          <th scope="row">{props.iter}</th>
          <td> {props.data.name}</td>
          <td>{props.data.address}</td>
          <td>
          <button className="btn btn-sm btn-primary">Detail</button>
          <button onClick={() => props.update(props.data)} className="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>
          <button onClick={() => props.remove(props.data.id)} className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
    )
}

export default BioCard