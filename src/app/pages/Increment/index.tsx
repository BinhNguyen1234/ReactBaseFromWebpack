import { useDispatch, useSelector } from 'react-redux'
import type { TGlobalState } from '@/store'
import { increment, other, test } from '@/store/counter.slice'
import  {useGetNameQuery}  from '@/api/index'
export default function Increment (): JSX.Element {
    const { value, status } = useSelector((state: TGlobalState) => { return state.counter })
    const dispatch = useDispatch()
    const {
        data,
        isLoading,
        isSuccess,
        isError, 
        refetch
      } = useGetNameQuery('info-mockup.json')
    return (
        <>
        <div>name:</div>
            <div>{isLoading ? "loading": isSuccess? data.name: isError? "erorr" :"not error but done" }</div>
            <div>Increment Page</div>
            <button onClick={() => { dispatch(other(5)) }} type="button">+5</button>
            <button onClick={() => { refetch() }} type="button">Refetch</button>
            <button onClick={() => { dispatch<any>(test()) }} type="button">test</button>
            <button onClick={() => { dispatch(increment(null)) }} type="button">+</button>
            <div>{status}</div>
            <div>{value}</div>
        </>
    )
}


