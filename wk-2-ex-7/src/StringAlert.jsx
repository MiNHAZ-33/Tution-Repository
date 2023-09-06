import React from 'react'

function StringAlert() {

    function onChangeHandler(e) {
        if (e.target.value.includes("horse")) {
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