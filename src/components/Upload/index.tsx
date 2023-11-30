import { ChangeEventHandler } from 'react';

type UploadType = {
  imageUpload: ChangeEventHandler<HTMLInputElement>;
};

const Upload = ({ imageUpload }: UploadType) => {
  return (
    <div className="upload">
      <input type="file" name="file" onChange={imageUpload} />
    </div>
  );
};

export default Upload;
