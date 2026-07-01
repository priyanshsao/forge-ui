import { Flex } from '@radix-ui/themes';
import { StatusbarItem } from './statusbarItem';
import { StatusbarDataLeft, StatusbarDataRight } from './statusbar.ts';

export const Statusbar = function () {
  return (
    <Flex width="100%" height="42px" px="12px" justify="between" className="bg-(--gray-1) border-t border-(--gray-6)">
      <Flex gap="4">
        {StatusbarDataLeft.map((data, index) => (
          <StatusbarItem key={index} {...data} />
        ))}
      </Flex>
      <Flex gap="4">
        {StatusbarDataRight.map((data, index) => (
          <StatusbarItem key={index} {...data} />
        ))}
      </Flex>
    </Flex>
  );
};
