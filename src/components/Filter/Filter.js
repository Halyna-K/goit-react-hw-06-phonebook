import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import s from "./Filter.module.css";
import { useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../redux/contacts/actions';
import {getContacts} from '../../redux/contacts/selectors';

const nameId = uuid();

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  // const filteredContacts = useMemo(() => {
  //  let normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //      contact.name.toLowerCase().includes(normalizedFilter)
  //    )
  // }, [filter, contacts]);

  const changeFilter = useCallback( e =>
    {
    // setFilter(e.target.value); // local
    dispatch(filterValue(e.target.value));
    },
     [dispatch]);

  return (
  <label htmlFor={nameId} value={filter} className={s.filter}>
    Find contact by name
    <input
      id={nameId}
      onChange={changeFilter}
      className={s.input}
      type="text"
      name="filter"
      value={filter}
      placeholder="Enter contact name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
  </label>
  )
};

 Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func,
 };
export default Filter
