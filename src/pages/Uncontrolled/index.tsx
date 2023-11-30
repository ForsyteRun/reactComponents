import { ChangeEventHandler, FormEvent, useState } from 'react';
import { ValidationError } from 'yup';
import { Gender, Select, Terms, TextFields, Upload } from '../../components';
import { useAppDispatch } from '../../hooks/redux';
import { IConfirmPassword } from '../../interfaces';
import { addFormData } from '../../store/slices/formSlice';
import { formDataErrors } from '../../utils/constants';
import formSchema from '../../utils/validation/formSchema';

const Uncontrolled = () => {
  const dispatch = useAppDispatch();

  const [imagePreview, setImagePreview] = useState<File | null>(null);
  const [imageEncode, setImageEncode] = useState<string | ArrayBuffer | null>(
    null
  );

  const [errors, setErrors] =
    useState<Omit<IConfirmPassword, 'fixedData'>>(formDataErrors);

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

    console.log((data.elements.namedItem('terms') as HTMLInputElement).checked);

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
    } catch (error) {
      if (error instanceof ValidationError) {
        const result: Record<string, string[]> = {};

        error.inner.forEach((e) => {
          const path = e.path as string;

          if (!result[path]) {
            result[path] = [];
          }

          result[path].push(e.message);
        });

        setErrors(result as Omit<IConfirmPassword, 'fixedData'>);
      }
    }
  };

  console.log(errors);

  return (
    <>
      <h1 className="title">Uncontrolled form</h1>
      <form onSubmit={handleSubmit}>
        <TextFields
          errorsName={errors.name}
          errorsAge={errors.age}
          errorsEmail={errors.email}
          errorsPassword={errors.password}
          errorsConfirmPassword={errors.confirmPassword}
        />
        <Gender errorsGender={errors.gender} />
        <Upload errorsUpload={errors.file} imageUpload={imageUpload} />
        <Select errorCountry={errors.country} />
        <Terms errorTerms={errors.terms} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
