import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>Att göra:</h1>
                <input type="text" placeholder="Name" onChange={this.handleOnChange}/>

                <ul></ul>
            </div>
        );
    }
}

export default App;
