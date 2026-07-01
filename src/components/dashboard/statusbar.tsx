import { Flex } from '@radix-ui/themes';

import { StatusbarItem } from './statusbarItem';
import type { StatusbarItemProps } from './statusbarItem';

import { GoBellFill } from 'react-icons/go';
import { GoBookmarkFill } from 'react-icons/go';
import { Avatar } from './avatar';

const dataItemsLeft: StatusbarItemProps[] = [
  {
    icon: GoBellFill,
    description: 'Notifications(0)',
  },
  {
    icon: GoBookmarkFill,
    description: 'Bookmark(4)',
  },
  {
    icon: GoBookmarkFill,
    title: 'Load Balancer',
    description: 'Balancer',
    loading: true,
    className: 'bg-(--accent-9) text-white',
  },
];

const dataItemsRight: StatusbarItemProps[] = [
  {
    icon: GoBellFill,
    description: 'Notifications(0)',
  },
  {
    icon: GoBookmarkFill,
    description: 'Bookmarks',
  },
  {
    description: 'Profile',
    custom: <Avatar />,
  },
];

export const Statusbar = function () {
  return (
    <Flex width="100%" height="42px" px="12px" justify="between" className="bg-(--gray-1) border-t border-(--gray-6)">
      <Flex gap="4">
        <StatusbarItem {...dataItemsLeft[0]} />
        <StatusbarItem {...dataItemsLeft[1]} />
        <StatusbarItem {...dataItemsLeft[2]} />
      </Flex>
      <Flex gap="4">
        <StatusbarItem {...dataItemsRight[0]} />
        <StatusbarItem {...dataItemsRight[1]} />
        <StatusbarItem {...dataItemsRight[2]} />
      </Flex>
    </Flex>
  );
};
