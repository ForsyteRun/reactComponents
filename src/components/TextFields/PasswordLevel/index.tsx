import { useEffect, useState } from 'react';

const PasswordLevel = ({
  countPasswordErrors,
}: {
  countPasswordErrors: number;
}) => {
  const [level, setLevel] = useState<string>('');
  const [classLevel, setClassLevel] = useState<string>('easyLevel');

  useEffect(() => {
    if (countPasswordErrors > 4) {
      setLevel('Easy');
      setClassLevel('easyLevel');
    } else if (countPasswordErrors >= 1 && countPasswordErrors <= 4) {
      setLevel('Normal');
      setClassLevel('normalLevel');
    } else {
      setLevel('Hard');
      setClassLevel('hardLevel');
    }
  }, [countPasswordErrors]);

  return (
    <span className={[`${classLevel}`, 'containerPasswordLevel'].join(' ')}>
      {level}
    </span>
  );
};

export default PasswordLevel;
