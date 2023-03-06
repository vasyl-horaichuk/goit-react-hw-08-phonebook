import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/cotactForm/filterSlice';
import { getFilterValue } from '../../redux/cotactForm/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  return (
    <FilterLabel>
      <FilterInput
        type="text"
        name={filterValue}
        onChange={e => dispatch(setFilterValue(e.target.value))}
        placeholder="Find contacts by name"
      />
    </FilterLabel>
  );
};
