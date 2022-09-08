import React,{useState} from 'react';

import classes from './navbar.module.css'
import { NavLink,  Link } from "react-router-dom";


const Navbar = (props)=>{
    const { logo, navLinks} = props;
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return(
        <>
    <nav className={`navbar navbar-expand-md navbar-dark px-md-4 ${classes.navbar}`}>
        <div className="container-xxl">

        <Link to={logo.linkPath} className={`navbar-brand ${classes.brandLogo}`}>
           <img src={logo.imgPath} alt="Logo Of Muntazim"/>
        </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div  className={`${isNavCollapsed ? `collapse` : ''} navbar-collapse justify-content-end align-center ${classes.Navlinks}`} id="navbarNav">
                <ul className="navbar-nav">
                    {
                        
                        navLinks.map((item)=>(
                            <li className="nav-item active" key={item.id}>
                                <NavLink className="nav-link" to={item.linkPath}>{item.label}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}


export default Navbar;