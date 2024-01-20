import { useState } from 'react';

const useFileReader = <T extends File>() => {
  const [imagePreview, setImagePreview] = useState<File | null>(null);
  const [imageBase64, setImageBase64] = useState<string | ArrayBuffer | null>(
    null
  );

  const readFile = (file: T) => {
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(file);
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFile = () => {
    setImagePreview(null);
    setImageBase64(null);
  };

  return {
    pureFile: imagePreview,
    encodeFile: imageBase64,
    readFile,
    clearFile,
  };
};

export default useFileReader;
