import React from 'react'

function CharacterCounter({ showOutput, minimumCharacterCount }) {

    let text = ""

    function onChangeHandler(e) {
        text = e.target.value;
    }

    function onClickHandler() {
        if (text.length >= minimumCharacterCount) {
            if (showOutput == "alert") {
                alert(text.length);

            } else {
                console.log(text.length);
            }
        }
    }

    return (
        <div>
            <input onClick={onClickHandler} onChange={onChangeHandler} />
        </div>
    )
}

export default CharacterCounter