import { useState } from 'react'

const KeyPressComponent = () => {
    const [message, setMessage] = useState('');

    const handleKeyDown = (event) => {
        setMessage(event.key);
    }

    return (
        <div tabIndex={0} onKeyDown={handleKeyDown}>
            You have pressed {message}
        </div>
    );
}

export default KeyPressComponent