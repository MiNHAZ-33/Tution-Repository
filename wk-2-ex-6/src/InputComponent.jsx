import React from 'react'

function InputComponent() {

    function onChangeHandler(e) {
        console.log(e.target.value);
    }

    return (
        <div>
            <input onChange={onChangeHandler} />
        </div>
    )
}

export default InputComponent