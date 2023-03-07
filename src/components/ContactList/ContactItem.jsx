import { ContactItemButton } from './ContactItem.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  const [isEdid, setIsEdit] = useState(false);

  const handleChangeMode = () => {
    if (isEdid) {
      setIsEdit(prev => !prev);
      return;
    }
  };
  return (
    <>
      {isEdid ? <input type="text" value={name} /> : <p>{name}: </p>}
      {isEdid ? <input type="tel" value={number} /> : <p>{number}</p>}
      {/* <p>
        {name} : {number}
      </p> */}
      <ContactItemButton type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactItemButton>
      <button type="button" onClick={() => {}}>
        {isEdid ? 'Save' : 'Edid'}
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
