import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import styles from './Navigation.module.css'
function Navigation  ({isAuthentificated}) {
    return (
<div>
           <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>

          {isAuthentificated ? <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink> :  <>  <NavLink
            to="/login"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>  
           <NavLink
            to="/register"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Register
          </NavLink>
          </>
           }
   </div>
      );
};
const  mapStateToProps = state => ({
  isAuthentificated: state.auth.token
})

export default connect(mapStateToProps)(Navigation);