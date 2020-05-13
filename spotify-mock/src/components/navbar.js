import React from 'react';

const Navbar = props => (

    <div className="navbar">
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

export default Navbar