import { Text, UnstyledButton, Stack } from '@mantine/core';

export const EmptyCard = () => {
  return (
    <UnstyledButton onClick={() => {}} w='100%'>
      <Stack justify='center' align='center' h={100}>
        <Text size='xs'>Click to add a card</Text>
      </Stack>
    </UnstyledButton>
  );
};
