import { createBrowserRouter } from 'react-router-dom'
// import NavBar from '../layout/LayoutCommon'
import { type ComponentType, Suspense, lazy } from 'react'
import NavBar from '../layout/LayoutCommon'

const HomePage = lazy(async () => {
    return await import('./Home')
})
/**
 * this is mockup incase lazy load take 3s to import component, in real life, there none coding like this
 */
const DefaultPage = lazy(async () => {
    const c = new Promise((rs, rj) => {
        setTimeout(() => {
            rs(import('./Default'))
        }, 3000)
    })
    const a = c.then(rs => {
        return rs
    })
    return await (a as Promise<{ default: ComponentType<any> }>)
})
const router = createBrowserRouter([
    {
        element: <NavBar />,
        path: '/',
        children: [
            {
                path: '/home',
                element: <Suspense fallback={<div>Loading</div>} ><HomePage /></Suspense>
            },
            {
                path: '',
                element: <Suspense fallback={<div>Loading</div>} ><DefaultPage /></Suspense>
            }
        ]
    }
])

export default router
