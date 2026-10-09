import { Title } from '@mantine/core';
import { randomNumber } from '../../../../utils';

export const CountDown = () => {
  return (
    <Title order={5}>{`Sprint closing: ${randomNumber} day${
      randomNumber > 1 ? 's' : ''
    }`}</Title>
  );
};
