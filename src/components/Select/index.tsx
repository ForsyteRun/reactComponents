import { useAppSelector } from '../../hooks/redux';
import s from './styles.module.css';
import { IInitialBufferState } from '../../interfaces';
import { UseFormRegister } from 'react-hook-form';
import { ErrorType } from '../../types';

interface ISelect {
  errors: ErrorType;
  register?: UseFormRegister<IInitialBufferState>;
}

const Select = ({ errors: { country }, register }: ISelect) => {
  const {
    fixedData: { allCountries },
  } = useAppSelector((state) => state.form);

  return (
    <div className={`${s.container} inputContainer`}>
      <div className={s.inputBlock}>
        <label htmlFor="country">Select Country:</label>
        <input
          type="text"
          id="country"
          list="countries"
          {...(register ? register('country') : { name: 'country' })}
        />
      </div>
      {country && <h5>{country.message}</h5>}
      <datalist id="countries">
        {allCountries.map((country: string) => (
          <option key={country} value={country} />
        ))}
      </datalist>
    </div>
  );
};

export default Select;
