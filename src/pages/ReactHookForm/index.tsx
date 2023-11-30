import { FormEvent } from 'react';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';

const ReactHookForm = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(event.target.name.value);
  };

  return (
    <>
      <h1 className="title">ReactHookForm use</h1>
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

export default ReactHookForm;
