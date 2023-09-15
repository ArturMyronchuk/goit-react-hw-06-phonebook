import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/phonebookSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Label>
        Find contacts by name{' '}
        <Input
          type="text"
          name="filter"
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </Label>
    </>
  );
};
