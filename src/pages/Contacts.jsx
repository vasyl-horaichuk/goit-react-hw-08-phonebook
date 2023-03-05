import { ContactForm } from '../components/ContactForm/ContactFrom';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Title } from '../components/Title/Title';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { getIsLoading, getError } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
