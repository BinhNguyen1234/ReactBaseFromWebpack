import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store'
import { other } from '@/store/counter.slice'
import Container from '@/UI/Parent'
import Child from '@/UI/Child'
export default function Increment (): JSX.Element {
    const value = useSelector((state: TGlobalState) => { return state.counterDomain.value })
    const dispatch = useDispatch()
    return (
        <>
            <div>Increment Page</div>
            <button onClick={() => { dispatch(other(5)) }} type="button">+</button>
            <div>{value}</div>
            <Container>
                <Child></Child>
            </Container>
        </>
    )
}
