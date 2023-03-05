import { ContactItemButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, phone }, onDelete }) => {
  return (
    <>
      <p>
        {name} : {phone}
      </p>
      <ContactItemButton type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactItemButton>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
