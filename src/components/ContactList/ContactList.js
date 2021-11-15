import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux';
import {getContacts} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/actions'

const ContactList = () => {
const contacts = useSelector(getContacts);
const dispatch = useDispatch();

return (
  <ul className={s.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={s.item}>
        <p className={s.text}>{contact.name + " : " + contact.number}</p>

        <Button
          id= {contact.id}
          variant="outline-secondary"
          onClick={() => (
            dispatch(deleteContact(contact.id))
          )}
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
)
};

 ContactList.propTypes = {
   onDeleteContact: PropTypes.func,
   contacts: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.string,
       name: PropTypes.string,
       number: PropTypes.string,
     })
   ),
 };
export default ContactList
