import { useState, FC, useCallback } from 'react';

interface OriginalComponentProps {
  money: number;
  handleIncrease: () => void;
}

export const UpdatedComponent = (OriginalComponent: FC<OriginalComponentProps>) => {
  const NewComponent = () => {
    const [money, setMoney] = useState(0);

    const handleIncrease = useCallback(() => setMoney((prev) => prev + 10), []);

    return <OriginalComponent handleIncrease={handleIncrease} money={money} />;
  };

  return NewComponent;
};
