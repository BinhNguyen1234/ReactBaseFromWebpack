import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store'
import { other } from '@/store/counter.slice'
export default function Increment (): JSX.Element {
    const value = useSelector((state: TGlobalState) => { return state.counter.value })
    const dispatch = useDispatch()
    return (
        <>
            <div>Increment Page</div>
            <button onClick={() => { dispatch(other(5)) }} type="button">+</button>
            <div>{value}</div>
        </>
    )
}
