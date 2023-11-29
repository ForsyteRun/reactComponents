import { FormEvent } from 'react';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';

const ReactHookForm = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(event.target.name.value);
  };

  return (
    <>
      <div className="title">ReactHookForm use</div>
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
