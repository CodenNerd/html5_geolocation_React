import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer } from "../others/Style"

const Navbar = () => {
    return (
        <NavContainer>
            <NavLink to='/'>USER VIEW</NavLink>
            <div></div>
            <NavLink to='/admin'>ADMIN VIEW</NavLink>
        </NavContainer>
    )
}

export default Navbar
