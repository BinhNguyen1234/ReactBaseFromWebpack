import { createBrowserRouter } from 'react-router-dom'
import HomePage from './Home'
import DefaultPage from './Default'
import NavBar from '../layout/LayoutCommon'
const router = createBrowserRouter([
    {
        element: <NavBar/>,
        path: '/',
        children: [
            {
                path: '/home',
                element: <HomePage/>
            },
            {
                path: '',
                element: <DefaultPage/>
            }
        ]
    }
])

export default router
