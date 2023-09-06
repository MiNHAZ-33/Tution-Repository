import React from 'react'

function CharacterCounter() {

    let text = ""

    function onChangeHandler(e) {
        text = e.target.value;
    }

    function onClickHandler() {
        if (text.length > 0) {
            alert(text.length)
        }
    }

    return (
        <div>
            <input onClick={onClickHandler} onChange={onChangeHandler} />
        </div>
    )
}

export default CharacterCounter