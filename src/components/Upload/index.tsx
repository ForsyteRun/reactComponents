import { ChangeEventHandler } from 'react';

type UploadType = {
  errorsUpload: string[];
  imageUpload: ChangeEventHandler<HTMLInputElement>;
};

const Upload = ({ errorsUpload, imageUpload }: UploadType) => {
  return (
    <div className={`${'inputContainer'} ${'upload'}`}>
      <input type="file" name="file" onChange={imageUpload} />
      {errorsUpload && <h5>{errorsUpload[0]}</h5>}
    </div>
  );
};

export default Upload;
