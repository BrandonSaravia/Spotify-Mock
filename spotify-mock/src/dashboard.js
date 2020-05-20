import React, { Component } from 'react';
import { connect } from "react-redux";

import Navbar from "./components/navbar";
import ControlPanel from "./components/control-panel";

import Album from "./containers/album";
import Artist from "./containers/artist";
import Browse from "./containers/browse";
import Category from "./containers/category";
import Home from "./containers/home";
import Playlist from "./containers/playlist";
import Search from "./containers/search";

import {selectCurrentPage} from "./actions";

class Dashboard extends Component {

    renderCurrentPage = (param) => {

        switch(param) {
            case "album":
                return <Album />

            case "artist":
                return <Artist />

            case "browse":
                return <Browse />

            case "category":
                return <Category />

            case "playlist":
                return <Playlist />

            case "search":
                return <Search />

            default:
                return <Home />
        }
    }
    
    render() {
        return (
            <>
                <Navbar selectCurrentPage={this.props.selectCurrentPage} />
                {this.renderCurrentPage(this.props.currentPage)}
                <ControlPanel />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectCurrentPage: state.selectCurrentPage,
        currentPage: state.utilityReducer.currentPage
    };
};

export default connect(mapStateToProps, { selectCurrentPage })(Dashboard);