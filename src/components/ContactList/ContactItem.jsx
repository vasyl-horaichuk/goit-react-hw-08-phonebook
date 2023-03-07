import { ContactItemButton } from './ContactItem.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { editContact } from 'redux/cotactForm/operation';

export const ContactItem = ({
  contact: { id, name: nameValue, number: numberValue },
  onDelete,
}) => {
  const [isEdid, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const dispatch = useDispatch();

  const handleChangeMode = () => {
    if (isEdid) {
      setIsEdit(prev => !prev);
      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };
  return (
    <>
      {isEdid ? (
        <input name="name" onChange={handleChange} type="text" value={name} />
      ) : (
        <p>{name}: </p>
      )}
      {isEdid ? (
        <input
          name="number"
          onChange={handleChange}
          type="tel"
          value={number}
        />
      ) : (
        <p>{number}</p>
      )}
      {/* <p>
        {name} : {number}
      </p> */}
      <ContactItemButton type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactItemButton>
      <button type="button" onClick={handleChangeMode}>
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
