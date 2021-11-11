import { addContact, deleteContact } from "./actions";
import initialContacts from "../../dataBase/contacts.json";
import {combineReducers} from 'redux'

const contactsList = (state = initialContacts, action) => {
  switch(action.type){
    case 'contact/add':
      return [...state,action.payload];
      break;
    case 'contact/delete':
      return state.filter(contact => contact.id !== action.payload.id)
      break;

    default:
      return state;
  }
};

const contactFilter = (state= '', action)=>{
    return state;
}

export const contactReducer = combineReducers({contacts: contactsList, filter: contactFilter})
