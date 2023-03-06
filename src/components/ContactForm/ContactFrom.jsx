import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/cotactForm/operation';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(6),
      name,
      phone,
    };
    dispatch(addContact(contact));
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        <FormInput
          type="tel"
          name="phone"
          onChange={handleChange}
          value={phone}
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contacts</FormButton>
    </Form>
  );
};
