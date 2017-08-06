import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            ownName : '',
            company : ''
        };
    }
    render() {
        return (
            <div>
                <h1>Company Name Generator</h1>
                <form onSubmit = {this.handleGenerate}>
                    <span>Enter a name: </span>
                    <input
                        type = 'text'
                        value = {this.state.ownName}
                        onChange = {this.handleName}
                    />
                    <button>Generate</button>
                    <br/>
                    <span id='result'>
                         {this.state.company}
                    </span>
                </form>
            </div>
        );
    }
    handleName= (event) => {
        this.setState({
            ownName : event.target.value
        });
    }
    handleGenerate = (event) => {
        console.log(this.state.ownName);
        event.preventDefault();
        if(this.state.ownName!==""){
        this.setState({
            company :`what about: ` + this.state.ownName +`'s company`
            });
        }else{
            this.setState({
            company :''
            });
        }
    }
}