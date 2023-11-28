import { Dispatch, SetStateAction } from 'react';
import { setQueryParam } from '../../utils';

interface ISelect {
  setItemsPerPage: Dispatch<SetStateAction<number>>;
}

const Select = ({ setItemsPerPage }: ISelect) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setItemsPerPage(Number(selectedValue));
    setQueryParam('page', '1');
  };

  return (
    <select defaultValue={10} onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
  );
};

export default Select;
