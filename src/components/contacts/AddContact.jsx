import React, { Component } from 'react'
import { Consumer } from '../../context';
import {v1 as uuid} from "uuid"; 
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
  
  onSubmit =(dispatch, e) => {
    e.preventDefault()
    
    
    const { name, email, phone } = this.state

    // Check for errors
    if(name === ''){
      this.setState({errors: { name: 'Name is required'}})
      return
    }
    if(email === ''){
      this.setState({errors: { email: 'email is required'}})
      return
    }
    if(phone === ''){
      this.setState({errors: { phone: 'phone is required'}})
      return
    }
      
    const new_Contact = {
      id: uuid(),
      name,
      email,
      phone
    }
    
    dispatch({ type: 'ADD_CONTACT', payload: new_Contact })
    
    
    // clear state
    this.setState({
      name:'',
      email:'',
      phone:'',
      errors: {}
    })
    
    this.props.history.push('/');
    
  }
  
  onChange = e => this.setState({[e.target.name]: e.target.value})
  
  render() {

    const { name, email, phone, errors } = this.state
    

    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className='card mb-3'>
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <TextInputGroup   
              label = 'Name'
              name = 'name'
              placeholder= 'Enter name...'
              value={name}
              onChange={this.onChange}
              error = {errors.name}
              
              />
            <TextInputGroup   
              label = 'Email'
              name = 'email'
              type='email'
              placeholder= 'Enter email...'
              value={email}
              onChange={this.onChange}
              error = {errors.email}
              />

            <TextInputGroup   
              label = 'Phone'
              name = 'phone'
              placeholder= 'Enter phone...'
              value={phone}
              onChange={this.onChange}
              error = {errors.phone}
              
            />
            
            <br />
            <input 
            type="submit" 
            value="Add Contact" 
            className='btn btn-success btn-block btn-lg' />
            <br />
          </form>
        </div>
      </div>
      
      )}}
      </Consumer>
    )
  }
}

export default AddContact
