import { FormEvent, useState } from 'react';
import { ValidationError } from 'yup';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';
import { useAppDispatch } from '../../hooks/redux';
import useFileReader from '../../hooks/useFileReader';
import { IInitialBufferState } from '../../interfaces';
import { addFormData } from '../../store/slices/formSlice';
import { ErrorType } from '../../types';
import { formDataErrors } from '../../utils/constants';
import formSchema from '../../utils/validation/formSchema';

const Uncontrolled = () => {
  const dispatch = useAppDispatch();
  const { pureFile, encodeFile, clearFile, readFile } = useFileReader<File>();

  const [errors, setErrors] = useState<ErrorType>(formDataErrors);
  const [countPasswordErrors, setCountPasswordErrors] = useState<number>(6);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = event.currentTarget;

    try {
      const validateResult = await formSchema.validate(
        {
          name: (data.elements.namedItem('name') as HTMLInputElement).value,
          age: (data.elements.namedItem('age') as HTMLInputElement).value,
          email: (data.elements.namedItem('email') as HTMLInputElement).value,
          password: (data.elements.namedItem('password') as HTMLInputElement)
            .value,
          confirmPassword: (
            data.elements.namedItem('confirmPassword') as HTMLInputElement
          ).value,
          gender: (data.elements.namedItem('gender') as HTMLInputElement).value,
          file: pureFile,
          country: (data.elements.namedItem('country') as HTMLInputElement)
            .value,
          terms: (data.elements.namedItem('terms') as HTMLInputElement).checked,
        },
        { abortEarly: false }
      );

      const resultData = { ...validateResult, file: encodeFile };

      dispatch(addFormData(resultData));
      clearFile();
      setErrors(formDataErrors);
      data.reset();
    } catch (error) {
      if (error instanceof ValidationError) {
        const result = {} as Record<
          keyof IInitialBufferState,
          { message: string }
        >;

        error.inner.forEach((e) => {
          const path = e.path as keyof IInitialBufferState;

          if (!result[path]) {
            result[path] = { message: '' };
          }

          result[path].message = e.message;
        });

        const passwordErrors = error.inner.filter(
          (e) => e.path === 'password'
        ).length;

        setCountPasswordErrors(passwordErrors);

        setErrors(result);
      }
    }
  };

  return (
    <>
      <h1 className="title">Uncontrolled form</h1>
      <form onSubmit={handleSubmit}>
        <TextFields errors={errors} countPasswordErrors={countPasswordErrors} />
        <Gender errors={errors} />
        <Upload errors={errors} readFile={readFile} />
        <Select errors={errors} />
        <Terms errors={errors} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
