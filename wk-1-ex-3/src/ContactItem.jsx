import React from 'react'

function ContactItem({ name, address }) {
    return (
        <div style={{ border: '5px solid black', padding: '5px', margin: '5px' }}>
            <h1 style={{ fontWeight: 'bold' }} >{name}</h1>
            <h3 style={{ fontWeight: 'lighter' }}>{address}</h3>
        </div>
    )
}

export default ContactItem