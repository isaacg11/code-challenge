import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions/user/user';
import './landing.css';

// @params {Object} history
// @params {Function} setUser

class Landing extends Component {

    state = {}

    setValue(e) {
        let user = Object.assign({}, this.props.user);
        for(let field in user) {
            if(field === e.target.name) user[field] = e.target.value;
        }

        this.props.setUser(user);
    }

    submit(e) {
        e.preventDefault();
        if(this.state.password !== this.state.confirm) return alert('Password must match confirm password field');
        this.props.history.push('/verify');
    }

    render() {

        let { user } = this.props;

        return (
            <div>
                <form className="align-center" onSubmit={(e) => this.submit(e)}>
                    <div>
                        <h3>New Account</h3>
                        <input 
                            required
                            type="text"
                            name="firstName"
                            className="input-field"
                            placeholder="First Name"
                            value={user.firstName}
                            onChange={(e) => this.setValue(e)}
                        />
                        <input 
                            required
                            type="text"
                            name="lastName"
                            className="input-field"
                            placeholder="Last Name"
                            value={user.lastName}
                            onChange={(e) => this.setValue(e)}
                        />
                        <input 
                            required
                            type="text"
                            name="username"
                            className="input-field"
                            placeholder="Username"
                            value={user.username}
                            onChange={(e) => this.setValue(e)}
                        />
                        <input 
                            required
                            type="email"
                            name="email"
                            className="input-field"
                            placeholder="email"
                            value={user.email}
                            onChange={(e) => this.setValue(e)}
                        />
                        <input 
                            required
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="password"
                            value={user.password}
                            onChange={(e) => this.setValue(e)}
                        />
                        <input 
                            required
                            type="password"
                            name="confirm"
                            className="input-field"
                            placeholder="confirm"
                            value={user.confirm}
                            onChange={(e) => this.setValue(e)}
                        />
                        <button type="submit" className="submit-btn">Next</button>
                    </div>
                </form>
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
      setUser
    }, dispatch)
}
  
Landing = connect(mapStateToProps, mapDispatchToProps)(Landing);
  
export default Landing;