import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';
import { IInitialBufferState } from '../../interfaces';
import formSchema from '../../utils/validation/formSchema';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInitialBufferState>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IInitialBufferState> = (data) => {
    console.log(data);
  };

  console.log(watch('name'));

  return (
    <>
      <h1 className="title">ReactHookForm use</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields errors={errors} register={register} />
        <Gender errors={errors} register={register} />
        <Upload errors={errors} register={register} />
        <Select errors={errors} register={register} />
        <Terms errors={errors} register={register} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReactHookForm;
