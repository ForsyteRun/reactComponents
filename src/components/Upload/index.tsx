import { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IInitialBufferState } from '../../interfaces';
import { ErrorType } from '../../types';

type UploadType = {
  errors: ErrorType;
  readFile: (file: File) => void;
  register?: UseFormRegister<IInitialBufferState>;
};

const Upload = ({ errors: { file }, register, readFile }: UploadType) => {
  const handleChangeImageUpload: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const target = event.target.files as FileList;
    const file = target.item(0);

    readFile(file as File);
  };
  return (
    <div className={`${'inputContainer'} ${'upload'}`}>
      <input
        type="file"
        {...(register
          ? register('file', {
              onChange: handleChangeImageUpload,
            })
          : { name: 'file' })}
        {...(!register && { onChange: handleChangeImageUpload })}
      />
      {file && <h5>{file.message}</h5>}
    </div>
  );
};

export default Upload;
