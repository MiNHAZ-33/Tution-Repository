import React from 'react'
import ProductCard from './ProductCard'

function ShoppingCart({ cartItems }) {
    return (
        <div>{cartItems.map((item, index) => {
            return <ProductCard key={index} product={item} />
        })}</div>
    )
}

export default ShoppingCart