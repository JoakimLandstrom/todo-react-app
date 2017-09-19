import React, {Component} from 'react';


class Input extends Component {

    handleSubmitEnter = event => {

        if(event.key === 'Enter') {
            this.setState({
                text: event.target.value
            });
            console.log(this.state.text)
        }

    };

    render() {
        return (
            <div>
                <input placeholder="Task.." onKeyPress={this.handleSubmitEnter}/>
            </div>
        );
    }
}

export default Input;

