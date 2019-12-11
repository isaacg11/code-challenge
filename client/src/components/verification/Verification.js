import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../../actions/user/user';
import './verification.css';

// @params {Object} history
// @params {Function} createUser

class Verification extends Component {

    confirm() {
        let data = {
            user: {
                first_name: this.props.user.firstName,
                last_name: this.props.user.lastName,
                username: this.props.user.username,
                email: this.props.user.email,
            },
            password: this.props.user.password
        }
        
        this.props.createUser(data);
        this.props.history.push('/confirmation');
    }

    render() {

        let {
            user,
            history
        } = this.props;

        return (
            <div className="align-center">
                <div>
                    <h3>Verify Information</h3>
                    <div><b>First Name</b>: {user.firstName}</div>
                    <div><b>Last Name</b>: {user.lastName}</div>
                    <div><b>Username</b>: {user.username}</div>
                    <div><b>Email</b>: {user.email}</div>
                    <div><b>Password</b>: {user.password}</div>
                    <div className="btn-group">
                        <button onClick={() => history.push('/')}>Correct Information</button>
                        <button onClick={() => this.confirm()}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
      createUser,
    }, dispatch)
}
  
Verification = connect(mapStateToProps, mapDispatchToProps)(Verification);
  
export default Verification;