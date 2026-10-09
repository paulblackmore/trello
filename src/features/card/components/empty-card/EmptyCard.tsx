import { Text, UnstyledButton, Flex } from '@mantine/core';

export const EmptyCard = () => {
  return (
    <UnstyledButton onClick={() => {}} w='100%'>
      <Flex direction='column' justify='center' align='center' h={100}>
        <Text size='xs'>Click to add a card</Text>
      </Flex>
    </UnstyledButton>
  );
};
