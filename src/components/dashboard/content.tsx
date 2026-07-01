import { Flex } from '@radix-ui/themes';
import { NavigationMenu } from './navigationMenu';
import { Page } from './page';

export const Content = function () {
  return (
    <>
      <Flex flexGrow="1" className="bg-(--gray-4)">
        <NavigationMenu />
        <Page />
      </Flex>
    </>
  );
};
