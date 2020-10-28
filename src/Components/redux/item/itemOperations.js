import itemActions from "./itemActions"
import axios from 'axios'


const addItem = (name, number) => dispatch => {
    dispatch(itemActions.addItemRequest());
    axios.post('https://goit-phonebook-api.herokuapp.com/contacts', {name, number})
    .then(response => {
        dispatch(itemActions.addItemSuccess(response.data))
    }).catch(error => dispatch(itemActions.addItemError(error)))
}


const fetchItems = () => dispatch => {
    dispatch(itemActions.fetchItemRequest())
    axios.get('https://goit-phonebook-api.herokuapp.com/contacts')
    .then(response => dispatch(itemActions.fetchItemSuccess(response.data)))
    .catch(error => dispatch(itemActions.fetchItemError(error)))

}

const removeItem = id => dispatch => {
    dispatch(itemActions.removeItemRequest())
    axios.delete(`https://goit-phonebook-api.herokuapp.com/contacts/${id}`)
    .then(() => dispatch(itemActions.removeItemSuccess(id)))
    .catch(error => dispatch(itemActions.removeItemError(error)))
}
export default {
    addItem,
    fetchItems,
    removeItem
}