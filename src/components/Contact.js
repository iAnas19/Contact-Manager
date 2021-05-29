import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  }


  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state


    return (
      <div className='card card-body mb-3'>
        <h4  >{name} 
        <i onClick={() => 
          this.setState({showContactInfo: !this.state.showContactInfo})}
          className='drop-down fas fa-sort-down' style={{fontSize:'24px'}}/>

          <i className='cross fas fa-times' style={{cursor:'pointer', float: 'right', color:'red'}} />
          </h4>
        
        {showContactInfo ? (        
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>) : null}

            
      </div>
    );
  }
}

Contact.defaultProps = {
  name: 'name not added',
  email: 'no E-mail added',
  phone: 'phone number not added'
}


Contact.propTypes = {
  contact:PropTypes.object.isRequired,

}

export default Contact;
