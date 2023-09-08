import {  useState } from 'react'

function TextRenderer() {

    const [text, setText] = useState('')
    const [inputValue, setInputValue] = useState('')

    const onClickHandler = () => {
        setText(inputValue)
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <input type='text' onChange={inputHandler} />
            <button onClick={onClickHandler} >Print</button>
            <div>{text}</div>

        </div>
    )
}

export default TextRenderer