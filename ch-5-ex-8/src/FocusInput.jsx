import React, { useRef } from 'react';

function FocusInput() {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus</button>
        </div>
    );
}

export default FocusInput;
