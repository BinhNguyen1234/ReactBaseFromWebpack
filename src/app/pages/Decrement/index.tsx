import { useAppDispatch, useAppSelector } from '@/hook/store.hook'
import type { RootState } from '@/store'
import { decrement } from '@/store/counter.slice'
import Title from '@/UI/Title'
import Value from '@/UI/Value'
export default function Decrement (): JSX.Element {
    const counter = useAppSelector((state: RootState) => state.counter)
    const dispatch = useAppDispatch()
    return (
        <>
            <Title>Decrement Page</Title>
            <button onClick={() => { dispatch(decrement({ value: 5, status: 'none' })) }} type="button">-</button>
            <Value>{counter.value}</Value>
        </>
    )
}
