import type React from 'react';
import type { SetStateAction } from 'react';
import { Flex } from '@radix-ui/themes';
import { Tooltip } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';
import type { Dispatch } from 'react';

interface NavigationMenuItemProps {
  icon: any;
  tooltip: React.ReactNode;
  title: string;
  navState: boolean;
  active?: boolean;
  stateId: number;
  update: Dispatch<SetStateAction<boolean[]>>;
}

const NavigationMenuItem = function ({
  icon: Icon,
  tooltip,
  title,
  navState,
  active = false,
  update,
  stateId,
}: NavigationMenuItemProps) {
  let className: string = 'border-l-6 text-() select-none ';
  let tooltipClass: string = '';

  if (active) {
    className += 'bg-(--gray-5) border-l-(--accent-10) ';
  } else {
    className += 'hover:bg-(--gray-4) border-transparent text-(--gray-12)/60 hover:text-(--gray-12) ';
  }

  if (navState) {
    tooltipClass = 'invisible';
  }

  return (
    <Tooltip content={tooltip} side="right" className={tooltipClass}>
      <Flex
        width="100%"
        height="fit-content"
        mt="8px"
        px="24px"
        py="16px"
        justify="center"
        align="center"
        className={className}
        onClick={() => update(prev => prev.map((_, index) => index === stateId))}>
        <Icon size="32px" />
        {navState ? (
          <Flex flexGrow="1" mx="6">
            <Text size="5" className="whitespace-nowrap">
              {title}
            </Text>
          </Flex>
        ) : undefined}
      </Flex>
    </Tooltip>
  );
};

export { NavigationMenuItem };
export type { NavigationMenuItemProps };
