import { useAppSelector } from '../../hooks/redux';
import s from './styles.module.css';

interface ISelect {
  errorCountry: string[];
}

const Select = ({ errorCountry = [] }: ISelect) => {
  const {
    fixedData: { allCountries },
  } = useAppSelector((state) => state.form);

  console.log(errorCountry);

  return (
    <div className={`${s.container} inputContainer`}>
      <div className={s.inputBlock}>
        <label htmlFor="country">Select Country:</label>
        <input type="text" id="country" list="countries" />
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
