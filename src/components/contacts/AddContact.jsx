import React, { Component } from 'react'
import { Consumer } from '../../context';
import { uuid } from 'uuid'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmit =(dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }

    dispatch({ type: 'ADD_CONTACT', payload: 'newContact' })

  }


  render() {

    const { name, email, phone } = this.state
    

    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className='card mb-3'>
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              className="form-control form-control-lg"
              name='name' 
              placeholder='Enter Name'
              value={name} 
              onChange={this.onChange}
              />

            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" 
              className="form-control form-control-lg"
              name='email' 
              placeholder='Enter Email'
              value={email} 
              onChange={this.onChange}
              />

            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" 
              className="form-control form-control-lg"
              name='phone' 
              placeholder='Enter phone number' 
              value={phone} 
              onChange={this.onChange}
              />

            </div>
            <br />
            <input 
            type="submit" 
            value="Add Contact" 
            className='btn btn-dark btn-block btn-lg' />
            <br />
          </form>
        </div>
      </div>

          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
