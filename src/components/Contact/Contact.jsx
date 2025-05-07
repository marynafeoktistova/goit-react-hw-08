import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.containerContac}>
      <div className={css.thumbContact}>
        <h2 className={css.nameContact}>{name}</h2>
        <p className={css.numberContact}>{number}</p>
      </div>
      <button className={css.buttonDelete} onClick={handleDeleteItem}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
