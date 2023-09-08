import React, { useRef } from 'react';

function InputComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Log to console</button>
    </div>
  );
}

export default InputComponent;
