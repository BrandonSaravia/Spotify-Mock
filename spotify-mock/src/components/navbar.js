import React, { Component } from 'react';

class Navbar extends Component {
    constructor() {
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar__nav-icons">

                    <div className="nav-icon">
                        {/* home icon */}
                        <h4 className="nav-icon__label">Home</h4>
                    </div>

                    <div className="nav-icon">
                        {/* browse icon */}
                        <h4 className="nav-icon__label">Browse</h4>
                    </div>
                    
                    <div className="nav-icon u-mobile-view">
                        {/* Search icon */}
                        <h4 className="nav-icon__label">Search</h4>
                    </div>
                </div>
            </div>
        )
    }
}

