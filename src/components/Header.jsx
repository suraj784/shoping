import React, { Component } from "react";
import './Head.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            title: "React App",
            userInput: ""
        };
    }

    inputChange = (event) => {
        this.setState({
            userInput: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    <input 
                        placeholder="Enter your product..." 
                        value={this.state.userInput} 
                        onChange={this.inputChange} 
                    />
                </div>
                <p>{this.state.userInput || "Please enter your product name..."}</p>
            </div>
        );
    }
}

export default Header;
