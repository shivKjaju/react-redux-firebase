import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () =>{
    return (
       <ul className="right">
           <li><NavLink to='/create'>New Project</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className="btn btn-floating Pink darken-3">SPJ</NavLink></li>
       </ul>
    )
}

export default SignedIn