import { Dispatch, SetStateAction } from 'react';

type ContextType = {
  id: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
export default ContextType;
