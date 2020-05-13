import React, { useState, useEffect } from 'react';
import CustomContext from "./custom-context";



const Navbar = props => {
    // const [showing, setShowing] = useState(false);

    return (
        <div className="navbar">

            <div className="navbar__context-menu">
                {/* <p onClick={() => setShowing(!showing)}>click</p>
                {showing ? <CustomContext /> : null} */}
                <CustomContext />
            </div>

            <div className="navbar__nav-icons">
                <div className={props.currentPage === "home" ? "nav-icon u-selected" : "nav-icon"} onClick={() => {props.selectCurrentPage("home")}}>
                    <i className="fas fa-home"></i>
                    <h4 className="nav-icon__label">Home</h4>
                </div>

                <div className={props.currentPage === "browse" ? "nav-icon u-selected" : "nav-icon"} onClick={() => {props.selectCurrentPage("browse")}}>
                    <i className="fas fa-compact-disc"></i>
                    <h4 className="nav-icon__label">Browse</h4>
                </div>

                <div className={props.currentPage === "search" ? "nav-icon u-mobile-view u-selected" : "nav-icon u-mobile-view"} onClick={() => {props.selectCurrentPage("search")}}>
                    <i className="fas fa-search"></i>
                    <h4 className="nav-icon__label">Search</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar