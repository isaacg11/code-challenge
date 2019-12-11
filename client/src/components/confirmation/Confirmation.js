import React, { Component } from 'react';
import './confirmation.css';

class Confirmation extends Component {
    render() {
        return (
            <div className="align-center">
                <div>
                    <h1>Success!</h1>
                    <h4>Thank you for signing up!</h4>
                </div>
            </div>
        )
    }
}

export default Confirmation;