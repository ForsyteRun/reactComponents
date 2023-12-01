import { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IConfirmPassword } from '../../interfaces';

type UploadType = {
  errorsUpload?: string[];
  imageUpload?: ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegister<IConfirmPassword>;
};

const Upload = ({ errorsUpload, imageUpload, register }: UploadType) => {
  return (
    <div className={`${'inputContainer'} ${'upload'}`}>
      <input
        type="file"
        {...(register ? register('file') : { name: 'file' })}
        onChange={imageUpload}
      />
      {errorsUpload && <h5>{errorsUpload[0]}</h5>}
    </div>
  );
};

export default Upload;
