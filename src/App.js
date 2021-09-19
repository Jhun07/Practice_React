import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "My react app",
      employeeData: [],
      act: 0,
      index: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    let email = this.refs.txtEmail.value;
    let password = this.refs.txtPassword.value;

    if (this.state.act === 0) {
      let newEmployee = {
        "name": name,
        "age": age,
        "email": email,
        "password": password
      }
      employeeData.push(newEmployee);

    } else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
      employeeData[index].email = email;
      employeeData[index].password = password;
    }
    
    this.setState({
      employeeData: employeeData,
      act: 0
    })

    this.refs.myForm.reset();
  }
  
  handleEdit = (i) => {
    let employeeData = this.state.employeeData[i];
    this.refs.txtName.value = employeeData.name;
    this.refs.txtAge.value = employeeData.age;
    this.refs.txtEmail.value = employeeData.email;
    this.refs.txtPassword.value = employeeData.password;

    this.setState({
      employeeData: employeeData,
      act : 1,
      index: i
    })
  }

  handleDelete = (i)  => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1);
    this.setState({
      employeeData: employeeData
    });
   };

  render() {
    let employeeData = this.state.employeeData;
    return (
      <div>
       
        <form ref="myForm"> 
          <br />
          <label> Name: </label>
          <input type="text"  ref="txtName" placeholder="Enter Name" />
          <br /> <br />
          <label>Age: </label>
          <input type="number"   ref="txtAge" placeholder="Enter Age" />
          <br />
          <br />
          <label>Email Address: </label>
          <input type="email"   ref="txtEmail" placeholder="Enter Email Address" />
          <br />
          <br />
          <label>Password: </label>
          <input type="password"   ref="txtPassword" placeholder="Enter password" />
          <br />
          <br />
          <button onClick={e => this.handleSubmit(e)}>Save</button>
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email Address</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {employeeData.map((data, i) => 
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <button onClick={  b => this.handleEdit(b)}>Edit</button>
              </td>
              <td>
                <button onClick={i => this.handleDelete(i)}>Delete</button>
              </td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}
export default App;
