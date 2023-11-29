import s from './styles.module.css';

const Select = () => {
  const allCountries = ['USA', 'Canada', 'UK'];

  return (
    <div className={s.container}>
      <label htmlFor="country">Select Country:</label>
      <input
        type="text"
        id="country"
        list="countries"
        // value={selectedCountry || ''}
        // onChange={handleCountryChange}
      />
      <datalist id="countries">
        {allCountries.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
    </div>
  );
};

export default Select;
