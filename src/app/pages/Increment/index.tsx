import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store'
import { increment, other, test } from '@/store/counter.slice'
export default function Increment (): JSX.Element {
    const { value, status } = useSelector((state: TGlobalState) => { return state.counter })
    const dispatch = useDispatch()
    return (
        <>
            <div>Increment Page</div>
            <button onClick={() => { dispatch(other(5)) }} type="button">+5</button>
            <button onClick={() => { dispatch<any>(test()) }} type="button">test</button>
            <button onClick={() => { dispatch(increment(null)) }} type="button">+</button>
            <div>{status}</div>
            <div>{value}</div>
        </>
    )
}
