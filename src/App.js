import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import Input from "./components/Input";

class App extends Component {

    state = {
        input: '',
        rows: []
    }


    onChange = event => {
        this.setState({input: event.target.value});
    }

    handleSubmit = event => {
        if (event.key === 'Enter') {

            this.setState({
                input: '',
                rows: [...this.state.rows, {input: this.state.input, done: false, editing: false}]
            });
        }
    }

    removeItem = event => {
        var newArray = this.state.rows;
        newArray.splice(event.target.value, 1);

        this.setState({
            rows: newArray
        });
    }

    handleListDoubleClick = event => {

        var newArray = this.state.rows;
        newArray[event.target.value].editing = true;

        this.setState({
            rows: newArray
        });
    }

    handleTextEnter = event => {

        console.log(event.key)

        if (event.key === 'Enter') {


            var newArray = this.state.rows;
            newArray[event.target.accessKey].input = event.target.value;
            newArray[event.target.accessKey].editing = false;

            this.setState({
                rows: newArray
            });
        }
    }


    render() {
        return (
            <div className="app">
                <h1>To do:</h1>
                <Input value={this.state.input} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <List handleTextEnter={this.handleTextEnter} rows={this.state.rows}
                      handleListDoubleClick={this.handleListDoubleClick} removeItem={this.removeItem}/>
            </div>
        );
    }
}

export default App;
