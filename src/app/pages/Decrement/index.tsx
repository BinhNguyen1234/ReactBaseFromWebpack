import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store'
import { decrement } from '@/store/counter.slice'
import Title from '@/UI/Title'
import Value from '@/UI/Value'
import Button from '@/UI/Button'
export default function Decrement (): JSX.Element {
    const counter = useSelector((state: TGlobalState) => state.counterDomain)
    const dispatch = useDispatch()
    return (
        <>
            <Title>Decrement Page</Title>
            <Button onClick={() => { dispatch(decrement({ type: 'incrementType', payload: 5 })) }} type="button">-</Button>
            <Value>{counter.value}</Value>
        </>
    )
}
