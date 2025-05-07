import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

const initialStateFilter = {
  name: '',
};
const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  const cleanInput = () => {
    dispatch(changeFilter(initialStateFilter.name));
  };

  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.container}>
        <input className={css.formInput} type='text' value={searchValue} onChange={handelInputSearch} />
        <button className={css.cleanButton} onClick={cleanInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
