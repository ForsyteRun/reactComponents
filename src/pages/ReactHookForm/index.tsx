import { SubmitHandler, useForm } from 'react-hook-form';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';
import { IConfirmPassword } from '../../interfaces';

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm<IConfirmPassword>();

  const onSubmit: SubmitHandler<IConfirmPassword> = (data) => console.log(data);

  return (
    <>
      <h1 className="title">ReactHookForm use</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields register={register} />
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
