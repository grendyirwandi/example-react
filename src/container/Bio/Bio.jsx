import React,{Component, Fragment} from 'react';
import BioCard from "../../component/BioCard/BioCard";
import PostUser from "../../component/Modals/PostUser";
import UpdateUser from "../../component/Modals/UpdateUser";

class Bio extends Component{
  state = {
    dataUsers : [],
    formUsers:{
      name:'',
      address:''
    },
    formUpdateUsers:{
      id:'',
      name:'',
      address:''
    }
  }

  componentDidMount(){
    this.getDataUser()
  }

  getDataUser = () => {
    fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(json => {
      this.setState({
        dataUsers:json,
        formUpdateUsers:{
          id:'',
          name:'',
          address:''
        }
      })
    })
  }

  handleDelete = (id => {
    fetch(`http://localhost:3001/users/${id}`,{
      method: 'DELETE',
    }).then(response => this.getDataUser())        
  })

  handleFormChange = (event => {
    let newFormUsers = {...this.state.formUsers}
    newFormUsers[event.target.name] = event.target.value
    this.setState({
      formUsers: newFormUsers
    })
  })

  handleUpdateFormChange = (event => {
    let newformUpdateUsers = {...this.state.formUpdateUsers}
    newformUpdateUsers[event.target.name] = event.target.value
    this.setState({
      formUpdateUsers: newformUpdateUsers
    })
  })

  handleSubmitPost = () => {
    fetch(`http://localhost:3001/users`,{
      method: 'POST',
      body:JSON.stringify(this.state.formUsers)
    }).then(response => this.getDataUser())
    .catch(err => console.log("err: ", err))
  }

  handleSubmitPut = (id => {
    fetch(`http://localhost:3001/users/${id}`,{
      "method": "PUT",
      "body":JSON.stringify(this.state.formUpdateUsers)
    }).then(response => this.getDataUser())
    .catch(err => console.log("err: ", err))
  })

  changeUpdateForm = (data => {
    this.setState({
      formUpdateUsers:{
        id:data.id,
        name:data.name,
        address:data.address
      }
    })
  })

  render(){
    return(
      <Fragment>
        <PostUser handleSubmitPost={this.handleSubmitPost} handleFormChange={this.handleFormChange}/>
        <UpdateUser handleSubmitPut={this.handleSubmitPut} dataUsers={this.state.formUpdateUsers} handleUpdateFormChange={this.handleUpdateFormChange}/>
        {
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.dataUsers.map((dataUsers, i) =>{
                  return <BioCard iter={i+1} key={dataUsers.id} data={dataUsers} remove={this.handleDelete} update={this.changeUpdateForm}/>
                })
              }
            </tbody>
          </table>
        }
      </Fragment>
    )
  }
}

export default Bio