import React, { Component } from 'react';
import Navbar from "./components/navbar";
import ControlPanel from "./components/control-panel";

class Dashboard extends Component {
    // constructor() {
    //     this.state = {

    //     }
    // }

    render() {
        return (
            <div>
                <Navbar />
                <ControlPanel />
            </div>
        )
    }
}