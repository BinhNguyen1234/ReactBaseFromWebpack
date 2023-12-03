import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store'
import { decrement } from '@/store/counter.slice'
import Title from '@/UI/Title'
import Value from '@/UI/Value'
export default function Decrement (): JSX.Element {
    const counter = useSelector((state: TGlobalState) => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            <Title>Decrement Page</Title>
            <button onClick={() => { dispatch(decrement({ type: 'incrementType', payload: 5 })) }} type="button">-</button>
            <Value>{counter.value}</Value>
        </>
    )
}
