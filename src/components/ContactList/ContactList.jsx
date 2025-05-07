import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { selectLoading } from '../../redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      {filteredContacts.length === 0 && !isLoading ? (
        <p className={css.infoText}>No contacts found</p>
      ) : (
        <ul className={css.listContacts}>
          {filteredContacts.map(contact => (
            <li className={css.itemContact} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      )}

      {filteredContacts.length === 0 && filteredContacts.length !== 0 && <p className={css.infoText}>Your phonebook is empty 😢</p>}
    </>
  );
};

export default ContactList;
