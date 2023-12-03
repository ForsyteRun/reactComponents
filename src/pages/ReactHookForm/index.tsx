import { FieldError, useForm } from 'react-hook-form';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';
import { useAppDispatch } from '../../hooks/redux';
import useFileReader from '../../hooks/useFileReader';
import { IInitialBufferState } from '../../interfaces';
import formSchema from '../../utils/validation/formSchema';
import { useYupValidationResolver } from '../../utils/validation/useYupValidationResolver';
import { useEffect } from 'react';
import { addFormData } from '../../store/slices/formSlice';

type PasswordType = FieldError & {
  count: number;
};

const ReactHookForm = () => {
  const dispatch = useAppDispatch();
  const { pureFile, encodeFile, clearFile, readFile } = useFileReader<File>();
  const resolver = useYupValidationResolver(formSchema, pureFile);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<IInitialBufferState>({
    resolver,
    mode: 'onChange',
  });

  useEffect(() => {
    if (pureFile) {
      trigger('file');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pureFile]);

  const onSubmit = (data: IInitialBufferState) => {
    const resultData = { ...data, file: encodeFile };
    dispatch(addFormData(resultData));
    clearFile();
    reset();
  };

  return (
    <>
      <h1 className="title">ReactHookForm use</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields
          errors={errors}
          register={register}
          countPasswordErrors={
            errors.password ? (errors.password as PasswordType).count : 6
          }
        />
        <Gender errors={errors} register={register} />
        <Upload errors={errors} register={register} readFile={readFile} />
        <Select errors={errors} register={register} />
        <Terms errors={errors} register={register} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReactHookForm;
