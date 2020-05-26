import React from 'react';
import {Link} from 'react-router';


function Header(){

    return (
        <div>
           <header className="header_v3">
                <section className="navbar_outer">
                <div className="navbar navbar-expand-lg  bsnav bsnav-sticky bsnav-sticky-slide">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/">
                            <h2 className="log_normal logoText">Corona</h2>
                            <h2 className="log_sticky">Corona</h2>
                            </Link>
                        </div>
                        <button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse scroll-nav">
                            <ul className="navbar-nav navbar-mobile navbar_left  ml-auto" id="nav">
                            <li className="nav-item nav_item active ">
                                <Link to="/">
                                <p className="nav-link link_hd"> Home </p>
                                </Link>
                            </li>
                            <li className="nav-item nav_item">
                            <Link to="search">
                                <p className="nav-link link_hd">Search <i className="flaticon-search icon"> </i> </p>
                            </Link>
                            </li>
                            <li className="nav-item nav_item">
                            <Link to="countries">
                                <p className="nav-link link_hd">All Countries </p>
                            </Link>
                            </li>
                            <li className="nav-item nav_item">
                            <Link to="nigeriacases">
                                <p className="nav-link link_hd">Nigeria Cases </p>
                            </Link>
                            </li>
                            
                            </ul>
                            <ul className="navbar-nav navbar-mobile navbar_right">
                            
                            <li className="nav-item  dropdown">
                                
                                <a href="#" className="site-header__sidemenu-nav side-menu__toggler">
                                    <span className="site-header__sidemenu-nav-line"></span>
                                    <span className="site-header__sidemenu-nav-line"></span>
                                    <span className="site-header__sidemenu-nav-line"></span> 
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </section>
         </header>

         
      </div>
    )
}

export default Header;