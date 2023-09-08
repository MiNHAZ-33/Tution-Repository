import { useState } from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h3>
                You have clicked the button {count} times
            </h3>
        </div>
    )
}

export default ClickCounter