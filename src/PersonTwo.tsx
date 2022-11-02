import { memo } from 'react';
import { UpdatedComponent } from './HOC';

interface PersonTwoProps {
  money: number;
  handleIncrease: () => void;
}

export const PersonTwo = UpdatedComponent(
  memo(({ handleIncrease, money }: PersonTwoProps) => (
    <div>
      <h2>Sara has salary - {money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  ))
);

// export default UpdatedComponent(PersonOne);
