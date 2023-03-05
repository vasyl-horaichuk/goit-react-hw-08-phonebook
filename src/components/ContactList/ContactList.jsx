import { ContactItem } from './ContactItem';
import { UserContactItem, UserContactList } from './ContactItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operation';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  return (
    <UserContactList>
      {contacts.map(item => (
        <UserContactItem key={item.id}>
          <ContactItem
            contact={item}
            onDelete={() => dispatch(deleteContact(item.id))}
          />
        </UserContactItem>
      ))}
    </UserContactList>
  );
};
