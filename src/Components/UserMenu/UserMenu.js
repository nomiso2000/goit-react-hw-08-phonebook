import React from 'react';
import {connect} from 'react-redux';
import authOperations from "../redux/auth/authOperations"
import styles from "./UserMenu.module.css";
function UserMenu  ({
    avatar = `https://www.flaticon.com/svg/static/icons/svg/3617/3617309.svg`,
    name,
    onLogout
})  {
    return (  
        <div className={styles.container}>
        <img src={avatar} alt="" width="32" />
        <span className={styles.text} >Welcome, {name}</span>
        <button type="button" onClick={onLogout} className={styles.button}>Logout</button>
        </div>)

}

const mapStateToProps = state => ({
    name: state.auth.user.name
});

export default connect(mapStateToProps,{ onLogout: authOperations.logOut})(UserMenu);