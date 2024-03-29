import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedIn = (props) =>{
    return (
       <ul className="right">
           <li><NavLink to='/create'>New Project</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to='/' className="btn btn-floating Pink darken-3">{props.initials}</NavLink></li>
       </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        initials: state.firebase.profile.initials   
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(SignedIn)