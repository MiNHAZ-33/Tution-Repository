import { useState } from 'react'

function ButtonColorChange() {

    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleMouseEnter = () => {
        setBackgroundColor('red');
    }

    const handleMouseLeave = () => {
        setBackgroundColor('white');
    }

    return (
        <div style={{ backgroundColor: backgroundColor }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Color Change</div>
    )
}

export default ButtonColorChange