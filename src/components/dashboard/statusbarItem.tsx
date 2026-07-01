import type React from 'react';

import { Box } from '@radix-ui/themes';
import { Flex } from '@radix-ui/themes';
import { Tooltip } from '@radix-ui/themes';

interface StatusbarItemProps {
  title?: string;
  icon?: any;
  description?: React.ReactNode;
  loading?: boolean;
  custom?: React.ReactNode;
  className?: string;
}

const StatusbarItem = function ({
  title,
  icon: Icon,
  description,
  loading = false,
  custom,
  className,
}: StatusbarItemProps) {
  return (
    <Box
      width="fit-content"
      height="100%"
      px="8px"
      className={className ? className : 'hover:bg-(--gray-3) text-(--gray-12)/60 hover:text-(--gray-12)'}>
      <Tooltip content={loading ? 'Loading' : description}>
        <Flex width="fit-content" height="100%" align="center" gap="4">
          {loading ? <Spinner /> : undefined}
          {loading ? undefined : Icon ? <Icon size="20px" /> : custom ? custom : undefined}
          {title ? title : ''}
        </Flex>
      </Tooltip>
    </Box>
  );
};

// Todo: remove this custom css spinner in future.
const Spinner = function () {
  return <div className="size-5 rounded-full border-3 border-transparent border-t-current animate-spin"></div>;
};

export { StatusbarItem };
export type { StatusbarItemProps };
