import NavBar from '@/layout/LayoutCommon'
import { Outlet } from 'react-router-dom'
function App (): JSX.Element {
    return <>
        <NavBar/>
        <Outlet/>
    </>
}

export default App
