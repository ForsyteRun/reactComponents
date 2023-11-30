import s from './styles.module.css';

interface ITextFields {
  errorsName?: string[];
  errorsAge?: string[];
  errorsEmail?: string[];
  errorsPassword?: string[];
  errorsConfirmPassword?: string[];
}

const TextFields = ({
  errorsAge,
  errorsName,
  errorsEmail,
  errorsPassword,
  errorsConfirmPassword,
}: ITextFields) => {
  return (
    <div className={s.container}>
      <div>
        <label>
          <input type="text" name="name" placeholder="Name" />
        </label>
        {errorsName && <h5>{errorsName[0]}</h5>}
      </div>
      <div>
        <label>
          <input type="number" name="age" placeholder="Age" />
        </label>
        {errorsAge && <h5>{errorsAge[0]}</h5>}
      </div>
      <div>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        {errorsEmail && <h5>{errorsEmail[0]}</h5>}
      </div>
      <div>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>
        {errorsPassword && <h5>{errorsPassword[0]}</h5>}
      </div>
      <div>
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        {errorsConfirmPassword && <h5>{errorsConfirmPassword[0]}</h5>}
      </div>
    </div>
  );
};

export default TextFields;
