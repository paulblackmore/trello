import { Button } from '@mantine/core';
import { Flex } from '@mantine/core';

type Props = { handleAddColumn: () => void };

export const Actions = ({ handleAddColumn }: Props) => {
  return (
    <Flex gap={5}>
      <Button
        variant='outline'
        color='cyan'
        size='sm'
        onClick={handleAddColumn}
      >
        + Add column
      </Button>
      <Button variant='filled' color='cyan' size='sm' onClick={() => {}}>
        Restart sprint
      </Button>
    </Flex>
  );
};
