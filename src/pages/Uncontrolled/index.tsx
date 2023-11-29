import { FormEvent } from 'react';
import { Select, Terms, TextFields, Gender } from '../../components';
import s from './styles.module.css';

const Uncontrolled = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(event.target.name.value);
  };

  return (
    <>
      <div className={s.title}>Uncontrolled form</div>
      <form action="" className={s.formUncontrolled} onSubmit={submit}>
        <TextFields />
        <Gender />
        <div className={s.upload}>
          <input type="file" />
        </div>
        <Select />
        <Terms />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
