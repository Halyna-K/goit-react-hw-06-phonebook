import initialContacts from "../../dataBase/contacts.json";
import {combineReducers} from 'redux'

const contactsList = (state = initialContacts, action) => {
  switch (action.type) {
    case 'contact/add':
      return [...state, action.payload];
    case 'contact/delete':
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const contactFilter = (state= '', action ) =>{
  switch (action.type) {
    case 'filter/value':
      return action.payload;
    default:
      return state;
  }
}

export const contactReducer = combineReducers({contacts: contactsList, filter: contactFilter})
