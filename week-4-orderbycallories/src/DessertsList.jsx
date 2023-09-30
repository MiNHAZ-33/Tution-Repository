import React from 'react'

function DessertsList({ data }) {

    const filteredDesserts = data.filter(dessert => dessert.calories < 500);

    filteredDesserts.sort((a, b) => a.calories - b.calories);


    return (
        <ul>
            {filteredDesserts.map(dessert => (
                <li key={dessert.name}>
                    <p> {dessert.name} - {dessert.calories} cal </p>
                </li>
            ))
            }
        </ul>
    )
}

export default DessertsList