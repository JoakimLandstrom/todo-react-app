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
        if(event.key === 'Enter') {

            this.setState({
                input: '',
                rows: [...this.state.rows, this.state.input]
            });
        }
    }

    removeItem = event => {

        this.setState({
           rows: //wtf måste deleta men javascript är bajs!???
        });

    }

    render() {
        return (
            <div className="app">
                <h1>To do:</h1>
                <Input value={this.state.input} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <List rows={this.state.rows} removeItem={this.removeItem}/>
            </div>
        );
    }
}

export default App;

// <input value={this.state.input} onChange={this.onChange} onKeyPress={this.handleSubmitEnter} />
