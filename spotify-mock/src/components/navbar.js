import React, { useState } from 'react';
import CustomContext from "./custom-context";


const Navbar = props => { 

    const [currentPage, setCurrentPage] = useState("home");


    return (
        <div className="navbar">

            <div className="navbar__context-menu">
                <CustomContext />
            </div>

            <div className="navbar__nav-icons">
                <div className={currentPage === "home" ? "nav-icon u-selected" : "nav-icon"} onClick={() => {setCurrentPage("home");props.selectCurrentPage("home")}}>
                    {currentPage === "home" ? <i className="fas fa-home-alt"></i> : <i className="fal fa-home-alt"></i>}
                    <h4 className="nav-icon__label">Home</h4>
                </div>

                <div className={currentPage === "browse" ? "nav-icon u-selected" : "nav-icon"} onClick={() => {setCurrentPage("browse");props.selectCurrentPage("browse")}}>
                    {currentPage === "browse" ? <i className="fas fa-album-collection"></i> : <i className="fal fa-album-collection"></i>}
                    <h4 className="nav-icon__label">Browse</h4>
                </div>

                <div className={currentPage === "search" ? "nav-icon u-mobile-view u-selected" : "nav-icon u-mobile-view"} onClick={() => {setCurrentPage("search");props.selectCurrentPage("search")}}>
                    {currentPage === "search" ? <i className="fas fa-search"></i> : <i className="fal fa-search"></i>}
                    <h4 className="nav-icon__label">Search</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar