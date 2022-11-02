import { memo } from 'react';
import { UpdatedComponent } from './HOC';

interface PersonOneProps {
  money: number;
  handleIncrease: () => void;
}

export const PersonOne = UpdatedComponent(
  memo(({ handleIncrease, money }: PersonOneProps) => (
    <div>
      <h2>John has salary - {money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  ))
);

// export default UpdatedComponent(PersonOne);
