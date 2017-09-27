import React, {Component} from 'react';
import './css/App.css';
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
            if (this.state.input) {
                this.setState({
                    input: '',
                    rows: [...this.state.rows, {input: this.state.input, done: false, editing: false}]
                });
            }
        }
    }

    removeItem = event => {
        var newArray = this.state.rows;
        newArray.splice(event.target.id, 1);

        this.setState({
            rows: newArray
        });
    }

    handleListDoubleClick = event => {

        var newArray = this.state.rows;
        newArray[event.target.id].editing = true;

        this.setState({
            rows: newArray
        });
    }

    handleTextEnter = event => {

        if (event.key === 'Enter') {

            var newArray = this.state.rows;
            newArray[event.target.id].input = event.target.value;
            newArray[event.target.id].editing = false;

            this.setState({
                rows: newArray
            });
        }
    }


    render() {
        return (
            <div className="app">
                <Input value={this.state.input} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <List handleTextEnter={this.handleTextEnter} rows={this.state.rows}
                      handleListDoubleClick={this.handleListDoubleClick} removeItem={this.removeItem}/>
            </div>
        );
    }
}

export default App;
