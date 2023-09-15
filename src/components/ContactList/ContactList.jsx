import { ContactItem } from './ContactItem';
import { Ul } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const uniqueUserNames = {};

  const onAddFilter = () => {
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      )
      .filter(contact => {
        const lowerCaseName = contact.name.toLowerCase();
        if (!uniqueUserNames[lowerCaseName]) {
          uniqueUserNames[lowerCaseName] = true;
          return true;
        }
        return false;
      });
  };

  return (
    <Ul>
      {onAddFilter().map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </Ul>
  );
};
