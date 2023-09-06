import React from 'react'

function ColorList2({ colorslist }) {
    return (
        <>
            {colorslist.map((color, index) => {
                return <h3 key={index} style={{ backgroundColor: color }}>
                    {color}
                </h3>
            })}
        </>
    )
}

export default ColorList2