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
                        <i class="fas fa-home"></i>
                        <h4 className="nav-icon__label">Home</h4>
                    </div>

                    <div className="nav-icon">
                        <i class="fas fa-compact-disc"></i>
                        <h4 className="nav-icon__label">Browse</h4>
                    </div>

                    <div className="nav-icon u-mobile-view">
                        <i class="fas fa-search"></i>
                        <h4 className="nav-icon__label">Search</h4>
                    </div>
                </div>
            </div>
        )
    }
}

