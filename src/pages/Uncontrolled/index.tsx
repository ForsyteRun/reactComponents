import { FormEvent } from 'react';
import { Select, Terms, TextFields, Gender, Upload } from '../../components';

const Uncontrolled = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(event.target.name.value);
  };

  return (
    <>
      <div className="title">Uncontrolled form</div>
      <form action="" onSubmit={submit}>
        <TextFields />
        <Gender />
        <Upload />
        <Select />
        <Terms />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
