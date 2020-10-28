import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import styles from './Register.module.css'
class Register extends Component {
    state = {
        name: '',
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
        this.props.onRegister({...this.state});
        this.setState({
            name: '', email: '', password: ''
        });
    }

    render() {
        const {name, email, password} = this.state;
        return (
        <div className={styles.container}>
            <h1 className={styles.header}>Register page</h1>
            <form onSubmit={this.handleSubmit} >
            <label >
                    name
                    <input
                    className={styles.input}
                    type="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label >
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
                <label >
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
            <button className={styles.button} type="submit" >Register</button>
            </form>
        </div>)
    }

}


export default connect(null, {onRegister: authOperations.register})(Register);