import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class NavBar extends Component {
    render() { 
        return ( 
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName="active">Home</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='/new' activeClassName="active">New tweet</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;