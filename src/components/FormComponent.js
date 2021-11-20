import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
        console.log("constructor called");
        super(props)

        this.state = {
            email: '',
            query: '',
            timeToReach: ''
        }
    }

    onChangeEmail = (event) => {
        //gives the data entered into the input box
        //console.log(event.target.value);
        this.setState({
            email: event.target.value
        });
    }

    onChangeQuery = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    onChangeTimeToReach = (event) => {
        this.setState({
            timeToReach: event.target.value
        });
    }

    onSubmitEnquiry = (event) => {
        //it will prevent the default refresh behaviour of the form
        event.preventDefault();
        console.log("form submiited");
        console.log(`Email: ${this.state.email}, Query: ${this.state.query}, TTR: ${this.state.timeToReach}`)
    }

    //will be called after constructor and all the lements of the DOM has been loaded
    componentDidMount() {
        //onload API call 
        console.log("componentDidMount called");
        this.setState({
            timeToReach: 'evening'
        });
    }

    render() {
        return (
            <div>
                Enquiry Form
                <form onSubmit={this.onSubmitEnquiry}>
                    <div>
                        <label>Email</label>
                        <input type="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div>
                        <label>Query</label>
                        <textarea value={this.state.query} onChange={this.onChangeQuery}></textarea>
                    </div>
                    <div>
                        <label>Preferred time to reach</label>
                        <select value={this.state.timeToReach} onChange={this.onChangeTimeToReach}>
                            <option value="morning">morning</option>
                            <option value="afternoon">afternoon</option>
                            <option value="evening">evening</option>
                        </select>
                    </div>
                    <button type="submit">Send Enquiry</button>
                </form>
            </div>
        )
    }
}

export default FormComponent
