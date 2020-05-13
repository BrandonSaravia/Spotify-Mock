import React, { Component } from 'react';

class Album extends Component {
    constructor() {
        super();
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div>
                <h1>Album</h1>
            </div>
        )
    }
}
export default Album