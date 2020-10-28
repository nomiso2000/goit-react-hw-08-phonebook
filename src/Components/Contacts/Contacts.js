import React from "react";
import {connect} from 'react-redux'
import { CSSTransition } from "react-transition-group";
import itemsAction from '../redux/item/itemActions'
import itemOperations from '../redux/item/itemOperations'
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Header from "./header";
import Notification from '../Notification/Notification'
import Filter from "../Filter/Filter";
import itemSelector from '../redux/item/itemSelector'
import stylesNotification from '../Notification/Notification.module.css'

// import {Route} from 'react-router-dom'
// import Navigation from '../Navigation/Navigation'
import styles from "./Contacts.module.css";

class App extends React.Component  {

  componentDidMount () {
    //   if(!this.props.isAuthentificated) {
    //       this.props.history.replace("/login")
    //       return
    //   }
    this.props.fetchItems()
  }

//   componentDidUpdate() {
//     if(!this.props.isAuthentificated) {
//         this.props.history.replace("/login")
//         return
//     }
//   }

  render () {

    return (
      <>
      <div className={styles.container}>
         <CSSTransition
          in={true}
          classNames={styles}
          timeout={500}
          appear={true}
        >         
         <Header />
         </CSSTransition>
          <CSSTransition 
           in={this.props.notific}
           timeout={1000} 
           classNames={stylesNotification}  
           unmountOnExit
           onEntered={() => this.props.toggleNotification()}  
            > 
            <Notification/>
          </CSSTransition>
          <ContactForm  />
          {this.props.contacts.length > 1 &&     
        <> 
          <h2>Contacts</h2>
          <Filter />
        </> }
        <ContactList  />
      </div>
      </>
    );
  }

}

const mapStateToProps = state => {
  return {
    notific: itemSelector.getNotific(state),
    contacts: itemSelector.getContacts(state),
    // isAuthentificated: state.auth.token,
  }
}
const mapDispatchToProps = {
  toggleNotification: itemsAction.setVisible,
  fetchItems: itemOperations.fetchItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
