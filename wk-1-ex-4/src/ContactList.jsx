import React from 'react'
import ContactItem from './ContactItem'

function ContactList({ contactlist }) {
    return (
        <div>
            {contactlist.map((item, index) => {
                return <ContactItem key={index} name={item.name} address={item.address} />
            })}
        </div>
    )
}

export default ContactList