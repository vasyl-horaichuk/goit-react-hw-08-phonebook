import { ContactForm } from '../components/ContactForm/ContactFrom';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Title } from '../components/Title/Title';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/cotactForm/operation';
import { getIsLoading, getError } from '../redux/cotactForm/selectors';
import {Helmet} from 'react-helmet';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
export default ContactsPage;
