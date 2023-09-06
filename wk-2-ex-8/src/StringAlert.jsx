import React from 'react'

function StringAlert({ checkText }) {

    function onChangeHandler(e) {
        if (e.target.value.includes(checkText)) {
            alert("You typed horse");
        }
    }

    return (
        <div>
            <input onChange={onChangeHandler} />
        </div>
    )
}

export default StringAlert