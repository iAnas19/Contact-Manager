import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }


  onSubmit =(e) => {
    e.preventDefault()
    const contact ={
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value

    }
    console.log(contact)

  }

  static defaultProps = {
    name : 'Ali Abid',
    email: 'ali@yahoo.com',
    phone: '111-666-444'
  }


  render() {
    const { name, email, phone } = this.props
    return (
      <div className='card mb-3'>
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              className="form-control form-control-lg"
              name='name' 
              placeholder='Enter Name'
              defaultValue={name}
              ref={this.nameInput} 
             
              />

            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" 
              className="form-control form-control-lg"
              name='email' 
              placeholder='Enter Email'
              defaultValue={email} 
              ref={this.emailInput}
             
              />

            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" 
              className="form-control form-control-lg"
              name='phone' 
              placeholder='Enter phone number' 
              defaultValue={phone} 
              ref={this.phoneInput}
             
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
  }
}

export default AddContact
