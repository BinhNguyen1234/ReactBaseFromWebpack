import { useState } from 'react'

export default function Container ({ children }: { children: JSX.Element }): JSX.Element {
    const [num, setNume] = useState(9)
    console.log('parent')
    return (
        <>
            <h2>{children}</h2>
            <button type='button' onClick={() => { setNume((state) => { return (state += 1) }) }}>++</button>
            <div>{num}</div>
        </>
    )
}
