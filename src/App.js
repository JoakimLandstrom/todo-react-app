import React, {Component} from 'react';
import './App.css';
import Input from './components/Input'

class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>To do:</h1>
                <Input/>
            </div>
        );
    }
}

export default App;