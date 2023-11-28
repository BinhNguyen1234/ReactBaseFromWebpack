import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store/store'
import { decrement } from '@/store/counter.slice'
export default function Decrement (): JSX.Element {
    const value = useSelector((state: TGlobalState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <div>Decrement Page</div>
            <button onClick={() => { dispatch(decrement()) }} type="button">-</button>
            <div>{value}</div>
        </>
    )
}
