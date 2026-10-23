import { useState } from "react"
import { Button } from "react-bootstrap"
import './Counter.css'

type Props = {
    initialCount: number,
    onChange: (n: number) => void
}

export default function Counter({initialCount, onChange}: Props) {
    
    const [count, setCount] = useState(initialCount || 0)
    function increment() {
        setCount((c: number) => {
            return c + 1
        })
        onChange(count + 1)
    }
    function decrement() {
        setCount((c: number) => {
            return c - 1
        })
        onChange(count - 1)
    }
    return (
    < >
        <div className='counter-box'>
            <span><Button onClick={decrement}>-</Button></span>
            <span className='counter-number'>{count}</span>
            <span><Button onClick={increment}>+</Button></span>
        </div>
    </>
    )
}