import { STATUS } from '../../const';
import { Flex, Badge } from '@mantine/core';

export const StatusCount = () => {
  return (
    <Flex justify='space-between' align='flex-start' gap={5}>
      {Object.values(STATUS).map((status) => (
        <Badge
          key={status}
          p={15}
          size='sm'
          radius='sm'
          color={
            status === 'Open'
              ? 'green'
              : status === 'In progress'
              ? 'yellow'
              : 'red'
          }
        >
          {status} (1)
        </Badge>
      ))}
    </Flex>
  );
};
