import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar (): JSX.Element {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/home"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/"> Default</NavLink>
                </li>
            </ul>
        </>
    )
}
