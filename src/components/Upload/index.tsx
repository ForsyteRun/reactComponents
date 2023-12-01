import { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IInitialBufferState } from '../../interfaces';
import { ErrorType } from '../../types';

type UploadType = {
  errors: ErrorType;
  imageUpload?: ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegister<IInitialBufferState>;
};

const Upload = ({ errors: { file }, imageUpload, register }: UploadType) => {
  return (
    <div className={`${'inputContainer'} ${'upload'}`}>
      <input
        type="file"
        {...(register ? register('file') : { name: 'file' })}
        onChange={imageUpload}
      />
      {file && <h5>{file.message}</h5>}
    </div>
  );
};

export default Upload;
