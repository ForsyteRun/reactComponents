import { useAppSelector } from '../../hooks/redux';
import { UseFormRegister } from 'react-hook-form';
import s from './styles.module.css';
import { IConfirmPassword } from '../../interfaces';

interface ISelect {
  errorCountry?: string[];
  register?: UseFormRegister<IConfirmPassword>;
}

const Select = ({ errorCountry = [], register }: ISelect) => {
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
      {errorCountry.length > 0 && <h5>incorrect country</h5>}
      <datalist id="countries">
        {allCountries.map((country: string) => (
          <option key={country} value={country} />
        ))}
      </datalist>
    </div>
  );
};

export default Select;
