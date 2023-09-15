import { Li, Button, Span } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/phonebookSlice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      <Span>{name}</Span>
      <Span> {number}</Span>
      <Button onClick={() => dispatch(removeContact(id))}>Delete</Button>
    </Li>
  );
};
