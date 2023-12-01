import { ChangeEventHandler, FormEvent, useState } from 'react';
import { ValidationError } from 'yup';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';
import { useAppDispatch } from '../../hooks/redux';
import { addFormData } from '../../store/slices/formSlice';
import { formDataErrors } from '../../utils/constants';
import formSchema from '../../utils/validation/formSchema';
import { ErrorType } from '../../types';
import { IInitialBufferState } from '../../interfaces';

const Uncontrolled = () => {
  const dispatch = useAppDispatch();

  const [imagePreview, setImagePreview] = useState<File | null>(null);
  const [imageEncode, setImageEncode] = useState<string | ArrayBuffer | null>(
    null
  );

  const [errors, setErrors] = useState<ErrorType>(formDataErrors);

  const imageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(file);
        setImageEncode(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setImageEncode(null);
    }
  };

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
          file: imagePreview,
          country: (data.elements.namedItem('country') as HTMLInputElement)
            .value,
          terms: (data.elements.namedItem('terms') as HTMLInputElement).checked,
        },
        { abortEarly: false }
      );

      const resultData = { ...validateResult, file: imageEncode };

      dispatch(addFormData(resultData));
      setErrors(formDataErrors);
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

        setErrors(result);
      }
    }
  };

  return (
    <>
      <h1 className="title">Uncontrolled form</h1>
      <form onSubmit={handleSubmit}>
        <TextFields errors={errors} />
        <Gender errors={errors} />
        <Upload errors={errors} imageUpload={imageUpload} />
        <Select errors={errors} />
        <Terms errors={errors} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
