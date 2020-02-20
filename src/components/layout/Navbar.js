import React from 'react'
import { Link } from 'react-router-dom'

import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

import { connect } from 'react-redux'


const Navbar = () =>{
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ProjectPlan</Link>
                <SignedIn/>
                <SignedOut/>
            </div>
        </nav> 
    )
}

const mapStateToProps= (state) =>{
    console.log(state);
    return{

    }
}
export default connect (mapStateToProps)(Navbar)