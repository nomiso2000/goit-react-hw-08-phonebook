import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import styles from './Login.module.css';
class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onLogin({...this.state});
        this.setState({
         email: '', password: ''
        });
    }

    render() {
        const {email, password} = this.state;
        return (<div className={styles.container}>
            <h1 className={styles.header}>Login page</h1>
            <form onSubmit={this.handleSubmit} >
            <br/>
                <label>
                    email
                    <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label>
                    password
                    <input
                    className={styles.input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    />
                </label>
                <br/>
                <button type="submit" className={styles.button} >LogIn</button>
            </form>
        </div>)
    }
}

export default connect(null, {onLogin: authOperations.logIn})(Login);