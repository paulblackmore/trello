import { STATUS } from '../../const';
import { Flex, Title } from '@mantine/core';

export const StatusCount = () => {
  return (
    <Flex justify='space-between' align='flex-start' gap={5}>
      {Object.values(STATUS).map((status) => (
        <Title key={status} order={5}>
          {status} (1)
        </Title>
      ))}
    </Flex>
  );
};
