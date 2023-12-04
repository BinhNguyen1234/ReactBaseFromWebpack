import { useAppDispatch, useAppSelector } from '@/hook/store.hook'
import { increment, other, test } from '@/store/counter.slice'
import { useGetNameQuery } from '@/api/index'
export default function Increment (): JSX.Element {
    const { value, status } = useAppSelector((state) => { return state.counter })
    const dispatch = useAppDispatch()
    const {
        data,
        isLoading,
        isSuccess,
        isError
    } = useGetNameQuery('info-mockup.json')
    return (
        <>
            <div>name:</div>
            <div>{isLoading ? 'loading' : isSuccess ? data.name : isError ? 'erorr' : 'not error but done' }</div>
            <div>Increment Page</div>
            <button onClick={() => { dispatch(other(5)) }} type="button">+5</button>
            {/* <button onClick={() => { refetch() }} type="button">Refetch</button> */}
            <button onClick={() => { dispatch<any>(test()) }} type="button">test</button>
            <button onClick={() => { dispatch(increment(null)) }} type="button">+</button>
            <div>{status}</div>
            <div>{value}</div>
        </>
    )
}
