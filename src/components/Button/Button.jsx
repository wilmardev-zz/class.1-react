import React, { Component } from 'react'


class Button extends Component {

    onClickButton(event) {
        console.log('Hello from React Button');
        alert('Hello from React Button!');
    }

    render() {
        return (
            <button onClick={this.onClickButton}>
                Hello from React!
            </button>
        );
    }
}

export default Button;