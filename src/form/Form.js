import React, { Component } from 'react';
import FormErrors from './FormErrors';
import Datapicker from './Datapicker';
import './Form.css';class Form extends Component {
   constructor (props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      surname: '',
      formErrors: {email: '', name: '', surname:''},
      emailValid: false,
      nameValid: false,
      surnameValid: false,
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event) {this.handleUserInput(event)};

handleUserInput (e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
}



validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let nameValid = this.state.nameValid;
  let surnameValid = this.state.nameValid;
  let emailValid = this.state.emailValid;
  

  switch(fieldName) {
    case 'name':
      nameValid = value.length >= 3 && value.match(/[a-zA-Z]/);
      fieldValidationErrors.name = nameValid ? '': ' is invalid';
      break;
      case 'surname':
      surnameValid = value.length >= 3 && value.match(/[a-zA-Z]/);
      fieldValidationErrors.surname = surnameValid ? '': ' is invalid';
      break;
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  nameValid: nameValid,
                  surnameValid: surnameValid,
                  emailValid: emailValid,
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.surnameValid});
}

 render () {
   return (
    <div>
      <div className="panel panel-default">
        <FormErrors formErrors={this.state.formErrors} />
      </div>
     <form className="demoForm">
      
       <h2>Sign up</h2>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input type="name" className="form-control" onChange ={this.handleChange} value={this.state.name}
           name="name" />
       </div>
       <div className="form-group">
         <label htmlFor="surname">Surname</label>
         <input type="surname" className="form-control" onChange ={this.handleChange} value={this.state.surname}
           name="surname" />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control" onChange ={this.handleChange} value={this.state.email}
           name="email" />
       </div>
       <Datapicker />
       <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>
          Sign up
       </button>
     </form>
    </div>
   )
 }
}
export default Form;