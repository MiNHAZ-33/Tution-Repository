import React from 'react'

function ProductCard({ product }) {
    return (
        <div style={{ border: '2px solid black', margin: '10px', padding: '5px' }} >
            <h3>Name: {product.name}</h3>
            <h3>Quantity: {product.quantity}</h3>
            <h3>Total Price: {product.totalPrice}</h3>
        </div>
    )
}

export default ProductCard