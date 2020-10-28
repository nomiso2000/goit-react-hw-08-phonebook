import React, {Suspense} from "react";
import {connect} from 'react-redux'
import {Switch} from 'react-router-dom'
import authOperation from "../redux/auth/authOperations"
import routes from '../Routes/routes'
import PublicRoute from '../Routes/PublicRoute'
import PrivateRoute from '../Routes/PrivateRoutes'
import UserMenu from '../UserMenu/UserMenu'
import Navigation from '../Navigation/Navigation'
import styles from "./App.module.css";

class App extends React.Component  {

  componentDidMount () {
    this.props.onGetCurrentUser()
  }

  render () {
    return (
      <>
      <div className={styles.userContainer} >    
        <Navigation/>
      {this.props.isAuthentificated &&      <UserMenu/> }
       </div>

      <Suspense fallback={<h1>Loading....</h1>}> 
       <Switch>
        {routes.map(route => {
          return route.private ? 
          <PrivateRoute key={route.path} {...route} /> :  
          <PublicRoute key={route.path} {...route} restricted = {route.restricted} />
        })}
       </Switch> 
       </Suspense> 
 


      </>
    );
  }

}

const mapStateToProps = state => {
  return {
    isAuthentificated: state.auth.token,
  }
}
const mapDispatchToProps = {
  onGetCurrentUser:  authOperation.getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
