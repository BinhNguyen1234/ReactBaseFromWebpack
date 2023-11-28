import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar (): JSX.Element {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/increment"> Increment page </NavLink>
                </li>
                <li>
                    <NavLink to="/decrement"> Decrement page</NavLink>
                </li>
            </ul>
        </>
    )
}
