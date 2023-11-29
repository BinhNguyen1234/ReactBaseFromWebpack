import { createBrowserRouter } from 'react-router-dom'
// import NavBar from '../layout/LayoutCommon'
import { type ComponentType, Suspense, lazy } from 'react'
import App from '@/app/app'
import Home from './Home'

const Increment = lazy(async () => {
    return await import('./Increment')
})
/**
 * this is mockup incase lazy load take 3s to import component, in real life, there none coding like this
 */
const Decrement = lazy(async () => {
    const c = new Promise((rs, rj) => {
        setTimeout(() => {
            rs(import('./Decrement'))
        }, 3000)
    })
    const a = c.then(rs => {
        return rs
    })
    return await (a as Promise<{ default: ComponentType<any> }>)
})
const router = createBrowserRouter([
    {
        element: <App />,
        path: '/',
        children: [
            {
                path: '/Increment',
                element: <Suspense fallback={<div>Loading</div>} ><Increment /></Suspense>
            },
            {
                path: '/Decrement',
                element: <Suspense fallback={<div>Loading</div>} ><Decrement /></Suspense>
            },
            {
                path: '',
                element: <Home></Home>
            }
        ]
    }
])
export default router
