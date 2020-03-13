import React from 'react'
import { Link } from 'react-router-dom'

import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

import { connect } from 'react-redux'


const Navbar = (props) =>{
    const { auth } = props
    const links = auth.uid ? <SignedIn/> : <SignedOut/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ProjectPlan</Link>
                { links }
            </div>
        </nav> 
    )
}

const mapStateToProps= (state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth
    }
}
export default connect (mapStateToProps)(Navbar)