import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer" style={{backgroundColor:"lightyellow", textAlign:"center",width:"100%",position:"fixed", left:0, bottom:0}}>
                    <span className="text-muted">v0.0.1; 01/2021</span>
                </footer>
            </div>
        )
    }
}
