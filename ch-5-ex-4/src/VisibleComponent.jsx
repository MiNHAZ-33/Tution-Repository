import React, { useState } from 'react'

const VisibleComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div>
            <button onClick={toggleVisibility}>Change Visibility</button>
            {isVisible && <p>Now you see me!</p>}

        </div>
    )
}

export default VisibleComponent