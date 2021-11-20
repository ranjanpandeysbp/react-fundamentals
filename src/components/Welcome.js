import React, { Component } from "react";

class Welcome extends Component {

    constructor() {
        super();//calling the super class constructor
        //data in the state is mutable and can be modified
        this.state = { name: "John Doe", age: 27 };
    }

    changeData() {
        //debugger;
        this.setState({
            name: "Peter Warry",
            age: 38
        });
    }

    render() {
        return (
            <div>
                <h2>Name is {this.state.name} and Age is {this.state.age}</h2>
                <button onClick={() => this.changeData()}>Change details</button>
            </div>
        );
    }
}

export default Welcome;
