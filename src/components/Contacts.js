import React, { Component } from 'react'
import Contact from "./Contact";

class Contacts extends Component {
  state = {
      contacts: [
        {
          id: 1,
          name: 'Muhammad Anas', 
          email: 'anasarif216@gmail.com', 
          phone: '333-333-9999', 
        },
        {
          id: 2,
          name: 'Abdullah Arif', 
          email: 'abdullaharif40@gmail.com', 
          phone: '123-456-789', 
        },
        {
          id: 3,
          name: 'M Ahsan Junaid', 
          email: 'ahsanj@gmail.com', 
          phone: '123-654-789', 
        },
        {
          id: 4,
          name: 'Ubaid Khan', 
          email: 'starubaid@gmail.com', 
          phone: '321-456-789', 
        },
      ]
  
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
        <Contact 
        key= {contact.id} 
        contact = {contact}/>))}
      </div>
    )
  }
}
export default Contacts 
