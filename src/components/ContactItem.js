import React from 'react'
import ContactItemStyles from '../styles/ComponentStyles/ContactItemStyles';

function ContactItem({icon, title, contact1, contact2}) {
  return (
    <ContactItemStyles>
        <div className="left-content">
            <p>{icon}</p>
        </div>
        <div className="right-content">
            <h6>{title}</h6>
            <p>{contact1}</p>
            <p>{contact2}</p>
        </div>
    </ContactItemStyles>
  )
}

export default ContactItem